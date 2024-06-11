// Função que retorna a soma de dois números
// O return retorna o valor da soma e termina a execução da função
function primeiraSoma(a, b) {
    return a + b;
}
// Chama a função primeiraSoma com os argumentos 2 e 3 e imprime o resultado (5)
console.log(primeiraSoma(2, 3));

/////////////////////////////////////////////////////

// Função que calcula a soma de dois números e imprime o resultado
function segundaSoma(a, b) {
    // Imprime a soma de a e b
    console.log(a + b);
}
// Chama a função segundaSoma com os argumentos 5 e 5 (imprime 10)
segundaSoma(5, 5);

/////////////////////////////////////////////////////

// Adiciona um ouvinte de evento de clique ao documento
// Quando o documento é clicado, a cor de fundo do body é alterada para vermelho
document.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
});

/////////////////////////////////////////////////////

// Função que cria e retorna um objeto pessoa com nome e sobrenome
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}
// Cria uma nova pessoa usando a função criaPessoa
const p1 = criaPessoa("Wesley", "Victor");
// Cria um objeto pessoa diretamente
const p2 = {
    nome: "João",
    sobrenome: "Oliveira",
};
// Imprime os objetos p1 e p2
console.log(p1);
console.log(p2);

/////////////////////////////////////////////////////

// Função que retorna outra função que concatena duas partes de uma frase
function falaFrase(comeco) {
    // Função interna que recebe o resto da frase e retorna a frase completa
    function falaResto(resto) {
        return comeco + " " + resto;
    }
    // Retorna a função falaResto
    return falaResto;
}
// Cria uma nova função que inicia a frase com "Olá"
const fala = falaFrase("Olá");
// Chama a função resultante com "mundo!" para completar a frase
const resto = fala("mundo!");
// Imprime a frase completa "Olá mundo!"
console.log(resto);

/////////////////////////////////////////////////////

// Função que cria um multiplicador
// Retorna uma nova função que multiplica um número pelo multiplicador
function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}
// Cria três multiplicadores diferentes
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
// Chama cada multiplicador com o número 2 e imprime os resultados
console.log(duplica(2)); // Imprime 4
console.log(triplica(2)); // Imprime 6
console.log(quadriplica(2)); // Imprime 8
