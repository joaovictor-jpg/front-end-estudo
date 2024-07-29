function comprar() {
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    if (quantidade < 1) {
        alert('Informe a quantidade de ingrasso');
        return;
    } else {
        let pista = parseInt(document.getElementById('qtd-pista').innerHTML);
        let superior = parseInt(document.getElementById('qtd-superior').innerHTML);
        let inferior = parseInt(document.getElementById('qtd-inferior').innerHTML);
        switch (ingresso) {
            case 'pista':
                pista >= quantidade ? document.getElementById('qtd-pista').innerHTML = `${pista - quantidade}` : alert('Ingresso insuficiente');
                break;
            case 'superior':
                superior >= quantidade ? document.getElementById('qtd-superior').innerHTML = `${superior - quantidade}` : alert('Ingresso insuficiente');
                break;
            case 'inferior':
                inferior >= quantidade ? document.getElementById('qtd-inferior').innerHTML = `${inferior - quantidade}` : alert('Ingresso insuficiente');
                break;
            default:
                alert('Erro: Opção inexistente');
                break;
        }
    }
}