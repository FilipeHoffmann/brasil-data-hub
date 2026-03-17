import { baseApi } from "./base_api.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-cnpj");
  const resultado = document.querySelector(".info-cnpj");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const cnpjInput = form.querySelector("input[name='cnpj']");
    const cnpj = cnpjInput.value.replace(/\D/g, "");

    resultado.innerHTML = "Carregando...";

    try {
      const data = await baseApi(`/cnpj/v1/${cnpj}`);

      resultado.innerHTML = `
        <br>
        <p><strong>CNPJ:</strong> ${data.cnpj}</p>
        <p><strong>Razão Social:</strong> ${data.razao_social}</p>
        <p><strong>Nome Fantasia:</strong> ${data.nome_fantasia}</p>
        <p><strong>Endereço:</strong> ${data.logradouro}</p>
        <p><strong>Bairro:</strong> ${data.bairro}</p>
        <p><strong>Cidade:</strong> ${data.municipio} - ${data.uf}</p>
      `;
    } catch (erro) {
      resultado.innerHTML = "Erro ao consultar CNPJ";
      console.error(erro);
    }
  });
});