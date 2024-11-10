import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negocicao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegocicaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negocicaoView = new NegociacoesView('#negocicoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negocicaoView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociao();
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negocições em dias úteis são aceitos');
            return;
        }
        this.negociacoes.adicionarNegociacao(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
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
    atualizaView() {
        this.negocicaoView.update(this.negociacoes);
        this.mensagemView.update('Negocição adicionado com sucesso');
    }
}
