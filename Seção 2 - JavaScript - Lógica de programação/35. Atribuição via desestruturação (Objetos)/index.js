//A atribuição via desestruturação de objetos permite que você extraia valores de um objeto e os atribua a
//variáveis individualmente, com base nas chaves dos elementos no objeto.

const pessoa = {
    nome: "Wesley",
    sobrenome: "Victor",
    idade: 18,
    endereco: {
        rua: "Av Brasil",
        numero: 320,
    },
    sexo: "Masculino",
    altura: 1.7,
};
//Atribuição via desestruturação: extraindo valores específicos do objeto 'pessoa'.
const {
    nome, //Extrai o valor da chave 'nome'.
    sobrenome, //Extrai o valor da chave 'sobrenome'.
    endereco: { rua, numero }, //Extrai os valores 'rua' e 'numero' do objeto 'endereco'.
    endereco, //Extrai o objeto 'endereco' inteiro.
    ...resto //Cria um objeto com o restante das propriedades de 'pessoa'.
} = pessoa;
//Imprime os valores extraídos (nome, sobrenome, rua, numero), o objeto 'endereco' e o objeto 'resto'.
console.log(nome, sobrenome, rua, numero, endereco, resto);
