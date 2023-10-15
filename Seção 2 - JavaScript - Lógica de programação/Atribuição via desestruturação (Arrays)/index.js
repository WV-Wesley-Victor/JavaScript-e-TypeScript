//A atribuição via desestruturação de arrays permite que você extraia valores de um array e os atribua a variáveis individualmente, com base na posição dos elementos no array.

let a = "A"; //Declara e inicializa uma variável 'a' com o valor "A".
let b = "B"; //Declara e inicializa uma variável 'b' com o valor "B".
let c = "C"; //Declara e inicializa uma variável 'c' com o valor "C".
const letras = [b, c, a]; //Cria um array 'letras' com os valores de 'b', 'c' e 'a' naquela ordem.
[a, b, c] = letras; //Desestrutura o array 'letras' para as variáveis 'a', 'b' e 'c', reatribuindo seus valores.
console.log(a, b, c); //Imprime os valores atualizados de 'a', 'b' e 'c', que agora são "B", "C" e "A".
