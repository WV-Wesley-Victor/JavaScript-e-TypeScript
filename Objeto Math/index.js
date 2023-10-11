//Objeto Math: fornece funções matemáticas.
let num1 = 9.56;
let num2 = 9;

console.log(num2 ** (1 / 2)); //Descobrir a raiz quadrada
console.log(10 / 0); //Retorna o valor Infinity (true)

//Math.floor();
let num3 = Math.floor(num1); //Arredondar o numero para baixo
//Math.ceil();
let num4 = Math.ceil(num1); //Arredondar o numero para cima
//Math.round();
let num5 = Math.round(num1); //Arredondar para o valor mais proximo
console.log(num3, num4, num5);

//Math.max();
console.log(Math.max(1, 2, 3, 4, 5, -1, -2, -3, -4, -5)); //Pegar o maior numero dessa sequencia
//Math.min();
console.log(Math.min(1, 2, 3, 4, 5, -1, -2, -3, -4, -5)); //Pegar o menor numero dessa sequencia

//Math.random();
const aleatorio = Math.random(); //Gera um numero aleatorio entre 0 e 1
console.log(aleatorio);
