//'let' tem escopo de bloco, o que significa que as variáveis declaradas com 'let' são restritas ao bloco em que são definidas.
//'var' tem escopo de função, o que significa que as variáveis declaradas com 'var' são acessíveis em toda a função.

const verdadeira = true; //Declara uma constante chamada 'verdadeira' com o valor verdadeiro.
let nome = "Wesley"; //Declara uma variável 'nome' no escopo global e a inicializa.
var nome2 = "Wesley"; //Declara uma variável 'nome2' no escopo global e a inicializa.
if (verdadeira) {
    let nome = "Victor"; //Cria uma nova variável 'nome' com escopo restrito a este bloco e a inicializa.
    var nome2 = "Rogério"; //Reatribui o valor da variável 'nome2' no escopo global para "Rogério".
    if (verdadeira) {
        var nome2 = "Ronaldo"; //Reatribui o valor da variável 'nome2' no escopo global para "Ronaldo".
        let nome = "Outra coisa"; //Cria uma variável 'nome' com escopo restrito a este bloco e a inicializa.
    }
}
console.log(nome, nome2); //Mostra a variável nome do escopo global e nome2 do escopo global após as mudanças.

// Este exemplo ilustra como o escopo de função protege as variáveis.
function falaOi() {
    //A condição é verdadeira (baseada na constante 'verdadeira' definida fora da função).
    if (verdadeira) {
        let nome3 = "Wesley"; //Declara uma variável 'nome3' no escopo do bloco condicional e a inicializa.
        var sobrenome = "Victor"; //Declara uma variável 'sobrenome' no escopo da função e a inicializa.
    }
    console.log(sobrenome); //Imprime o valor da variável 'sobrenome' que está no escopo da função.
}
falaOi(); //Chama a função 'falaOi'.

//Variáveis declaradas com 'var' são automaticamente movidas para o topo do escopo.
//Isso permite seu uso antes da declaração, mas a atribuição inicial é 'undefined'.
console.log(x); //Output:undefined
var x = 10;
console.log(x); //Output:10
