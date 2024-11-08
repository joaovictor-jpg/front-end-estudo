import { Negocicao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegocicaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criaNegociao();
        negociacao.data.setDate(21);
        this.negociacoes.adicionarNegociacao(negociacao);
        console.log(this.negociacoes.listaNegociacoes());
        this.limparFormulario();
    }
    criaNegociao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negocicao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
