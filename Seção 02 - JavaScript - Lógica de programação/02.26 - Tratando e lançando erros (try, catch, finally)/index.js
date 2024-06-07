// Função que retorna a hora formatada
function retornaHora(data) {
    // Verifica se foi fornecido um argumento e se não é uma instância de Date
    if (data && !(data instanceof Date)) {
        // Lança um TypeError se o argumento não for uma instância de Date
        throw new TypeError("Esperando instância de Date.");
    }

    // Se não houver argumento fornecido, cria uma nova instância de Date com a data e hora atuais
    if (!data) {
        data = new Date();
    }

    // Retorna a hora formatada de acordo com o local "pt-BR"
    return data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });
}

try {
    // Cria uma nova instância de Date com a data "01-01-1970 12:58:12"
    const data = new Date("01-01-1970 12:58:12");
    // Chama a função retornaHora sem passar nenhum argumento
    const hora = retornaHora();
    // Imprime a hora formatada no console
    console.log(hora);
} catch (e) {
    // Bloco catch para tratar qualquer erro que ocorra no bloco try
    // O corpo deste bloco está comentado, o que significa que não está fazendo nada
    // Poderia ser utilizado para lidar com o erro, como imprimir ou logar o erro
} finally {
    // Bloco finally é executado sempre, independentemente de ocorrer um erro ou não
    // Imprime uma mensagem de despedida no console
    console.log("Tenha um bom dia.");
}
