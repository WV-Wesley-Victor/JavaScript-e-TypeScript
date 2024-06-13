// Define uma função recursiva chamada 'recursiva'
function recursiva(max) {
    // Caso base: se 'max' for maior que 100, a função retorna e para a recursão
    if (max > 100) return;

    // Imprime o valor atual de 'max' no console
    console.log(max);

    // Incrementa o valor de 'max'
    max++;

    // Chama a própria função 'recursiva' com o novo valor de 'max'
    recursiva(max);
}

// Chama a função 'recursiva' pela primeira vez com o valor inicial 0
recursiva(0);
