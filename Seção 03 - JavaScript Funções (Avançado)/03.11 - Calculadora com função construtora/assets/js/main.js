// Função construtora para criar uma calculadora
function Calculadora() {
    // Seleciona o elemento com a classe 'display' e o atribui à propriedade 'display' do objeto
    this.display = document.querySelector(".display");

    // Método para iniciar a calculadora
    this.inicia = () => {
        // Captura os cliques nos botões
        this.capturaCliques();
        // Captura o evento de pressionar a tecla Enter
        this.capturaEnter();
    };

    // Método para capturar o evento de pressionar a tecla Enter
    this.capturaEnter = () => {
        document.addEventListener("keyup", (e) => {
            // Se a tecla pressionada for Enter (código 13)
            if (e.keyCode === 13) {
                // Realiza o cálculo
                this.realizaConta();
            }
        });
    };

    // Método para capturar os cliques nos botões
    this.capturaCliques = () => {
        document.addEventListener("click", (event) => {
            const el = event.target;

            // Se o elemento clicado tiver a classe 'btn-num', adiciona o número ao display
            if (el.classList.contains("btn-num")) this.addNumDisplay(el);

            // Se o elemento clicado tiver a classe 'btn-clear', limpa o display
            if (el.classList.contains("btn-clear")) this.clear();

            // Se o elemento clicado tiver a classe 'btn-del', apaga o último caractere do display
            if (el.classList.contains("btn-del")) this.del();

            // Se o elemento clicado tiver a classe 'btn-eq', realiza a conta
            if (el.classList.contains("btn-eq")) this.realizaConta();
        });
    };

    // Método para realizar a conta
    this.realizaConta = () => {
        try {
            // Avalia a expressão matemática no display usando 'eval'
            const conta = eval(this.display.value);

            // Verifica se a conta é válida
            if (!conta && conta !== 0) {
                alert("Conta inválida");
                // Limpa o display se a conta for inválida
                this.clear();
                return;
            }

            // Define o resultado no display
            this.display.value = String(conta);
        } catch (e) {
            // Se ocorrer um erro na avaliação, avisa o usuário e limpa o display
            alert("Conta inválida");
            this.clear();
            return;
        }
    };

    // Método para adicionar números ao display
    this.addNumDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    // Método para limpar o display
    this.clear = () => (this.display.value = "");

    // Método para apagar o último caractere do display
    this.del = () => (this.display.value = this.display.value.slice(0, -1));
}

// Cria uma nova instância da calculadora
const calculadora = new Calculadora();
// Inicia a calculadora
calculadora.inicia();
