// Função que aceita múltiplos argumentos e calcula a soma de todos eles
function primeiraFuncao(a, b, c) {
    let total = 0;
    // 'arguments' é um objeto array-like que contém todos os argumentos passados para a função
    for (let argumento of arguments) {
        total += argumento; // Soma cada argumento ao total
    }
    // Imprime o total e os três primeiros argumentos explicitamente passados
    console.log(total, a, b, c);
}
// Chama a função com mais argumentos do que os parâmetros definidos
primeiraFuncao(1, 2, 3, 4, 5, 6, 7);

/////////////////////////////////////////////////////

// Função que imprime os argumentos passados, preenchendo os parâmetros ausentes com 'undefined'
function segundaFuncao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f); // Parâmetros d, e, f serão 'undefined'
}
// Chama a função com menos argumentos do que os parâmetros definidos
segundaFuncao(1, 2, 3);

/////////////////////////////////////////////////////

// Função com parâmetros padrão
function terceiraFuncao(a, b = 2, c = 4) {
    // Soma os valores dos parâmetros, usando valores padrão se não fornecidos
    console.log(a + b + c);
}
// Chama a função com um parâmetro indefinido, o que faz com que o valor padrão seja usado
terceiraFuncao(2, undefined, 20);

/////////////////////////////////////////////////////

// Função que utiliza destruição de objeto como parâmetro
function quartaFuncao({ nome, sobrenome, idade }) {
    // Imprime as propriedades do objeto
    console.log(nome, sobrenome, idade);
}
// Cria um objeto para passar como argumento
let obj = { nome: "Wesley", sobrenome: "Victor", idade: 18 };
// Chama a função passando o objeto
quartaFuncao(obj);

/////////////////////////////////////////////////////

// Função que utiliza destruição de array como parâmetro
function quintaFuncao([nome, sobrenome, idade]) {
    // Imprime os elementos do array
    console.log(nome, sobrenome, idade);
}
// Chama a função passando um array
quintaFuncao(["Wesley", "Victor", 18]);

/////////////////////////////////////////////////////

// Função flecha que usa o operador rest para aceitar múltiplos argumentos
const sextaFuncao = (...args) => {
    // 'args' é um array contendo todos os argumentos passados para a função
    console.log(args);
};
// Chama a função com vários argumentos
sextaFuncao(1, 2, 3, 4, 5);

/////////////////////////////////////////////////////

// Função que realiza operações matemáticas usando o operador rest
function conta(operador, acumulador, ...numeros) {
    // Itera sobre cada número no array 'numeros'
    for (let numero of numeros) {
        // Realiza a operação especificada pelo 'operador' no 'acumulador'
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "*") acumulador *= numero;
        if (operador === "/") acumulador /= numero;
    }
    // Imprime o resultado final do acumulador após todas as operações
    console.log(acumulador);
}
// Chama a função para somar uma série de números ao acumulador inicial
conta("+", 0, 10, 20, 30, 40);
