import { dataEHora } from "./criarDataEHora.js";
import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { verificarListaDeCompradorVazia } from "./verificarListaDeCompradorVazia.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaComprados = document.getElementById("lista-compra");
let contador = 0;

verificarListaDeCompradorVazia(listaComprados);

export function criarItemDaLista(item, listaDeCompras) {
    const itemDaLista = document.createElement("li");
    const containerItem = document.createElement("div");
    containerItem.classList.add("item-lista-container");

    const itemCaixa = document.createElement("div");
    itemCaixa.classList.add("container-nome-compra");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");

    /* Criando checkbox customizado */
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input")
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
            verificarListaDeCompradorVazia(listaComprados);
            verificarListaVazia(listaDeCompras);
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
            verificarListaDeCompradorVazia(listaComprados);
            verificarListaVazia(listaDeCompras);
        }
    })

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);

    itemCaixa.appendChild(containerCheckbox);
    /* Fim criando checkBox customizado */

    const itemTexto = document.createElement("p");
    itemTexto.id = "item-titulo";
    itemTexto.innerText = item;

    const containerButtons = document.createElement("div");

    const buttonLixeira = document.createElement("button");
    buttonLixeira.classList.add("botao-acao");
    const imgLixeira = document.createElement("img");
    imgLixeira.src = "img/delete.svg";
    imgLixeira.alt = "Deletar";

    imgLixeira.addEventListener("click", () => {
        excluirItem(itemDaLista, listaDeCompras, listaComprados);
    })

    const buttonEditar = document.createElement("button");
    buttonEditar.classList.add("botao-acao");
    const imgEditar = document.createElement("img");
    imgEditar.src = "img/edit.svg";
    imgEditar.alt = "Editar";

    imgEditar.addEventListener("click", () => {
        editarItem(itemTexto);
    })

    buttonEditar.appendChild(imgEditar);
    buttonLixeira.appendChild(imgLixeira);

    containerButtons.appendChild(buttonLixeira);
    containerButtons.appendChild(buttonEditar);

    itemCaixa.appendChild(itemTexto);
    containerItem.appendChild(itemCaixa);

    const itemData = document.createElement("p");
    itemData.innerText = dataEHora();
    itemData.classList.add("item-lista-texto");

    containerItem.appendChild(containerButtons);

    itemDaLista.appendChild(containerItem);
    itemDaLista.appendChild(itemData);

    return itemDaLista;
};