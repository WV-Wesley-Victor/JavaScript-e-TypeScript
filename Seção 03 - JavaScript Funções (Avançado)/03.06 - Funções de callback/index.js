// Função para gerar um número randômico entre um intervalo definido (padrão: entre 1000 e 3000)
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

// Função assíncrona f1 com um possível callback
function f1(callback) {
    // Define um temporizador que chamará a função interna após um tempo randômico
    setTimeout(function () {
        console.log("f1"); // Imprime "f1" no console
        // Verifica se há um callback e o chama, se fornecido
        if (callback) callback();
    }, rand()); // O tempo de espera é determinado aleatoriamente
}

// Função assíncrona f2 com um possível callback
function f2(callback) {
    // Define um temporizador que chamará a função interna após um tempo randômico
    setTimeout(function () {
        console.log("f2"); // Imprime "f2" no console
        // Verifica se há um callback e o chama, se fornecido
        if (callback) callback();
    }, rand()); // O tempo de espera é determinado aleatoriamente
}

// Função assíncrona f3 com um possível callback
function f3(callback) {
    // Define um temporizador que chamará a função interna após um tempo randômico
    setTimeout(function () {
        console.log("f3"); // Imprime "f3" no console
        // Verifica se há um callback e o chama, se fornecido
        if (callback) callback();
    }, rand()); // O tempo de espera é determinado aleatoriamente
}

// Chama as funções em sequência com callbacks aninhados
// Esta é uma abordagem comentada e não utilizada no código atual
// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log("Olá mundo!"); // Imprime "Olá mundo!" no console após f3
//         });
//     });
// });

// Chama a função f1 com um callback f1Callback
f1(f1Callback);

// Callback de f1, chama a função f2 com um callback f2Callback
function f1Callback() {
    f2(f2Callback);
}

// Callback de f2, chama a função f3 com um callback f3Callback
function f2Callback() {
    f3(f3Callback);
}

// Callback de f3, imprime "Olá mundo!" no console
function f3Callback() {
    console.log("Olá mundo!");
}
