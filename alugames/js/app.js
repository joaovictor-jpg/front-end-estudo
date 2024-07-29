let contador = 0;

function contadora() {
    console.log(`Total de jogos alugados: ${contador}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let confirmacao;

    if (botao.classList == "dashboard__item__button dashboard__item__button--return") {
        confirmacao = confirm('Você realmente deseja devolver o jogo?');
    } else {
        trocaStatus(imagem, botao);
    }

    if (confirmacao != true) {
        contadora();
        return;
    } else {
        trocaStatus(imagem, botao);
        contadora();
    }
}

function trocaStatus(imagem, botao) {
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
        contador--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        contador++;
    }

}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    contador = document.querySelectorAll('.dashboard__item__img--rented').length;
    contadora();
});