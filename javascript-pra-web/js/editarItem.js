export const editarItem = (item) => {
    let novoItem = prompt("Digite o nome do novo item:");

    if(novoItem !== null && novoItem.trim() !== "") {
        item.textContent = novoItem;
    }
}