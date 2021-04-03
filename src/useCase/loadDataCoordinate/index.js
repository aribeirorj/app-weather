import { getService } from '../../services';

function getPosition() {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
}

async function loadDataCoordinate() {
  let location = '';
  let param = '';

  location = navigator.geolocation
    ? await getPosition()
    : alert('Para utilizar o serviço é preciso conceder acesso ao Browser');
  const { latitude, longitude } = location.coords;
  param = `weather?lat=${latitude}&lon=${longitude}`;
  return await getService(param);
}

export default loadDataCoordinate;
