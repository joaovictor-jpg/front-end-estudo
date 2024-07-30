function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
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
}
