//Um loop "for" em JavaScript é uma estrutura que permite que você execute um bloco de código repetidamente
//enquanto uma condição específica for verdadeira. Ele consiste em três partes principais: inicialização,
//condição e atualização da variável de controle. O loop executa o código dentro do bloco até que a condição se
//torne falsa. Isso é útil para automatizar tarefas repetitivas.

//Loop for que itera de 0 a 5.
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`); //Imprime o valor do índice 'i' em cada iteração.
}

//Loop for que itera de 0 a 10.
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? "par" : "ímpar"; //Verifica se 'i' é par ou ímpar.
    console.log(i, par); //Imprime o valor de 'i' e se ele é par ou ímpar.
}

const frutas = ["Maçã", "Pêra", "Uva"];
//Loop for que itera sobre o array 'frutas'.
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i} = `, frutas[i]); //Imprime o índice 'i' e o valor correspondente no array 'frutas'.
}

//Loop for que itera de 400 a 410 em incrementos de 10.
for (let i = 400; i <= 410; i += 10) {
    console.log(`Linha ${i}`); //Imprime o valor do índice 'i' em incrementos de 10.
}

//Loop for que itera de 500 a 490 em decrementos de 10.
for (let i = 500; i >= 490; i -= 10) {
    console.log(`Linha ${i}`); //Imprime o valor do índice 'i' em decrementos de 10.
}
