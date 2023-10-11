//Const declara uma variável cujo valor não pode ser alterado.
//let declara uma variável com escopo de bloco.
const nome = "Wesley Victor";
const sobrenome = "Pereira";
const idade = 18;
const peso = 60;
const alturaEmM = 1.7;
let indiceMassaCorporal; //peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
console.log(indiceMassaCorporal);
anoNascimento = 2023 - idade;
console.log(anoNascimento);

//Template strings
console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso + "KG");
console.log(
  `tem ${alturaEmM} de altura e seu indice de massa corporal é de ${indiceMassaCorporal}`
);
console.log(nome, "nasceu em", anoNascimento + ".");
