import { baseApi } from "./base_api.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-bancos");
  const resultado = document.querySelector(".info-bancos");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const bancosInput = form.querySelector("input[name='bank']");

    const bancos = bancosInput.value.replace(/\D/g, "");
    resultado.innerHTML = "Carregando...";

    try {
      const data = await baseApi(`/banks/v1/${bancos}`);
      console.log("API:", data);

      resultado.innerHTML = `
        <br>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Código:</strong> ${data.code}</p>
        <p><strong>Nome completo:</strong> ${data.fullName}</p>
      `;
    } catch (erro) {
      resultado.innerHTML = "Erro ao consultar banco";
      console.error("Erro real:", erro);
    }
  });
});