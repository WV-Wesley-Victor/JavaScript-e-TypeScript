//O tipo number em JavaScript é um tipo primitivo que representa números.
//IEEE 754-2008
let num1 = 10.54325676; //number
let num2 = 2.5; //number
let num3 = 5; //number
let num4 = 0.7; //number
let num5 = 0.1; //number
let temp = "Olá"; //string

console.log(num1 + num2); //Somar numbers
num3 = num3.toString(); //Transformar number em string
console.log(typeof num3); //Ver o tipo da variavel
console.log(num1.toString(2)); //Binario
console.log(num1.toFixed(2)); //adicionar apenas duas casas decimais
console.log(Number.isInteger(num1)); //Verificar se o number é inteiro
console.log(Number.isNaN(temp * num1)); //Verificar se o calculo é Not a number
console.log(num4 + num5); //Pequena imprecisão
num4 = Number(num4.toFixed(2)); //Resolver a imprecisão
console.log(num4);
console.log(Number.isInteger(num4));
