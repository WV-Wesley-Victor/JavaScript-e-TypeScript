//Alert
alert("Com a nossa mensagem.");
window.alert("Mensagem.");

//Confirm
confirm("Confirme que deseja apagar.");
window.confirm("Deseja realmente apagar?");

const confirma = confirm("Realmente deseja apagar?");

//Prompt
prompt("Digite o seu nome.");
window.prompt("Digite o seu sobrenome.");

let num1 = prompt("Digite um número.");
let num2 = prompt("Digite outro número.");
console.log(num1, num2);
console.log(typeof num1, typeof num2);
num1 = Number(num1);
num2 = Number(num2);
console.log(typeof num1, typeof num2);
const resultado = num1 + num2;
alert(`O resultado da sua conta foi: ${resultado}`);
