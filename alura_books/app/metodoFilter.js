const btnFilters = document.querySelectorAll('.btn');

btnFilters.forEach((btnFilter) => {
    btnFilter.addEventListener('click', filterLivros);
});

function filterLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    if (categoria != '') {
        let livrosFiltrados = categoria == 'disponiveis' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
        exibirOsLivrosNatela(livrosFiltrados);
        if (categoria == 'disponiveis') {
            const valorTotal = calculandoValorTotalDsLivrosDisponiveis(livrosFiltrados);
            exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
        }
    } else if (elementoBtn.classList.contains('btn-ordenacao')) {
        ordernarLivrosPorPreco();
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">R$${valorTotal}</span></p>
        </div>
    `
}