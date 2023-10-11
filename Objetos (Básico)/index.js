//Objeto em JavaScript é uma coleção de dados e funcionalidades.
//Criar objeto
const pessoa = {
    nome: "Wesley", //Atributo
    sobrenome: "Victor", //Atributo
    idade: 17, //Atributo
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi.`);
        console.log(`A minha idade atual é ${this.idade}.`);
    },
    incrementaIdade() {
        this.idade++;
    },
};

console.log(pessoa); //Olhar todo o objeto
console.log(pessoa.nome); //Olhar um atributo do objeto
console.log(pessoa.sobrenome); //Olhar um atributo do objeto
console.log(pessoa.idade); //Olhar um atributo do objeto
pessoa.incrementaIdade(); //Chamando a função incrementaIdade do objeto
pessoa.fala(); //Chamando a função fala do objeto

//Função que cria objetos
function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}
const pessoa1 = criaPessoa("Luiz", "Otávio", 25);
const pessoa2 = criaPessoa("Maria", "Oliveira", 20);
console.log(pessoa1.nome, pessoa2.nome);
