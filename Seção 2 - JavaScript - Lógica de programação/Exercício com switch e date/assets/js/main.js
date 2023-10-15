const h1 = document.querySelector(".container h1"); //Pega o elemento HTML com a classe container e pelo h1.
const data = new Date(); //Cria um objeto Date para obter a data atual.

//Função para obter o nome do dia da semana com base em um número de 0 (Domingo) a 6 (Sábado).
function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = "domingo";
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "segunda-feira";
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "terça-feira";
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = "quarta-feira";
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = "quinta-feira";
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = "sexta-feira";
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = "sábado";
            return diaSemanaTexto;
        default:
            diaSemanaTexto = ""; //Retorna uma string vazia se o número não corresponder a um dia da semana.
            return diaSemanaTexto;
    }
}

//Função para obter o nome do mês do ano com base em um número de 0 (Janeiro) a 11 (Dezembro).
function getNomeMes(numeroMes) {
    let nomeMes;
    switch (numeroMes) {
        case 0:
            nomeMes = "janeiro";
            return nomeMes;
        case 1:
            nomeMes = "fevereiro";
            return nomeMes;
        case 2:
            nomeMes = "março";
            return nomeMes;
        case 3:
            nomeMes = "abril";
            return nomeMes;
        case 4:
            nomeMes = "maio";
            return nomeMes;
        case 5:
            nomeMes = "junho";
            return nomeMes;
        case 6:
            nomeMes = "julho";
            return nomeMes;
        case 7:
            nomeMes = "agosto";
            return nomeMes;
        case 8:
            nomeMes = "setembro";
            return nomeMes;
        case 9:
            nomeMes = "outubro";
            return nomeMes;
        case 10:
            nomeMes = "novembro";
            return nomeMes;
        case 11:
            nomeMes = "dezembro";
            return nomeMes;
        default:
            nomeMes = ""; //Retorna uma string vazia se o número não corresponder a um mês do ano.
            return nomeMes;
    }
}

//Função que adiciona um zero à esquerda se o número for menor que 10.
function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

//Função que formata a data e hora.
function criaData(data) {
    const diaSemana = data.getDay(); //Obtém o número do dia da semana.
    const numeroMes = data.getMonth(); //Obtém o número do mês.
    const nomeDia = getDiaSemanaTexto(diaSemana); //Obtém o nome do dia da semana.
    const nomeMes = getNomeMes(numeroMes); //Obtém o nome do mês.
    //Formata a data no formato desejado.
    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()} ` +
        `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
    );
}

h1.innerHTML = criaData(data); //Define o conteúdo do elemento HTML <h1> com a data formatada.
