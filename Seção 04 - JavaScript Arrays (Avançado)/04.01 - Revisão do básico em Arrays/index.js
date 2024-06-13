// Cria um array de nomes
const nomes = ["Wesley", "Maria", "Joana"];

// 'pessoas' referencia o mesmo array que 'nomes'
const pessoas = nomes;

// 'people' é uma cópia superficial do array 'nomes'
const people = [...nomes];

// Altera o terceiro elemento do array 'nomes' para "João"
nomes[2] = "João";

// Remove o último elemento do array 'pessoas' (que é o mesmo que 'nomes')
pessoas.pop();

// Remove e armazena o primeiro elemento do array 'people'
const removidoNoInicio = people.shift();

// Remove e armazena o último elemento do array 'people'
const removidoNoFinal = people.pop();

// Remove o segundo elemento do array 'nomes', deixando um índice vazio
delete nomes[1];

// Adiciona "Yumi" no início do array 'nomes'
nomes.unshift("Yumi");

// Adiciona "Catarina" no final do array 'nomes'
nomes.push("Catarina");

// Imprime o array 'nomes' com todas as alterações feitas
console.log(nomes);

// Imprime o array 'pessoas', que é o mesmo que 'nomes'
console.log(pessoas);

// Imprime o array 'people' e os elementos removidos
console.log(people, removidoNoInicio, removidoNoFinal);

// Imprime o comprimento atual do array 'nomes'
console.log(nomes.length);

// Cria um novo array 'fatiar' contendo os elementos do índice 1 ao 2 do array 'nomes'
const fatiar = nomes.slice(1, 3);
console.log(fatiar);

// Cria uma string 'name' com um nome completo
const name = "Wesley Victor Pereira Silva";

// Divide a string 'name' em um array de substrings, usando espaço como delimitador
const names = name.split(" ");
console.log(names);

// Junta o array de substrings 'names' em uma única string
const nomeCompleto = names.join(" ");
console.log(nomeCompleto);
