function converteParaInt() {
    let nome = parseInt(document.getElementById('nome').value);
    alert(nome);
}

function calcular() {
    let campoText = document.getElementById('calculo').value.split(' ');
    let valor1 = parseInt(campoText[0]);
    let funcao = campoText[1];
    let valor2 = parseInt(campoText[2]);

    switch (funcao) {
        case '+':
            alert(valor1 + valor2);
            break;
        case '-':
            alert(valor1 - valor2);
            break;
        case '*':
            alert(valor1 * valor2);
            break;
        case '/':
            if(valor1 == 0 || valor2 == 0) {
                alert('Não existe divisão por 0')
            } else {
                alert(valor1 / valor2);
            }
            break;
    }
}

function imparOuPart() {
    let numero = parseInt(document.getElementById('numero').value);
    if(numero % 2 == 0) {
        alert('Número par');
    } else {
        alert('Número impar');
    }
}

function conversorDeCelsiusParaFahrenheit() {
    let celsius = parseFloat(document.getElementById('celsius').value);
    alert(celsius * 9 / 5 + 32);
}

function conversorDeFahrenheitParaCelsius() {
    let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    alert((fahrenheit - 32) * 5 / 9);
}