// Função que retorna outra função
function retornaFuncao(nome) {
    // Retorna uma função anônima que tem acesso ao parâmetro 'nome' do escopo da função externa
    return function () {
        return nome;
    };
}

// Cria uma função 'funcao' que retorna o nome "Wesley"
const funcao = retornaFuncao("Wesley");

// Cria uma função 'funcao2' que retorna o nome "Victor"
const funcao2 = retornaFuncao("Victor");

// Imprime no console o escopo das funções 'funcao' e 'funcao2'
console.dir(funcao); // Isso exibirá a função retornada e seu ambiente léxico (nome: "Wesley")
console.dir(funcao2); // Isso exibirá a função retornada e seu ambiente léxico (nome: "Victor")

// Chama as funções 'funcao' e 'funcao2' para obter seus valores de retorno (os nomes)
// Imprime "Wesley" e "Victor" no console
console.log(funcao(), funcao2());
