//String, number, undefined, null, boolean
const nome = "Wesley"; //String
const nome1 = "Victor"; //String
const nome2 = `Pereira`; //String

const num = 10; //Number
const num1 = 10.52; //Number

let nomeAluno; //Undefined -> Não aponta para local nenhum na memória
const sobrenomeAluno = null; //Nulo -> Não aponta para local nenhum na memória

const aprovado = false; //Boolean = true ou false (lógico)

console.log(typeof nome, nome);
console.log(typeof nome1, nome1);
console.log(typeof nome2, nome2);
console.log(typeof num, num);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

const a = [1, 2];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b);

let c = 2;
const d = c;
console.log(c, d); //2, 2

c = 3;
console.log(c, d); //3, 2