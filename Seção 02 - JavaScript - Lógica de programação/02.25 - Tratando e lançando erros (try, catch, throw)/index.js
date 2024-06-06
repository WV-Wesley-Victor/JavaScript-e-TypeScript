// Função que soma dois números
function soma(x, y) {
    // Verifica se x ou y não são do tipo "number"
    if (typeof x !== "number" || typeof y !== "number") {
        // Lança um erro com uma mensagem específica se algum dos argumentos não for número
        throw new Error("x e y precisam ser números.");
    }
    // Retorna a soma de x e y
    return x + y;
}

// Bloco try...catch para tratar possíveis erros ao chamar a função soma
try {
    // Tenta executar estas linhas de código
    console.log(soma(1, 2)); // Deve imprimir 3
    console.log(soma("1", 2)); // Deve lançar um erro porque "1" é uma string
} catch (error) {
    // Se ocorrer um erro no bloco try, este bloco será executado
    console.log(error); // Imprime o erro lançado pela função soma
    console.log("Alguma coisa mais amigável pro usuário."); // Imprime uma mensagem mais amigável
}
