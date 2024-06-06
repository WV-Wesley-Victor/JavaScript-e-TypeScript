// Define um array de números de 1 a 9
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue continua para a próxima iteração
// Break sai do laço

// Loop que percorre todos os elementos do array
for (let i = 0; i < numeros.length; i++) {
    // A variável 'numero' armazena o elemento atual do array
    let numero = numeros[i];

    // Se o número atual for igual a 2
    if (numero === 2) {
        // Imprime uma mensagem indicando que o número 2 foi pulado
        console.log("Pulei o numero 2");
        // Usa continue para pular o restante do código no loop e ir para a próxima iteração
        continue;
    }

    // Se o número atual for igual a 7
    if (numero === 7) {
        // Imprime uma mensagem indicando que o número 7 foi encontrado e o loop vai sair
        console.log("7 encontrado, saindo...");
        // Usa break para sair do loop completamente
        break;
    }

    // Se nenhuma das condições acima for verdadeira, imprime o número atual
    console.log(numero);
}
