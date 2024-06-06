// Escreva uma função que recebe 2 números e retorne o maior deles
// Define duas constantes com os valores 7 e 5
const primeiroNumero = 7;
const segundoNumero = 5;

// Declaração da função MaiorNumero que recebe dois parâmetros: primeiroNumero e segundoNumero
function MaiorNumero(primeiroNumero, segundoNumero) {
    // Verifica se o primeiro número é maior que o segundo
    if (primeiroNumero > segundoNumero) {
        // Se a condição for verdadeira, imprime o primeiro número no console
        return console.log(primeiroNumero);
    } else {
        // Se a condição for falsa, imprime o segundo número no console
        return console.log(segundoNumero);
    }
}

// Chama a função MaiorNumero passando os valores das constantes primeiroNumero e segundoNumero
MaiorNumero(primeiroNumero, segundoNumero);
