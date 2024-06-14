// Declaração do array de números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Função para retornar números maiores que 10 sem usar filter
function maiorQueDez() {
    let numerosMaiorQueDez = [];
    // Itera sobre cada número no array
    for (let numero of numeros) {
        // Verifica se o número é maior que 10
        if (numero > 10) {
            // Adiciona o número ao array de resultados
            numerosMaiorQueDez.push(numero);
        }
    }
    // Retorna o array com os números maiores que 10
    return numerosMaiorQueDez;
}

// Exibe o resultado da função maiorQueDez
console.log(maiorQueDez());

// Utilizando o método filter para retornar números maiores que 10
const numerosFiltrados = numeros.filter((valor, indice, array) => {
    // Exibe o valor e o índice de cada elemento do array durante a iteração
    console.log(valor, indice);
    // Retorna true se o valor for maior que 10, false caso contrário
    return valor > 10;
});

// Exibe o array resultante do filter
console.log(numerosFiltrados);

// Declaração de um array de objetos representando pessoas
const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Wallace", idade: 47 },
];

// Filtra pessoas cujo nome tem 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter((objeto) => objeto.nome.length >= 5);

// Exibe o array resultante
console.log(pessoasComNomeGrande);

// Filtra pessoas com mais de 50 anos
const pessoasComMaisDe50Anos = pessoas.filter((objeto) => objeto.idade > 50);

// Exibe o array resultante
console.log(pessoasComMaisDe50Anos);

// Filtra pessoas cujo nome termina com a letra 'a'
const pessoasCujoNomeTeminaComA = pessoas.filter((objeto) =>
    objeto.nome.toLowerCase().endsWith("a")
);

// Exibe o array resultante
console.log(pessoasCujoNomeTeminaComA);
