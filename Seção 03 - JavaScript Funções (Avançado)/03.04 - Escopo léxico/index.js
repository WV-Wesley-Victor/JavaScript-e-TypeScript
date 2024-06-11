// Declara uma constante global chamada 'nome' e atribui a ela o valor "Wesley"
const nome = "Wesley";

// Declara uma função chamada 'falaNome'
function falaNome() {
    // Imprime o valor da constante 'nome' no console
    // Como não há uma variável 'nome' local dentro desta função, a função usa a variável 'nome' do escopo global
    console.log(nome);
}

// Declara uma função chamada 'usaFalaNome'
function usaFalaNome() {
    // Declara uma constante local chamada 'nome' e atribui a ela o valor "Victor"
    // Esta variável 'nome' é diferente da variável global 'nome'
    const nome = "Victor";

    // Chama a função 'falaNome'
    // A função 'falaNome' acessa a variável 'nome' do escopo onde foi definida (escopo global), não do escopo de 'usaFalaNome'
    falaNome();
}

// Chama a função 'usaFalaNome'
usaFalaNome(); // Isso resultará na impressão de "Wesley" no console
