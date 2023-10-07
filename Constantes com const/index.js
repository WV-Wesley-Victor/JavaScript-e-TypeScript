//Não podemos criar constantes com palavra reservadas
//Constantes precisam ter nomes significativos
//Não pode começar o nome de uma constante com um número
//Não podem conter espaços ou traços
//Utilizamos camelCase
//Case-sensitive
//Não pode modificar o valor de uma constante
//NÃO UTILIZE VAR, UTILIZE CONST.
const nome = 'João';
console.log(nome);

//String = Text | Number = Número
//+ - * /
const primeiroNumero = '5';  //String
const segundoNumero = 10; //Number
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

console.log(typeof(primeiroNumero));
console.log(typeof(segundoNumero));
console.log(primeiroNumero + segundoNumero);