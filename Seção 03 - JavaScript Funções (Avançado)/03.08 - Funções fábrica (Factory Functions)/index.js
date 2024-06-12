// Função fábrica para criar objetos do tipo 'Pessoa'
function criaPessoa(nome, sobrenome, altura, peso) {
    // Retorna um novo objeto 'Pessoa'
    return {
        // Propriedades 'nome' e 'sobrenome' inicializadas com os parâmetros recebidos
        nome,
        sobrenome,

        // Getter para obter o nome completo da pessoa
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter para definir o nome completo da pessoa
        set nomeCompleto(valor) {
            // Divide o valor recebido em partes usando o espaço como delimitador
            valor = valor.split(" ");
            // Atribui a primeira parte ao 'nome'
            this.nome = valor.shift();
            // Junta o restante das partes e atribui ao 'sobrenome'
            this.sobrenome = valor.join(" ");
        },

        // Método que retorna uma frase indicando o que a pessoa está fazendo
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        // Propriedades 'altura' e 'peso' inicializadas com os parâmetros recebidos
        altura: altura,
        peso: peso,

        // Getter para calcular e obter o IMC da pessoa
        get imc() {
            // Calcula o IMC (Índice de Massa Corporal)
            const imc = this.peso / this.altura ** 2;
            // Retorna o IMC arredondado para duas casas decimais
            return imc.toFixed(2);
        },
    };
}

// Cria um objeto 'Pessoa' usando a função fábrica
const pessoa = criaPessoa("Wesley", "Victor", 1.7, 60);

// Usa o setter para atualizar o nome completo da pessoa
pessoa.nomeCompleto = "Maria Pereira Silva";

// Usa o getter para obter e imprimir o nome completo da pessoa
console.log(pessoa.nomeCompleto); // "Maria Pereira Silva"

// Usa o getter para obter e imprimir o IMC da pessoa
console.log(pessoa.imc); // IMC calculado e arredondado para duas casas decimais

// Chama o método 'fala' para imprimir o que a pessoa está fazendo
console.log(pessoa.fala("falando sobre JS")); // "Maria está falando sobre JS"

// Imprime o nome da pessoa
console.log(pessoa.nome); // "Maria"

// Imprime o sobrenome da pessoa
console.log(pessoa.sobrenome); // "Pereira Silva"
