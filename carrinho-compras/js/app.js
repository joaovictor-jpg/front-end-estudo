let totalGeral;
limpar();


function adicionar() {

    let select = document.getElementById('produto');
    let produto = select.value.split('- R$');
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let nomeProduto = produto[0];
    let valorProduto = parseInt(produto[1]);

    if (quantidade >= 1) {

        let total = quantidade * valorProduto;

        let sectionCarrinhoProduto = document.getElementById('lista-produtos');
        sectionCarrinhoProduto.innerHTML = sectionCarrinhoProduto.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${total}</span>
        </section>`;

        totalGeral = totalGeral + total;

        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;

        document.getElementById('quantidade').value = 0;

    }

}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}