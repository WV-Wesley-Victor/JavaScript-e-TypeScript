//O for é uma estrutura de repetição no JavaScript usada para executar um bloco de código repetidamente enquanto
//uma condição específica for verdadeira. Ela consiste em três partes: inicialização, condição e expressão
//final. A inicialização ocorre uma vez no início, a condição é verificada antes de cada repetição, e a
//expressão final é usada para atualizar a condição a cada repetição. O for é útil quando você sabe quantas
//vezes deseja repetir um código, como percorrer uma lista de elementos em um array.

const frutas = ["Pêra", "Maçã", "Uva"];
//Loop for tradicional que itera sobre o array 'frutas' com base no seu comprimento.
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); //Imprime o elemento atual do array 'frutas' no índice 'i'.
}
//Loop for...in que itera sobre as propriedades enumeráveis do array 'frutas'.
for (let i in frutas) {
    console.log(frutas[i]); //Imprime o elemento atual do array 'frutas' no índice 'i'.
}

const pessoa = {
    nome: "Wesley",
    sobrenome: "Victor",
    idade: 18,
};
//Loop for...in que itera sobre as propriedades enumeráveis do objeto 'pessoa'.
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]); //Imprime a chave e o valor associado a essa chave no objeto 'pessoa'.
}
