//Aula
alert('Boas vindas ao jogo dos números secretos');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute;
let tentativa = 1;
// enquanto chute for diferente do número secreto
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    // se o chute for igual ao número secreto
    if(numeroSecreto == chute) {
        break;
    }else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    tentativa++;
}
let palavraTentativa = tentativa > 1 ? 'tentetivas' : 'tentativa';
alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}`);

// Exercícios 1;
/*let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let valorDisponivel = 1000;
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);
nome = prompt('Digite seu nome');
idade = prompt('Digite sua idade');
if(idade => 18) {
    alert('Pode tirar a habilitação!');
}*/

// Exercício 2;
/*let diaDaSemana = prompt('Digite o dia da semana:');
if(diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
    alert('Bom final de semana!');
} else {
    alert('Boa semana!');
}
let numeroPossitivoOuNegativo = prompt('Digite um número:');
if(numeroPossitivoOuNegativo >= 0) {
    alert('Número positivo');
} else {
    alert('Número negativo');
}
alert('Vamos Jogar um jogo ^^');
let nome = prompt('Digite seu nome:')
alert(`Boa sorte! ${nome}`);
let pontos = 0;
alert('Quanto é 20 * 20?');
let resultado = prompt('Digite o resultado:');
if(resultado == 400) {
    pontos = pontos + 50;
} else {
    alert(`Você errou, a resposta correta é: 400. Sua resposta foi: ${resultado}`);
}
alert('Quanto é 8 * 16?');
resultado = prompt('Digite o resultado:');
if(resultado == 128) {
    pontos = pontos + 50;
} else {
    alert(`Você errou, a resposta correta é: 128. Sua resposta foi: ${resultado}`);
}

if(pontos >= 100) {
    alert('Parabéns, você venceu')
}*/

// exercício 3
/*let contador = 1;
while(contador <= 10) {
    console.log(contador);
    contador++;
}
while(contador >= 0) {
    console.log(contador);
    contador--;
}

let numeroContador = prompt('Digite um número');
while(numeroContador >= 0) {
    console.log(numeroContador)
    numeroContador--;
}

numeroContador = prompt('Digite um número');
while(contador <= numeroContador) {
    console.log(contador);
    contador++;
}*/

// Exercício 3
/*console.log('Boas-Vindas');
let nome = 'João Victor';
console.log(`Olá, ${nome}`);
alert(`Olá, ${nome}`);
let linguagemDeProgramacaoFavorita = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`Linguagem de programação favorita do ${nome} é ${linguagemDeProgramacaoFavorita}`);
let valor1 = 10;
let valor2 = 20;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)
let idade = prompt('Digite sua idade');
if(idade >= 18) {
    console.log(`Você é maior de idade, sua idade é: ${idade}`)
} else {
    console.log(`Você é menor de idade, sua idade é: ${idade}`);
}
let numero = prompt('Digite um numero:');
let possitivoOuNegativo = numero >= 0 ? 'possitivo' : 'negativo';
console.log(`O número é: ${possitivoOuNegativo}`)
let contador = 1;
while(contador >= 10) {
    console.log(contador);
    contador++;
}
let nota = 8;
let aprovadoReprovado = nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(`Você está: ${aprovadoReprovado}`);
console.log(Math.random());
console.log(parseInt(Math.random() * 10 + 1));
console.log(parseInt(Math.random() * 100 + 1));*/