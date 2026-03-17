import { baseApi } from "./base_api.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-ddd");
  const resultado = document.querySelector(".info-ddd");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const dddInput = form.querySelector("input[name='ddd']");
    const ddd = dddInput.value.replace(/\D/g, "");

    resultado.innerHTML = "Carregando...";

    try {
      const data = await baseApi(`/ddd/v1/${ddd}`);

      resultado.innerHTML = `
        <br>
        <p><strong>Estado:</strong> ${data.state}</p>
        <p><strong>Cidades:</strong> ${data.cities}</p>
      `;
    } catch (erro) {
      resultado.innerHTML = "Erro ao consultar o DDD";
      console.error(erro);
    }
  });
});