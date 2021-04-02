import { getService } from '../../services';

async function loadDataWeather({ latitude, longitude }) {
  let param = `weather?lat=${latitude}&lon=${longitude}`;
  return await getService(param);
}

export default loadDataWeather;
