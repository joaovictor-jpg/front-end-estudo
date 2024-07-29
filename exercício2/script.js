function recuperarDados() {

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let msg = document.getElementById('msg').value;
    let valorDaHora = parseInt(document.getElementById('valorDaHora').value);
    let horaExtra = parseInt(document.getElementById('horaExtra').value);
    let data = document.getElementById('data').value.split('-');
    let ano = data[0];
    let mes = data[1];
    let dia = data[2];

    console.log(data);

    let total = calculoDaHoraExtra(valorDaHora, horaExtra);

    mostraNaTela(nome, email, msg, valorDaHora, horaExtra, total);
}

function calculoDaHoraExtra(valorDaHora, horaExtra) {
    return valorDaHora * horaExtra;
}

function mostraNaTela(nome, email, msg, valorDaHora, horaExtra, total) {
    let texto = document.getElementById('informacoes');
    let calculo = document.getElementById('calculo');
    texto.textContent = `Seu Nome é: ${nome}, E-Mail: ${email}, Sua mensagem é: ${msg}`;
    calculo.textContent = `Sua hora extra: ${horaExtra}, quanto custa sua hora de trabalho: ${valorDaHora}, total: R$${total}`;
}