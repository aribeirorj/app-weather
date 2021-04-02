import { loadDataWeather } from '../../useCase';

function getPosition() {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
}

async function loadInfoUser() {
  let location = navigator.geolocation ? await getPosition() : alert('erro');
  const { latitude, longitude } = location.coords;
  const { data } = await loadDataWeather({ latitude, longitude });
  return data;
}

export default loadInfoUser;
