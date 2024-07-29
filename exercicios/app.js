function palindromo(str) {
    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    if(newStr == str) {
        console.log('É políndromo');
    } else {
        console.log('Não é políndromo');
    }
}
palindromo('osso');

function crescente(numero1, numero2, numero3) {
    let numeros = [];
    if(numero1 < numero2 && numero1 < numero3) {
        numeros.push(numero1);
        if(numero2 < numero3) {
            numeros.push(numero2);
            numeros.push(numero3);
        } else {
            numeros.push(numero3);
            numeros.push(numero2);
        }
    } else if(numero2 < numero1 && numero2 < numero3) {
        numeros.push(numero2);
        if(numero1 < numero3) {
            numeros.push(numero1);
            numeros.push(numero3);
        } else {
            numeros.push(numero3);
            numeros.push(numero1);
        }
    } else {
        numeros.push(numero3);
        if(numero1 < numero2) {
            numeros.push(numero1);
            numeros.push(numero2);
        } else {
            numeros.push(numero2);
            numeros.push(numero1);
        }
    }

    console.log(numeros);
}

crescente(5, 9,3);

