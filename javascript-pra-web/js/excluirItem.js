import { verificarListaDeCompradorVazia } from "./verificarListaDeCompradorVazia.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const excluirItem = (elemento, lista, listaComprados) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?");

    if (confirmacao) {
        elemento.remove();
        verificarListaVazia(lista);
        verificarListaDeCompradorVazia(listaComprados);
    }
};

export { excluirItem };