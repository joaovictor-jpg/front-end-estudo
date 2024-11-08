import { Negocicao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegocicaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negocicaoView = new NegociacoesView('#negocicoesView');
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negocicaoView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociao();
        negociacao.data.setDate(21);
        this.negociacoes.adicionarNegociacao(negociacao);
        this.negocicaoView.update(this.negociacoes);
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
