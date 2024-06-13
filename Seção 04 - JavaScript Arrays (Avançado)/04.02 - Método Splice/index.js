//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

// Utilização do método splice para adicionar e remover elementos
// nomes.splice(índice, deleteCount, elementoUm, elementoDois, elementoTres);
const removidos = nomes.splice(3, 2, "Wesley", "Victor");
// Inicia a partir do índice 3, remove 2 elementos (Gabriel e Júlia), e adiciona "Wesley" e "Victor"
console.log(nomes, removidos); // ['Maria', 'João', 'Eduardo', 'Wesley', 'Victor'] ['Gabriel', 'Júlia']

// Simulação do método pop usando splice
const pop = nomes.splice(-1, 1);
// Remove 1 elemento a partir do último índice (Victor)
console.log(nomes, pop); // ['Maria', 'João', 'Eduardo', 'Wesley'] ['Victor']

// Simulação do método shift usando splice
const shift = nomes.splice(0, 1);
// Remove 1 elemento a partir do índice 0 (Maria)
console.log(nomes, shift); // ['João', 'Eduardo', 'Wesley'] ['Maria']

// Simulação do método push usando splice
const push = nomes.splice(nomes.length, 0, "Sofia");
// Adiciona "Sofia" no final do array
console.log(nomes, push); // ['João', 'Eduardo', 'Wesley', 'Sofia'] []

// Simulação do método unshift usando splice
const unshift = nomes.splice(0, 0, "Everaldo");
// Adiciona "Everaldo" no início do array
console.log(nomes, unshift); // ['Everaldo', 'João', 'Eduardo', 'Wesley', 'Sofia'] []

// Exibe o maior valor possível que um número pode ter em JavaScript
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
