// Declaração dos arrays
const arrayUm = [1, 2, 3];
const arrayDois = [4, 5, 6];

// Concatenação de strings (não é o resultado esperado para arrays)
const arrayTres = arrayUm + arrayDois;
console.log(typeof arrayTres, arrayTres);
// typeof arrayTres: string
// arrayTres: "1,2,34,5,6"

// Concatenação correta dos arrays usando o método concat()
const arrayQuatro = arrayUm.concat(arrayDois);
console.log(typeof arrayQuatro, arrayQuatro);
// typeof arrayQuatro: object
// arrayQuatro: [1, 2, 3, 4, 5, 6]

// Concatenação dos arrays com elementos adicionais usando concat()
const arrayCinco = arrayUm.concat(arrayDois, [7, 8, 9], "Wesley");
console.log(typeof arrayCinco, arrayCinco);
// typeof arrayCinco: object
// arrayCinco: [1, 2, 3, 4, 5, 6, 7, 8, 9, "Wesley"]

// Concatenação usando spread operator (...) para criar um novo array
const arraySeis = [...arrayUm, "Victor", ...arrayDois, ...[7, 8, 9]];
console.log(typeof arraySeis, arraySeis);
// typeof arraySeis: object
// arraySeis: [1, 2, 3, "Victor", 4, 5, 6, 7, 8, 9]
