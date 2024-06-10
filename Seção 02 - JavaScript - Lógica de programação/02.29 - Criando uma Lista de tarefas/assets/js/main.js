function listaDeTarefas() {
    // Seleciona o campo de entrada de tarefas
    const inputTarefa = document.querySelector(".input-tarefa");
    // Seleciona o botão de adicionar tarefas
    const btnTarefa = document.querySelector(".btn-tarefa");
    // Seleciona o container onde as tarefas serão exibidas
    const tarefas = document.querySelector(".tarefas");

    // Função para criar um novo elemento 'li'
    function criaLi() {
        const li = document.createElement("li");
        return li;
    }

    // Adiciona um evento ao campo de entrada para adicionar a tarefa ao pressionar 'Enter'
    inputTarefa.addEventListener("keypress", function (e) {
        if (e.keyCode === 13) {
            // Verifica se a tecla pressionada é 'Enter'
            if (!inputTarefa.value) return; // Se o campo estiver vazio, não faz nada
            criaTarefa(inputTarefa.value); // Cria a tarefa com o valor do campo de entrada
        }
    });

    // Função para limpar o campo de entrada e focá-lo novamente
    function limpaInput() {
        inputTarefa.value = "";
        inputTarefa.focus();
    }

    // Função para criar um botão de apagar para cada tarefa
    function criaBotaoApagar(li) {
        li.innerText += " "; // Adiciona um espaço após o texto da tarefa
        const botaoApagar = document.createElement("button");
        botaoApagar.innerText = "Apagar"; // Texto do botão
        botaoApagar.setAttribute("class", "apagar"); // Define a classe do botão
        botaoApagar.setAttribute("title", "Apagar esta tarefa"); // Define o título do botão
        li.appendChild(botaoApagar); // Adiciona o botão ao elemento 'li'
    }

    // Função para criar a tarefa e adicioná-la à lista
    function criaTarefa(textoInput) {
        const li = criaLi(); // Cria um novo 'li'
        li.innerText = textoInput; // Define o texto do 'li' como o texto da tarefa
        tarefas.appendChild(li); // Adiciona o 'li' à lista de tarefas
        limpaInput(); // Limpa o campo de entrada
        criaBotaoApagar(li); // Adiciona o botão de apagar ao 'li'
        salvarTarefas(); // Salva a lista de tarefas no localStorage
    }

    // Adiciona um evento ao botão de adicionar tarefa
    btnTarefa.addEventListener("click", function () {
        if (!inputTarefa.value) return; // Se o campo estiver vazio, não faz nada
        criaTarefa(inputTarefa.value); // Cria a tarefa com o valor do campo de entrada
    });

    // Adiciona um evento para apagar a tarefa quando o botão de apagar for clicado
    document.addEventListener("click", function (e) {
        const el = e.target; // Elemento clicado
        if (el.classList.contains("apagar")) {
            // Verifica se o elemento tem a classe 'apagar'
            el.parentElement.remove(); // Remove o elemento pai (a tarefa) do DOM
            salvarTarefas(); // Salva a lista de tarefas atualizada no localStorage
        }
    });

    // Função para salvar a lista de tarefas no localStorage
    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll("li"); // Seleciona todos os elementos 'li'
        const listaDeTarefas = []; // Array para armazenar as tarefas
        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText; // Pega o texto da tarefa
            tarefaTexto = tarefaTexto.replace("Apagar", "").trim(); // Remove o texto 'Apagar' e espaços extras
            listaDeTarefas.push(tarefaTexto); // Adiciona a tarefa ao array
        }
        const tarefasJSON = JSON.stringify(listaDeTarefas); // Converte o array para JSON
        localStorage.setItem("tarefas", tarefasJSON); // Salva o JSON no localStorage
    }

    // Função para adicionar as tarefas salvas no localStorage ao carregar a página
    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem("tarefas"); // Pega as tarefas do localStorage
        const listaDeTarefas = JSON.parse(tarefas); // Converte o JSON para array
        for (let tarefa of listaDeTarefas) {
            criaTarefa(tarefa); // Cria cada tarefa da lista
        }
    }

    // Chama a função para adicionar as tarefas salvas ao carregar a página
    adicionaTarefasSalvas();
}

// Chama a função principal para inicializar a lista de tarefas
listaDeTarefas();
