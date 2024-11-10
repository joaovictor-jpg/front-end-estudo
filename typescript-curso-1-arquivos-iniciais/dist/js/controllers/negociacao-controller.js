import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negocicao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegocicaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negocicaoView = new NegociacoesView('#negocicoesView', true);
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negocicaoView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negocicao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
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
