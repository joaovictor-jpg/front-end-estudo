const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-button");
const listaDeCompras = document.getElementById("lista-compra");
let contador = 0;

botaoSalvarItem.addEventListener("click", adicionarItem);


function adicionarItem(evento) {
    evento.preventDefault();

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

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
        } else {
            checkboxCustomizado.classList.remove("checked");
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