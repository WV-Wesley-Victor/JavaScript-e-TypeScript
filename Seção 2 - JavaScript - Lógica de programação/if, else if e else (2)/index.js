//'if' é usado para testar uma condição e executar um bloco de código se essa condição for verdadeira.
//'else if' é usado para testar uma nova condição se a condição do 'if' for falsa, e executar um bloco de código associado se essa nova condição for verdadeira.
//'else' é usado para especificar o que acontece quando todas as condições anteriores são falsas.

const numero = 10; //Define a variável 'numero' com o valor 10.

if (numero <= 10) {
    console.log("O número é menor ou igual a 10."); //Verifica se 'numero' é menor ou igual a 10.
}

if (numero >= 0 && numero <= 5) {
    console.log("O número está entre 0 e 5."); //Verifica se 'numero' está entre 0 e 5.
} else if (numero >= 6 && numero <= 8) {
    console.log("O número está entre 6 e 8."); //Se 'numero' estiver entre 6 e 8, imprime esta mensagem.
} else if (numero >= 9 && numero <= 11) {
    console.log("O número está entre 9 e 11."); //Se 'numero' estiver entre 9 e 11, imprime esta mensagem.
} else {
    console.log("O número não está entre 0 e 11."); //Se nenhuma das condições for true, imprime esta mensagem.
}

console.log("...Aqui vai o resto do código."); //Continuação do código após as verificações condicionais.
