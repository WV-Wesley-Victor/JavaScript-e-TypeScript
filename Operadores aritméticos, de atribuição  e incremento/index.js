/*
Aritméticos
** = Potenciação
* = Multiplicação
/ = Divisão
% = Resto da divisão
+ = Adição / Concatenação
- = Subtração
*/
/*
Incremento = ++
Decremento = --
*/
/*
Operadores de atribuição
*/
const numString = "5";
const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(numString + num1);
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

console.log((num1 + num2) * num3);
console.log((num1 * num2) / num3);

const passo = 2;
let contador = 1;
contador++;
contador--;
++contador;
--contador;
contador += passo; //contador = contador + passo
contador -= passo;
contador *= passo;
contador /= passo;
contador **= passo;
console.log(contador);
/*
NaN - Not a number
parseInt (inteiro)
parseFloat (decimais)
Number (inteiro ou decimal)
*/
const num4 = 10;
const num5 = parseInt("5");
const num6 = parseFloat("5.2");
const num7 = Number("2.5");
console.log(num4 + num5);
console.log(num4 * num5);
console.log(typeof num5);
