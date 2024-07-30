const listaDeTecla = document.querySelectorAll('input[type=button]');
const campo = document.querySelector('input[type=tel]');

console.log(campo);

for (let index = 0; index < listaDeTecla.length; index++) {
    const numero = listaDeTecla[index];

    numero.onclick = function () {
        campo.value = campo.value + numero.value;
    }
   
}