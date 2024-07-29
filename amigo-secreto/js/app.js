let listaDeAmigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;

    if(amigo === '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if(listaDeAmigos.includes(amigo)) {
        alert('Nome já adicionado!');
        return;
    }
    let listaAmigo = document.getElementById('lista-amigos');

    listaDeAmigos.push(amigo);

    if (listaAmigo.textContent == '') {
        listaAmigo.textContent = amigo
    } else {
        listaAmigo.textContent = listaAmigo.textContent + ', ' + amigo;
    }

    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if(listaDeAmigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
    embaralhar(listaDeAmigos);

    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < listaDeAmigos.length; i++) {
        if (i == listaDeAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaDeAmigos[i] + ' -> ' + listaDeAmigos[0] + '<br />';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaDeAmigos[i] + ' -> ' + listaDeAmigos[i + 1] + '<br />';
        }
    }
}

function reiniciar() {
    listaDeAmigos = [];
    document.getElementById('nome-amigo').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]]
    }
}