function ordernarLivrosPorPreco() {
    let livrosOrdenador = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNatela(livrosOrdenador);
}