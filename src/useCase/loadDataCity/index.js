import { getService } from '../../services';

async function loadDataCity(params) {
  const { city } = params;
  let urlParam = `weather?q=${city}`;
  return await getService(urlParam);
}

export default loadDataCity;
