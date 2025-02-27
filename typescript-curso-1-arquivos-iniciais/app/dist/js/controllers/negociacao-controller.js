var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { logarTempoDeExecução } from "../decorators/logar-tempo-de-execucao.js";
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
        this.negocicaoView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negocicao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negocições em dias úteis são aceitos');
            return;
        }
        this.negociacoes.adicionarNegociacao(negociacao);
        this.limparFormulario();
        this.atualizaView();
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
__decorate([
    domInjector('#data')
], NegocicaoController.prototype, "inputData", void 0);
__decorate([
    domInjector('#quantidade')
], NegocicaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector('#valor')
], NegocicaoController.prototype, "inputValor", void 0);
__decorate([
    logarTempoDeExecução()
], NegocicaoController.prototype, "adiciona", null);
