import { baseApi } from "./base_api.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-feriados");
  const resultado = document.querySelector(".info-feriados");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const feriadosInput = form.querySelector("input[name='year']");
    const ano = feriadosInput.value.replace(/\D/g, "");

    resultado.innerHTML = "Carregando...";

    try {
      const data = await baseApi(`/feriados/v1/${ano}`);

      resultado.innerHTML = `
        <br>
        <h3>Feriados:</h3>
        <ul>
          ${data.map(f => `
            <li>
              ${f.date} - ${f.name} (${f.type})
            </li>
          `).join("")}
        </ul>
      `;
    } catch (erro) {
      resultado.innerHTML = "Erro ao consultar feriados";
      console.error(erro);
    }
  });
});