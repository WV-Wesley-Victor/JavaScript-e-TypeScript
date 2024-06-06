// Função que gera um número inteiro aleatório entre min (inclusivo) e max (exclusivo)
function random(min, max){
    // Gera um número aleatório entre 0 (inclusivo) e 1 (exclusivo), multiplica pelo intervalo (max - min) e soma min
    const r = Math.random() * (max - min) + min;
    // Arredonda para baixo para obter um número inteiro e retorna
    return Math.floor(r);
}

// Define o valor mínimo como 1
const min = 1;
// Define o valor máximo como 50
const max = 50;
// Gera um número aleatório inicial entre min e max
let rand = random(min, max);

// Executa o loop enquanto rand não for igual a 10
while(rand !== 10){
    // Gera um novo número aleatório entre min e max
    rand = random(min, max);
    // Imprime o número gerado
    console.log(rand);
}

// Executa o bloco pelo menos uma vez, depois repete enquanto rand não for igual a 10
do{
    // Imprime o valor atual de rand
    console.log(rand);
} while (rand !== 10);

// Define uma string com o nome "Wesley"
const nome = "Wesley";

// Inicializa o contador i em 0
let i = 0;

// Executa o loop enquanto i for menor que o comprimento da string nome
while(i < nome.length){
    // Imprime o caractere na posição i da string nome
    console.log(nome[i]);
    // Incrementa o contador i
    i++;
}

// Imprime a mensagem "Segue a vida..."
console.log("Segue a vida...");
