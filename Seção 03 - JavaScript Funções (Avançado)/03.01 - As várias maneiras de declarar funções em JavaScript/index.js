// Declaração de função (Function hoisting)
falaOi(); // Chama a função antes de sua definição devido ao hoisting

// Função declarada com function hoisting
function falaOi() {
    console.log("Oi"); // Imprime "Oi" no console
}

// First-class objects (Objetos de primeira classe)
// Funções em JavaScript são objetos de primeira classe, ou seja, podem ser tratadas como dados

// Function expression
const souUmDado = function () {
    console.log("Sou um dado."); // Imprime "Sou um dado." no console
};

// Função que recebe outra função como argumento e a executa
function executaFuncao(funcao) {
    console.log("Vou executar sua função a baixo:"); // Imprime uma mensagem no console
    funcao(); // Executa a função recebida como argumento
}
executaFuncao(souUmDado); // Passa a função 'souUmDado' como argumento e a executa

// Arrow function
const funcaoArrow = () => {
    console.log("Sou uma arrow function"); // Imprime "Sou uma arrow function" no console
};
funcaoArrow(); // Chama e executa a arrow function

// Função dentro de um objeto
const obj = {
    falar() {
        console.log("Estou falando..."); // Imprime "Estou falando..." no console
    },
};
obj.falar(); // Chama o método 'falar' do objeto 'obj'
