/*document.querySelector('h1').innerHTML = 'Hora do Desafio';

function cliqueNoConsole() {
    console.log('O botão foi clicado');
}

function cliqueNoAlert() {
    alert('Eu amo JS');
}

function cliqueNoPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil?');
    document.querySelector('p').innerHTML = `Estive em ${cidade} e lembrei de você`;
}

function soma() {
    let numero1 = parseInt(prompt('Digite o primeiro número'));
    let numero2 = parseInt(prompt('Digite o segundo número'));
    let soma = numero1 + numero2;
    alert(`A soma ente ${numero1} e ${numero2} é: ${soma}`);
}*/

// Exercício 2:
/*function helloWorld() {
    alert('Olá Mundo');
}
helloWorld();

function cliqueNoAlert(nome) {
    alert(`Olá, ${nome}`);
}

function dobrarNumero(numero) {
    alert(`O dobro de ${numero} é: ${numero * 2}`);
}

function media(numero1, numero2, numero3) {
    alert(`A média entre: ${numero1}, ${numero2}, ${numero3} é: ${(numero1 + numero2 + numero3) / 3}`)
}

function maiorNumero(numero1, numero2) {
    if(numero1 > numero2) {
        alert(numero1)
    } else {
        alert(numero2);
    }
}

function multiplo(numero) {
    alert(numero * numero);
}*/

// Execício 3:
/*function imc(pesso, altura) {
    alert(pesso / (altura * altura));
}

function fatorial(numero) {
    let resultado = numero;
    if(numero == 0) {
        resultado = 1;
    }else if(numero == 1) {
        resultado = 1;
    } else {
        while(numero > 1) {
            numero--;
            resultado = resultado * numero;
        }
    }
    alert(resultado);
}

function exibirResultadoNoAlert(text) {
    alert(text);
}

function calculoDaAreaEoPerimetro(base, altura) {
    let resultadoDaArea = calculoDaArea(base, altura);
    let resultadoDoPerimetro = calculoDoPerimetro(base, altura);
    exibirResultadoNoAlert(`O resultado da area do retangulo é: ${resultadoDaArea}, o Perímetro é: ${resultadoDoPerimetro}`);
}

function calculoDaArea(base, altura) {
    return base * altura;
}

function calculoDoPerimetro(base, altura) {
    return 2 * (base + altura);
}

function calculoDaAreaEoPerimetroDoCirculo(raio) {
    let resultadoDaArea = calculoDaAreaDoCirculo(raio);
    let resultadoDoPerimetro = calculoDoPerimetroDoCirculo(raio);
    exibirResultadoNoAlert(`O resultado da area do circulo é: ${resultadoDaArea}, o Perímetro é: ${resultadoDoPerimetro}`)
}

function calculoDaAreaDoCirculo(raio) {
    return 3.14 * Math.pow(raio, 2);
}

function calculoDoPerimetroDoCirculo(raio) {
    return Math.pow(3.14, 2) * raio;
}

function tabuda(numero) {
    contador = 10;
    while(contador >= 0) {
        console.log(`${numero} * ${contador} = ` + numero * contador);
        contador--;
    }
}*/

// Exercício 4:
let listaGenerica = [];
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');

let nomes = ['João', 'Victor', 'Madeira'];
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);