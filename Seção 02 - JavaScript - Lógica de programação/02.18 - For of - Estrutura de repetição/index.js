//O for é uma estrutura de repetição no JavaScript usada para executar um bloco de código repetidamente enquanto
//uma condição específica for verdadeira. Ela consiste em três partes: inicialização, condição e expressão
//final. A inicialização ocorre uma vez no início, a condição é verificada antes de cada repetição, e a
//expressão final é usada para atualizar a condição a cada repetição.
const nomes = ["Wesley", "Victor", "Maria"];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

for (let u in nomes) {
    console.log(nomes[u]);
}

for (let valor of nomes) {
    console.log(valor);
}

nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
});

const pessoa = {
    nome: "Wesley",
    sobrenome: "Victor",
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
