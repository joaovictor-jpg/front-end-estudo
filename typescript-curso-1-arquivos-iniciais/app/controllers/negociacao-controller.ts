import { Negocicao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegocicaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adiciona(): void {
        const negociacao = this.criaNegociao();
        this.negociacoes.adicionarNegociacao(negociacao);
        console.log(this.negociacoes.listaNegociacoes());
        this.limparFormulario();
    }

    criaNegociao(): Negocicao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negocicao(
            date,
            quantidade,
            valor
        );
    }

    limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}