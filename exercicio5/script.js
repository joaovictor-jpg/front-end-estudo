let listaNome = ['João', 'Victor', 'Madeira', 'Silva'];

function positivoOuNegativo() {
    let numero = document.getElementById('numero').value;
    let positivoOuNegativoNumero = numero >= 0 ? 'positivo' : 'negativo';
    alert(positivoOuNegativoNumero);
    document.getElementById('numero').value = 0;
}

function maiorDeIdade() {
    let nome = document.getElementById('nome').value;
    if(nome === '') {
        alert('Nome é obrigatorio!');
        return;
    }
    let idade = parseInt(document.getElementById('idade').value);
    let teste = idade > 18 ? 'Maior de idade' : 'Menor de idade';
    document.getElementById('textoIdade').textContent = `${nome} você tem: ${idade}, você é ${teste}`;
}

function bissexto() {
    let ano = document.getElementById('ano').value;

    if(ano.slice(-2) == '00' && ano % 400 == 0) {
        alert('Bissexto');
    } else if(ano.slice(-2) != '00' && ano % 4 == 0) {
        alert('Bissexto');
    } else {
        alert('Não bissexto');
    }
    
}

function calcularMedia() {
    let nota1 = parseInt(document.getElementById('nota1').value);
    let nota2 = parseInt(document.getElementById('nota2').value);
    if(nota1 < 0 || nota2 < 0) {
        alert('Notas invalidas');
        return;
    }
    let media = (nota1 + nota2) / 2;
    alert('Sua média é: ' + media);
}

trabalhandoComArray(listaNome);

function trabalhandoComArray(array) {
    alert(`Tamanho do array é: ${array.length}`);
    if(array.includes('Victor')) {
        alert('Nome já existe na lista');
    } else {
        alert('Tudo certo kkkkk');
    }
}

//crição de um array de objetos
const alunos = [
    { id: 1, nome: 'João', idade: 20 },
    { id: 2, nome: 'Maria', idade: 22 },
    { id: 3, nome: 'Pedro', idade: 21 },
    { id: 4, nome: 'Ana', idade: 19 }
];

function buscarAlunos(array, nome) {
    for (let index = 0; index < array.length; index++) {
        if(array[index].nome == nome) {
            console.log(array[index]);
            break;
        }
    }
}
buscarAlunos(alunos, 'João')

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function somarParEMultiplicaImpar(array) {
    let soma = 0
    let multiplicacao = 1;
    for (let index = 0; index < array.length; index++) {
        if(array[index] % 2 == 0) {
            soma += array[index];
        } else {
            multiplicacao *= array[index];
        }
    }

    alert(`A soma dos números pares foi: ${soma}`);
    alert(`O produto dos número impar foi: ${multiplicacao}`);
}

somarParEMultiplicaImpar(numeros);