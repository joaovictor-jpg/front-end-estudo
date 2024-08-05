const mostrarPessoasNaTela = document.querySelector('#treinamento-js');

const treinandoFatch = fetch('https://swapi.dev/api/people')
    .then(res => res.json())
    .then((pessoas) => pessoas.results)
    .then((results) => {
        results.forEach(element => {
            mostrarPessoasNaTela.innerHTML += `
                <li>Nome: ${element.name}, altura: ${element.height}
            `
        });
    })