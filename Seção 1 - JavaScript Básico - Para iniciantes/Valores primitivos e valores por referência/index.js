//Valores primitivos (Imutáveis) = string, number, boolean, undefined, null, bigint e symbol - Valores copiados
let a = "A";
let b = a; //Cópia
console.log(a, b); //A A
a = "Outra coisa";
console.log(a, b); //Outra coisa A

//Valores por referência (Mutável) = array, object e function - Valores passados por referência
let c = [1, 2, 3];
let d = c;
console.log(c, d); //[1, 2, 3] [1, 2, 3]
c.push(4);
console.log(c, d); //[1, 2, 3, 4] [1, 2, 3, 4]

const e = {
    nome: "Wesley",
    sobrenome: "Victor",
};
const f = e;
e.nome = "João";
console.log(f); //{nome: "João", sobrenome: "Victor"}
