//Array = []
//               0         1        2
const alunos = ["Wesley", "Maria", "João"]; //Lista de coisas
console.log(alunos); //Ver todo o array

alunos[0] = "Victor"; //Mudar o valor do array
alunos[3] = "Luiza"; //Adicionar mais um valor para o array
alunos.push("Michele"); //Adicionar um elemento no final do array
alunos.unshift("Gabriel"); //Adicionar um elemento no inicio do array
// delete alunos[2]; //Apagar o indice 2
const removido = alunos.pop(); //Remove o elemento final do array
const removido1 = alunos.shift(); //Remove o elemento inicial do array
console.log(removido); //Ver o elemento removido do final
console.log(removido1); //Ver o elemento removido do inicio
console.log(alunos); //Ver todo o array
console.log(alunos.slice(0, 2)); //Ver uma parte do array
console.log(alunos.length); //Saber o tamanho do array
console.log(alunos[0]); //Selecionar um array
console.log(alunos[2]); //Selecionar um array
console.log(alunos instanceof Array); //Verificar se é um array

//            012345
const nome = "Wesley";
console.log(nome[5]);
