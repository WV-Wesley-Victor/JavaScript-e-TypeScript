// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com números de 0 a 100

// Função que recebe um número e retorna uma string ou o próprio número baseado em várias condições
function FizzBuzz(numero) {
    // Verifica se o argumento fornecido é realmente um número
    if (typeof numero !== "number") {
        return numero; // Se não for um número, retorna o argumento como está
    }

    // Verifica se o número é divisível por 3 e por 5
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz"; // Retorna "FizzBuzz" se for divisível por 3 e 5
    }
    // Verifica se o número é divisível por 3
    else if (numero % 3 === 0) {
        return "Fizz"; // Retorna "Fizz" se for divisível por 3
    }
    // Verifica se o número é divisível por 5
    else if (numero % 5 === 0) {
        return "Buzz"; // Retorna "Buzz" se for divisível por 5
    }
    // Se o número não for divisível nem por 3 nem por 5
    else {
        return numero; // Retorna o próprio número
    }
}

// Loop que percorre de 0 a 100
for (let numero = 0; numero <= 100; numero++) {
    // Chama a função FizzBuzz para cada número e imprime o resultado no console
    console.log(numero, FizzBuzz(numero));
}
