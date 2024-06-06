// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

// Define uma função de seta (arrow function) chamada ePaisagem que recebe dois parâmetros: largura e altura
const ePaisagem = (largura, altura) => (largura > altura ? true : false);

// Chama a função ePaisagem com os argumentos 1080 (largura) e 1920 (altura) e imprime o resultado no console
console.log(ePaisagem(1080, 1920));
