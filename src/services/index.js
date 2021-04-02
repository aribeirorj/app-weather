import { api } from '../infra';

export async function getService(param) {
  try {
    return await api.get(
      param + `${'&appid=38f3304ccb93af433531c0ab09527992'}`
    );
  } catch (error) {
    alert('Erro ao carregar os dados');
  }
}
