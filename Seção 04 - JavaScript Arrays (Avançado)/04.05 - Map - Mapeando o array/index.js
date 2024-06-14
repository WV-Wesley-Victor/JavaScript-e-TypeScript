// Array original de números
// Índices:      0  1   2   3  4  ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Usando o método map para criar um novo array com os números dobrados
const numerosEmDobro = numeros.map(function (valor, indice, array) {
    // Retorna o valor multiplicado por 2
    return valor * 2;
});

// Exibe o novo array com os números dobrados
console.log(numerosEmDobro);

// Array original de objetos representando pessoas
const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Wallace", idade: 47 },
];

// Usando o método map para criar um novo array apenas com os nomes das pessoas
const nomes = pessoas.map((objeto) => objeto.nome);

// Exibe o array com os nomes das pessoas
console.log(nomes);

// Usando o método map para criar um novo array apenas com as idades das pessoas
const idades = pessoas.map((objeto) => ({ idade: objeto.idade }));

// Exibe o array com as idades das pessoas
console.log(idades);

// Usando o método map para adicionar um campo id em cada objeto pessoa
const id = pessoas.map((objeto, indice) => {
    // Cria um novo objeto copiando as propriedades do objeto original
    const novoObjeto = { ...objeto };
    // Adiciona a propriedade id com o valor do índice
    novoObjeto.id = indice;
    // Retorna o novo objeto com a propriedade id adicionada
    return novoObjeto;
});

// Exibe o array de objetos com a propriedade id adicionada
console.log(id);
