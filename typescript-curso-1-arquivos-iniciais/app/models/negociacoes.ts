import { Negocicao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Array<Negocicao> = [];
    // private negociacoes: Negocicao[] = [];

    adicionarNegociacao(negociacao: Negocicao): void {
        this.negociacoes.push(negociacao);
    }

    // listaNegociacoes(): ReadonlyArray<Negocicao> {
    //     return this.negociacoes;
    // }
    
    listaNegociacoes(): readonly Negocicao[] {
        return this.negociacoes;
    }
}