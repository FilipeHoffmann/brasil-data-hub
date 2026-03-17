const BASE_URL = "https://brasilapi.com.br/api";

export async function baseApi(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Erro na requisição");
  }

  return await response.json();
}