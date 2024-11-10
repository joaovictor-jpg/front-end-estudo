import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negocicao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegocicaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negocicaoView = new NegociacoesView('#negocicoesView', true);
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negocicaoView.update(this.negociacoes);
    }

    adiciona(): void {
        const negociacao = Negocicao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negocições em dias úteis são aceitos');
            return;
        }
        this.negociacoes.adicionarNegociacao(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }

    private ehDiaUtil(data: Date): boolean {        
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negocicaoView.update(this.negociacoes);
        this.mensagemView.update('Negocição adicionado com sucesso');
    }
}