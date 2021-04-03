import { api } from '../infra';

export async function getService(param) {
  try {
    return await api.get(
      param +
        `${'&lang=pt&units=metric&appid=38f3304ccb93af433531c0ab09527992'}`
    );
  } catch (e) {
    alert('Não foram encontrados dados para pesquisa');
  }
}
