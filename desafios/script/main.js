const listaDeTecla = document.querySelectorAll('input[type=button]');
const campo = document.querySelector('input[type=tel]');

for (let index = 0; index < listaDeTecla.length; index++) {
    const numero = listaDeTecla[index];

    numero.onclick = function () {
        campo.value = campo.value + numero.value;
    }

    numero.onkeydown = function () {
        numero.classList.add('ativa');
    }

    numero.onkeyup = function () {
        numero.classList.remove('ativa');
    }
   
}