/*
Operadores Lógicos
&& -> AND (E): Ele retorna verdadeiro somente quando ambas as expressões à esquerda e à direita são verdadeiras.
|| -> OR (OU): Ele retorna verdadeiro se pelo menos uma das expressões à esquerda ou à direita for verdadeira.
! -> NOT (NÃO): Ele inverte o valor da expressão, ou seja, se a expressão for verdadeira, ele a torna falsa.
*/
console.log(true && true); //Saída: true (ambas as expressões são verdadeiras)
console.log(true && false); //Saída: false (uma expressão é falsa, portanto, o resultado é falso)
console.log(false && false); //Saída: false (uma expressão é falsa, portanto, o resultado é falso)
console.log(true || true); //Saída: true (pelo menos uma expressão é true, portanto, o resultado é verdadeiro)
console.log(true || false); //Saída: true (pelo menos uma expressão é true, portanto, o resultado é verdadeiro)
console.log(false || false); //Saída: false (ambas as expressões são falsas, portanto, o resultado é falso)
console.log(!false); // Saída: true (a expressão é invertida de "false" para "true" pelo operador "!")
console.log(!true); // Saída: false (a expressão é invertida de "true" para "false" pelo operador "!")

const usuario = "Wesley";
const senha = "12345";
//A variável "vaiLogar" verifica se o usuário é igual a "Wesley" e a senha é igual a "12345".
const vaiLogar = usuario === "Wesley" && senha === "12345";
console.log(vaiLogar); //Saída: true (vaiLogar é verdadeiro porque o usuário e a senha correspondem)
