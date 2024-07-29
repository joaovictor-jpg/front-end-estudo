let listaDeNumero = [1, 2, 3];
let listaAlternativa = [4, 5, 6];
let novaLista = listaDeNumero.concat(listaAlternativa);

console.log(novaLista);

novaLista.pop();

console.log(novaLista);

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        // guarda de um índice aleatório da lista
        const elemento = lista[indice - 1];
        
        lista[indice - 1] = lista[indiceAleatorio];
        
        lista[indiceAleatorio] = elemento;
    }
}

embaralha(novaLista);
console.log(novaLista);

function removeDuplicata(lista) {
    let newSet = new Set(lista);
    return Array.from(newSet);
}

novaLista.push(1);
novaLista.push(5);
novaLista.push(6);
novaLista.push(4);

console.log(novaLista);

novaLista = removeDuplicata(novaLista);

console.log(novaLista);