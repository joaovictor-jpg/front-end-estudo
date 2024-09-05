export function verificarListaDeCompradorVazia(lista) {
    const filhos = lista.children;
    if(filhos.length < 3) {
        for (let index = 0; index < filhos.length; index++) {
            filhos[index].style.display = "none";
        }
    } else {
        for (let index = 0; index < filhos.length; index++) {
            filhos[index].style.display = "block";
        }
    }
}