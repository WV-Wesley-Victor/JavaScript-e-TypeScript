// IIFE -> Immediately Invoked Function Expression (Expressão de Função Invocada Imediatamente)
// Ela é usada para criar um escopo de variável isolado para evitar poluição do escopo global e para controlar o acesso a variáveis.
// Esta é uma função anônima que é definida e executada imediatamente.
(function (idade, peso, altura) {
    // Declaração de variável local
    const sobrenome = "Victor";

    // Função interna que concatena um nome com o sobrenome
    function criaNome(nome) {
        return nome + " " + sobrenome;
    }

    // Função interna que imprime um nome completo
    function falaNome() {
        console.log(criaNome("Wesley"));
    }

    // Chamada da função interna que imprime um nome completo
    falaNome();

    // Imprime as variáveis de contexto passadas como argumentos
    console.log(idade, peso, altura);
})(18, 60, 1.7); // Passa os valores 18, 60 e 1.70 como argumentos para a IIFE

// Declaração de uma variável global fora da IIFE
const sobrenome = "Qualquer coisa";
