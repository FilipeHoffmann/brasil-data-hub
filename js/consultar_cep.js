import { baseApi } from "./base_api.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-cep");
  const resultado = document.querySelector(".info-cep");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const cepInput = form.querySelector("input[name='cep']");
    const cep = cepInput.value.replace(/\D/g, "");

    resultado.innerHTML = "Carregando...";

    try {
      const data = await baseApi(`/cep/v1/${cep}`);

      resultado.innerHTML = `
        <br>
        <p><strong>Rua:</strong> ${data.street}</p>
        <p><strong>Bairro:</strong> ${data.neighborhood}</p>
        <p><strong>Cidade:</strong> ${data.city} - ${data.state}</p>
      `;
    } catch (erro) {
      resultado.innerHTML = "Erro ao consultar CEP";
      console.error(erro);
    }
  });
});