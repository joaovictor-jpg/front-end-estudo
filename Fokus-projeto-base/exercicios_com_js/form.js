const btMostrarForm = document.querySelector('.app__button--add-task');
const form = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');
const btCancelar = document.querySelector('.app__form-footer__button--cancel');
const paragrafoTarefa = document.querySelector('.app__section-active-task-description');
const paragrafoDescricaoTarefa = document.querySelector('.app__section-active-task-description');
const limparTarefasConcluidas = document.querySelector('#btn-remover-concluidas');
const btnExcluirTodasAsTarefas = document.querySelector('#btn-remover-todas');

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

let tarefaSelecionada = null;
let liTarefaSelecionada = null;

function atualizandoTarefasNoLocalStorage() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function exibirTarefas(tarefa) {

    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');
    const svg = document.createElement('svg');
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `;
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('app__section-task-list-item-description');
    paragrafo.textContent = tarefa.descricao;
    const button = document.createElement('button');
    button.classList.add('app_button-edit');
    const img = document.createElement('img');
    img.setAttribute('src', 'imagens/edit.png');

    button.onclick = () => {
        const novaDescricao = prompt('Digite a nova tarefa');
        if (novaDescricao) {
            paragrafo.textContent = novaDescricao;
            tarefa.descricao = novaDescricao;
            atualizandoTarefasNoLocalStorage();
        }
    }

    button.append(img);
    li.append(svg);
    li.append(paragrafo);
    li.append(button);

    li.onclick = () => {
        document.querySelectorAll('.app__section-task-list-item-active').forEach(elemente => {
            elemente.classList.remove('app__section-task-list-item-active');
        })
        if (tarefaSelecionada == tarefa) {
            paragrafoDescricaoTarefa.textContent = '';
            tarefaSelecionada = null;
            liTarefaSelecionada = null;
            return;
        }
        tarefaSelecionada = tarefa;
        paragrafoDescricaoTarefa.textContent = tarefaSelecionada.descricao;
        liTarefaSelecionada = li;
        li.classList.add('app__section-task-list-item-active');
    }

    return li;
}

function ocultarOuExibirFormELimparCampo() {
    form.classList.toggle('hidden');
    textArea.value = '';
}

btMostrarForm.addEventListener('click', ocultarOuExibirFormELimparCampo)

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const tarefa = {
        descricao: textArea.value
    };
    tarefas.push(tarefa);
    const elemente = exibirTarefas(tarefa);
    ulTarefas.append(elemente);
    atualizandoTarefasNoLocalStorage();
    ocultarOuExibirFormELimparCampo();
})

tarefas.forEach(tarefa => {
    const elemento = exibirTarefas(tarefa);
    ulTarefas.append(elemento);
});

btCancelar.onclick = () => {
    ocultarOuExibirFormELimparCampo();
}

document.addEventListener('focoFinalizado', () => {
    if (tarefaSelecionada && liTarefaSelecionada) {
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active');
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete');
        liTarefaSelecionada.querySelector('button').setAttribute('disabled', true);
        tarefaSelecionada.concluida = true;
        atualizandoTarefasNoLocalStorage();
    }
});

removeTarefaConcluidaETarefasNaoConcluidas = (concluida) => {
    let atividadeConcluidaOuNao = concluida? '.app__section-task-list-item-complete' : '.app__section-task-list-item';
    document.querySelectorAll(atividadeConcluidaOuNao).forEach(element => {
        element.remove();
    });
    tarefas = concluida ? tarefas.filter(tarefa => !tarefa.concluida) : [];
    atualizandoTarefasNoLocalStorage();
    paragrafoTarefa.textContent = '';
};

limparTarefasConcluidas.onclick = () => removeTarefaConcluidaETarefasNaoConcluidas(true);

btnExcluirTodasAsTarefas.onclick = () => removeTarefaConcluidaETarefasNaoConcluidas(false);