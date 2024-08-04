const htmlTreino = document.querySelector('html');
const cronometoTreino = document.querySelector('.app__card-timer');
const imagemTreino = document.querySelector('.app__image');
const tituloTreino = document.querySelector('.app__title');
const focusBtTreino = document.querySelector('.app__card-button--foco');
const descansoCurtoBtTreino = document.querySelector('.app__card-button--curto');
const descansoLongoBtTreino = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musicaFoco = new Audio('sons/luna-rise-part-one.mp3');
const musicaPlay = new Audio('sons/play.wav');
const musicaPause = new Audio('sons/pause.mp3');
const alarme = new Audio('sons/beep.mp3');
const botaoStartPause = document.querySelector('#start-pause span');
const imgIniciarOuPausar = document.querySelector('.app__card-primary-butto-icon');
const tempoNaTela = document.querySelector('#timer');

let contador = 30;
let segundos = null;

musicaFoco.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if (musicaFoco.paused) {
        musicaFoco.play();
    } else {
        musicaFoco.pause();
    }
})

focusBtTreino.addEventListener('click', () => {
    contador = 30;
    alterarContexto('foco');
    focusBtTreino.classList.add('active');
})

descansoCurtoBtTreino.addEventListener('click', () => {
    contador = 300;
    alterarContexto('descanso-curto');
    descansoCurtoBtTreino.classList.add('active');
})

descansoLongoBtTreino.addEventListener('click', () => {
    contador = 900;
    alterarContexto('descanso-longo');
    descansoLongoBtTreino.classList.add('active');
})

function alterarContexto(contexto) {
    exibirTempoNatela();
    botoes.forEach((contexto) => {
        contexto.classList.remove('active');
    })
    htmlTreino.setAttribute('data-contexto', contexto);
    imagemTreino.setAttribute('src', `imagens/${contexto}.png`);
    switch (contexto) {
        case 'foco':
            tituloTreino.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case 'descanso-curto':
            tituloTreino.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case 'descanso-longo':
            tituloTreino.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
    }
}

const calculoDoTempo = () => {
    if (contador <= 0) {
        fimContagem();
        alarme.play();
        alarme.volume = 0.3;
        const focoAtivo = htmlTreino.getAttribute('data-contexto') == 'foco';
        if (focoAtivo) {
            const evento = new CustomEvent('focoFinalizado');
            document.dispatchEvent(evento);
        }
        return;
    }
    contador--;
    exibirTempoNatela();
}


botaoStartPause.addEventListener('click', iniciarOuPausarContagem);

function iniciarOuPausarContagem() {
    if (segundos) {
        fimContagem();
        musicaPause.play();
        musicaPause.volume = 0.3;
        return;
    }
    musicaPlay.play();
    musicaPlay.volume = 0.3;
    segundos = setInterval(calculoDoTempo, 1000);
    botaoStartPause.textContent = 'Pausar';
    imgIniciarOuPausar.setAttribute('src', 'imagens/pause.png');
}

function fimContagem() {
    clearInterval(segundos);
    segundos = null;
    botaoStartPause.textContent = 'Começar';
    imgIniciarOuPausar.setAttribute('src', 'imagens/play_arrow.png');
}

function exibirTempoNatela() {
    const tempoDate = new Date(contador * 1000);
    const dateFormat = tempoDate.toLocaleTimeString('pt-br', { minute: '2-digit', second: '2-digit' })
    tempoNaTela.innerHTML = `${dateFormat}`;
}

exibirTempoNatela();