//A atribuição via desestruturação de arrays permite que você extraia valores de um array e os atribua a variáveis individualmente, com base na posição dos elementos no array.

let a = "A"; //Declara e inicializa uma variável 'a' com o valor "A".
let b = "B"; //Declara e inicializa uma variável 'b' com o valor "B".
let c = "C"; //Declara e inicializa uma variável 'c' com o valor "C".
const letras = [b, c, a]; //Cria um array 'letras' com os valores de 'b', 'c' e 'a' naquela ordem.
[a, b, c] = letras; //Desestrutura o array 'letras' para as variáveis 'a', 'b' e 'c', reatribuindo seus valores.
console.log(a, b, c); //Imprime os valores atualizados de 'a', 'b' e 'c', que agora são "B", "C" e "A".

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres, , , seis, ...resto] = numeros; //Desestruturação do array 'numeros' em variáveis.
console.log(um, dois, tres, seis); //Imprime os valores das variáveis desestruturadas.
console.log(resto); //Imprime o array 'resto' que contém os elementos restantes do array 'numeros'.

const numero = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const [lista1, lista2, lista3] = numero; //Desestruturação das listas internas em variáveis separadas.
console.log(lista3[2]); //Acessando um elemento específico da terceira lista (lista3).
