// Função construtora para criar objetos do tipo 'Pessoa'
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados (não acessíveis fora da função construtora)
    const ID = 12345; // Atributo privado
    const metodoInterno = function () { }; // Método privado

    // Atributos ou métodos públicos (acessíveis fora da função construtora)
    this.nome = nome; // Atributo público
    this.sobrenome = sobrenome; // Atributo público

    // Método público
    this.metodo = function () {
        // Imprime o nome seguido de uma mensagem no console
        console.log(this.nome + ": sou um método");
    };
}

// Cria uma nova instância do objeto 'Pessoa' usando a função construtora
const primeiraPessoa = new Pessoa("Wesley", "Victor");
// Cria outra instância do objeto 'Pessoa'
const segundaPessoa = new Pessoa("Maria", "Angela");

// Chama o método 'metodo' da segundaPessoa, que imprime o nome e a mensagem no console
segundaPessoa.metodo(); // Output: "Maria: sou um método"
