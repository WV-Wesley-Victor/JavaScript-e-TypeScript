//Uma função é um bloco de código que pode ser executado repetidamente.

//Criar a função
function saudacao(nome) {
  return `Bom dia ${nome}!`; //Encerrar
}
const variavel = saudacao("Wesley"); //Guardar o return em uma variavel
console.log(variavel); //Chamar a função

//Criar a função
function soma(x = 0, y = 0) {
  const resultado = x + y;
  return resultado; //Encerrar
}
const resultado = soma(2, 2); //Guardar o return em uma variavel
console.log(resultado); //Chamar a função

//Criar uma função anonima
const raiz = function (n) {
  return n ** 0.5;
};
console.log(raiz(25)); //Chamar a função

//Criar uma arrow function
const raiz1 = (n) => n ** 0.5;
console.log(raiz1(9)); //Chamar a função
