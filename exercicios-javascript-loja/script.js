const buttonSalvar = document.getElementById("salvar");
const inputText = document.getElementById("textTarefa");
const main = document.getElementById("main");

buttonSalvar.addEventListener("click", adicionarNaLista);

function adicionarNaLista() {
    const lista = document.createElement("ul");
    const itemLista = document.createElement("li");
    itemLista.innerHTML = inputText.value;
    lista.appendChild(itemLista);
    main.appendChild(lista);
}

