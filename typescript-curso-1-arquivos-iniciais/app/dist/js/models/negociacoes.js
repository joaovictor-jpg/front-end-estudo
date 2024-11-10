export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionarNegociacao(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listaNegociacoes() {
        return this.negociacoes;
    }
}
