import { NegocicaoController } from "./controllers/negociacao-controller.js";

const controller = new NegocicaoController();


const form = document.querySelector(".form");

form.addEventListener("submit", event => {
    event.preventDefault();
    controller.adiciona();
});