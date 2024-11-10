import { NegocicaoController } from "./controllers/negociacao-controller.js";

const controller = new NegocicaoController();


const form = document.querySelector(".form");

// teste de comentarios

if (form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw new Error('Não foi possível inicializar a aplicação. Verifica se o form existe.');
}
