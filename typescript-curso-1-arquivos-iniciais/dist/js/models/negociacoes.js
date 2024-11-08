export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // private negociacoes: Negocicao[] = [];
    adicionarNegociacao(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // listaNegociacoes(): ReadonlyArray<Negocicao> {
    //     return this.negociacoes;
    // }
    listaNegociacoes() {
        return this.negociacoes;
    }
}
