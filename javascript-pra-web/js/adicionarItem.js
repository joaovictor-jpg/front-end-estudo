import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compra");


export function adicionarItem(evento) {
    evento.preventDefault();

    if(item.value === "" && item.trim() !== "") {
        alert("Por Favor, insira um item!");
    }

    const itemDaLista = criarItemDaLista(item.value, listaDeCompras);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
    item.value = "";
}