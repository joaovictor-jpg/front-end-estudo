const btAdicionarTarefas = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');
const cancelarTarefa = document.querySelector('.app__form-footer__button--cancel');
const paragrafoTarefaEmExecucao = document.querySelector('.app__section-active-task-description');
const btRemoveItemConcluido = document.querySelector('#btn-remover-concluidas');
const btnRemoverTodas = document.querySelector('#btn-remover-todas');

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

let tarefaSelecionada = null;
let liTarefaSelecionada = null;

function atualizarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function criarElementoTarefa(tarefa) {
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
    const button = document.createElement('button');
    button.classList.add('app_button-edit');
    const img = document.createElement('img');
    img.setAttribute('src', 'imagens/edit.png');

    paragrafo.textContent = tarefa.descricao;

    button.onclick = () => {
        // debugger;
        const novaDescricao = prompt('Qual é o novo nome da tarefa');
        if (novaDescricao) {
            paragrafo.textContent = novaDescricao;
            tarefa.descricao = novaDescricao;
            atualizarTarefas();
        }
    }

    button.append(img);
    li.append(svg);
    li.append(paragrafo);
    li.append(button);

    if (tarefa.concluida) {
        li.classList.add('app__section-task-list-item-complete');
        button.setAttribute('disabled', true);
    } else {
        li.onclick = () => {
            document.querySelectorAll('.app__section-task-list-item-active').forEach(elemente => {
                elemente.classList.remove('app__section-task-list-item-active');
            })
            if (tarefaSelecionada == tarefa) {
                paragrafoTarefaEmExecucao.textContent = '';
                tarefaSelecionada = null;
                liTarefaSelecionada = null;
                return;
            }
            tarefaSelecionada = tarefa;
            paragrafoTarefaEmExecucao.textContent = tarefa.descricao;
            liTarefaSelecionada = li;

            li.classList.add('app__section-task-list-item-active');
        }
    }


    return li;
}

function exibirFormELimparCampo() {
    formAdicionarTarefa.classList.toggle('hidden');
    textArea.value = '';
}

btAdicionarTarefas.addEventListener('click', exibirFormELimparCampo)

formAdicionarTarefa.addEventListener('submit', (event) => {
    event.preventDefault();
    const tarefa = {
        descricao: textArea.value
    };
    tarefas.push(tarefa);
    const elemente = criarElementoTarefa(tarefa);
    ulTarefas.append(elemente);
    atualizarTarefas();
    exibirFormELimparCampo();
})

tarefas.forEach(tarefa => {
    const elemento = criarElementoTarefa(tarefa);
    ulTarefas.append(elemento);
});

cancelarTarefa.onclick = () => {
    exibirFormELimparCampo();
}

document.addEventListener('focoFinalizado', () => {
    if (tarefaSelecionada && liTarefaSelecionada) {
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active');
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete');
        liTarefaSelecionada.querySelector('button').setAttribute('disabled', true);
        tarefaSelecionada.concluida = true;
        atualizarTarefas();
    }
});

removeTarefas = (somenteCompleta) => {
    const selector = somenteCompleta ? '.app__section-task-list-item-complete' : '.app__section-task-list-item';
    document.querySelectorAll(selector).forEach(elemento => {
        elemento.remove();
    });
    tarefas = somenteCompleta ? tarefas.filter(tarefa => !tarefa.concluida) : [];
    atualizarTarefas();
    paragrafoTarefaEmExecucao.textContent = '';
}

btRemoveItemConcluido.onclick = () => removeTarefas(true);
btnRemoverTodas.onclick = () => removeTarefas(false);
