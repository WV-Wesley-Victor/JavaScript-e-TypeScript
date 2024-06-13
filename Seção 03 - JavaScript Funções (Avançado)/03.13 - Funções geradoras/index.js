// Define uma função geradora chamada 'primeiraGeradora'
function* primeiraGeradora() {
    // Yield retorna um valor e pausa a execução da função geradora
    yield "Primeiro valor";
    // Código adicional pode ser executado aqui
    yield "Segundo valor";
    // Mais código adicional pode ser executado aqui
    yield "Terceiro valor";
}

// Cria uma instância da geradora
const geradoraUm = primeiraGeradora();
console.log(geradoraUm); // Imprime o objeto gerador
console.log(geradoraUm.next()); // { value: 'Primeiro valor', done: false }
console.log(geradoraUm.next().value); // 'Segundo valor'
console.log(geradoraUm.next().done); // false
console.log(geradoraUm.next().done); // true, já que não há mais yields

// Cria outra instância da geradora
const geradoraDois = primeiraGeradora();
for (let valor of geradoraDois) {
    console.log(valor); // Itera sobre cada valor yieldado: 'Primeiro valor', 'Segundo valor', 'Terceiro valor'
}

// Define uma função geradora que gera uma sequência infinita de números
function* segundaGeradora() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

const geradoraTres = segundaGeradora();
console.log(geradoraTres.next().value); // 0
console.log(geradoraTres.next().value); // 1
console.log(geradoraTres.next().value); // 2

// Define uma função geradora que yielda valores 0, 1 e 2
function* terceiraGeradora() {
    yield 0;
    yield 1;
    yield 2;
}

// Define uma função geradora que delega para 'terceiraGeradora' e depois yielda 3, 4 e 5
function* quartaGeradora() {
    yield* terceiraGeradora(); // Delegação para outra geradora
    yield 3;
    yield 4;
    yield 5;
}

const geradoraQuatro = quartaGeradora();
for (let valor of geradoraQuatro) {
    console.log(valor); // Itera sobre os valores: 0, 1, 2, 3, 4, 5
}

// Define uma função geradora que yielda funções
function* quintaGeradora() {
    yield function () {
        console.log("Vim do primeiro yield");
    };
    return function () {
        console.log("Vim do return");
    };
    // Este código não será executado devido ao return acima
    yield function () {
        console.log("Vim do segundo yield");
    };
}

const geradoraCinco = quintaGeradora();
const primeiraFuncao = geradoraCinco.next().value;
const segundaFuncao = geradoraCinco.next().value;
const terceiraFuncao = geradoraCinco.next().value; // undefined, pois o return encerra a geradora

primeiraFuncao(); // "Vim do primeiro yield"
segundaFuncao(); // "Vim do return"
if (terceiraFuncao) terceiraFuncao(); // Não faz nada, pois terceiraFuncao é undefined
