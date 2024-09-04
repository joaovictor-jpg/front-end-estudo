const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-button");
const listaDeCompras = document.getElementById("lista-compra");

botaoSalvarItem.addEventListener("click", adicionarItem);


function adicionarItem(evento) {
    evento.preventDefault();
    console.log("entrei na função");

    const itemDaLista = document.createElement("li");
    const containerItem = document.createElement("div");
    containerItem.classList.add("item-lista-container");

    const itemCaixa = document.createElement("div");
    itemCaixa.classList.add("container-nome-compra");
    const itemTexto = document.createElement("p");
    itemTexto.innerText = item.value;

    const containerButtons = document.createElement("div");

    const buttonLixeira = document.createElement("button");
    buttonLixeira.classList.add("botao-acao");
    const imgLixeira = document.createElement("img");
    imgLixeira.src = "img/delete.svg";
    imgLixeira.alt = "Deletar";

    const buttonEditar = document.createElement("button");
    buttonEditar.classList.add("botao-acao");
    const imgEditar = document.createElement("img");
    imgEditar.src = "img/edit.svg";
    imgEditar.alt = "Editar";


    buttonEditar.appendChild(imgEditar);
    buttonLixeira.appendChild(imgLixeira);

    containerButtons.appendChild(buttonLixeira);
    containerButtons.appendChild(buttonEditar);

    itemCaixa.appendChild(itemTexto);
    containerItem.appendChild(itemCaixa);
    
    containerItem.appendChild(containerButtons);
    itemDaLista.appendChild(containerItem);
    listaDeCompras.appendChild(itemDaLista);

}