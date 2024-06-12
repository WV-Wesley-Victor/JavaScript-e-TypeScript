// Função fábrica para criar uma calculadora
function criaCalculadora() {
    return {
        // Seleciona o elemento com a classe 'display' e o atribui à propriedade 'display' do objeto
        display: document.querySelector(".display"),

        // Método para iniciar a calculadora
        inicia() {
            // Inicializa os eventos de clique nos botões
            this.cliqueBotoes();
            // Inicializa o evento de pressionar a tecla Enter
            this.pressionaEnter();
        },

        // Método para detectar quando a tecla Enter é pressionada
        pressionaEnter() {
            this.display.addEventListener("keyup", (e) => {
                // Se a tecla pressionada for Enter (código 13)
                if (e.keyCode === 13) {
                    // Realiza o cálculo
                    this.realizaConta();
                }
            });
        },

        // Método para realizar a conta
        realizaConta() {
            // Obtém o valor atual do display
            let conta = this.display.value;

            // Tenta executar a conta
            try {
                // Avalia a expressão (perigoso, pois 'eval' pode executar código arbitrário)
                conta = eval(conta);

                // Verifica se a conta é válida
                if (!conta && conta !== 0) {
                    alert("Conta inválida");
                    // Limpa o display se a conta for inválida
                    this.clearDisplay();
                    return;
                }

                // Define o resultado no display
                this.display.value = String(conta);
            } catch (e) {
                // Se ocorrer um erro na avaliação, avisa o usuário e limpa o display
                alert("Conta inválida");
                this.clearDisplay();
                return;
            }
        },

        // Método para limpar o display
        clearDisplay() {
            this.display.value = "";
        },

        // Método para apagar o último caractere do display
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        // Método para gerenciar cliques nos botões
        cliqueBotoes() {
            // 'this' refere-se à calculadora
            document.addEventListener("click", (e) => {
                const el = e.target;

                // Se o elemento clicado tiver a classe 'btn-num', adiciona o número ao display
                if (el.classList.contains("btn-num")) {
                    this.btnParaDisplay(el.innerText);
                }

                // Se o elemento clicado tiver a classe 'btn-clear', limpa o display
                if (el.classList.contains("btn-clear")) {
                    this.clearDisplay();
                }

                // Se o elemento clicado tiver a classe 'btn-del', apaga o último caractere do display
                if (el.classList.contains("btn-del")) {
                    this.apagaUm();
                }

                // Se o elemento clicado tiver a classe 'btn-eq', realiza a conta
                if (el.classList.contains("btn-eq")) {
                    this.realizaConta();
                }
            });
        },

        // Método para adicionar valores ao display
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

// Cria uma nova instância da calculadora
const calculadora = criaCalculadora();
// Inicia a calculadora
calculadora.inicia();
