function tocaSom(seletetoAudio) {
    const elemento = document.querySelector(seletetoAudio);
    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Erro: Elemento não encontrado ou elemento não encontrado');
    }
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listDETeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listDETeclas.length; i++) {

    const tecla = listDETeclas[i];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
