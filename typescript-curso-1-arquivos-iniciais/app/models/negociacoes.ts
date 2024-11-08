import { Negocicao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Array<Negocicao> = [];

    adicionarNegociacao(negociacao: Negocicao): void {
        this.negociacoes.push(negociacao);
    }

    listaNegociacoes(): ReadonlyArray<Negocicao> {
        return this.negociacoes;
    }
}