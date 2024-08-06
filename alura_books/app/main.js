let livros = [];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const livrosContainer = document.querySelector('#livros');

getBuscarLivros();

async function getBuscarLivros() {
    var res = await fetch(endpointDaApi);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNatela(livrosComDesconto);
}