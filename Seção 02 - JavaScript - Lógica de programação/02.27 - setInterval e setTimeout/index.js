// Função que retorna a hora formatada no formato de 24 horas
function mostrarHora() {
    // Cria uma nova instância de Date para obter a hora atual
    let data = new Date();

    // Retorna a hora formatada de acordo com o local "pt-BR" e o formato especificado
    return data.toLocaleTimeString("pt-BR", {
        hour12: false, // Define o formato de 24 horas
    });
}

// Define um intervalo para chamar a função mostrarHora a cada segundo
const timer = setInterval(function () {
    console.log(mostrarHora()); // Imprime a hora no console
}, 1000); // A cada 1000 milissegundos (1 segundo)

// Define um temporizador para parar o intervalo após 3 segundos (3000 milissegundos)
setTimeout(function () {
    clearInterval(timer); // Limpa o intervalo
}, 3000); // Após 3000 milissegundos (3 segundos)

// Define um temporizador para imprimir "Olá mundo!" após 5 segundos (5000 milissegundos)
setTimeout(function () {
    console.log("Olá mundo!"); // Imprime "Olá mundo!" no console
}, 5000); // Após 5000 milissegundos (5 segundos)
