import { Negocicao } from "./models/negociacao.js";

const negociacao = new Negocicao(new Date(), 10, 100);
console.log(negociacao);
// negociacao.quantidade = 1000;
console.log(negociacao);

console.log(negociacao.data);
