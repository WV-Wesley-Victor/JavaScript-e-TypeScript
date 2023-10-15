//Em JavaScript, o switch e case são estruturas de controle usadas para tomar decisões com base no valor de uma
//expressão. Essa construção é frequentemente utilizada quando você tem várias condições a serem testadas em
//relação a uma única variável.

let numero = 3; //Define a variável 'numero' como 3.
//Inicia uma estrutura switch com base no valor da variável 'numero'.
switch (numero) {
    case 1: //Caso 'numero' seja igual a 1.
        console.log("Um é o número."); //Exibe "Um é o número." no console.
        break; //Encerra o bloco do caso 1.
    case 2: //Caso 'numero' seja igual a 2.
        console.log("Dois é o número."); //Exibe "Dois é o número." no console.
        break; //Encerra o bloco do caso 2.
    case 3: //Caso 'numero' seja igual a 3.
        console.log("Três é o número."); //Exibe "Três é o número." no console.
        break; //Encerra o bloco do caso 3.
    case 4: //Caso 'numero' seja igual a 4.
        console.log("Quatro é o número."); //Exibe "Quatro é o número." no console.
        break; //Encerra o bloco do caso 4.
    case 5: //Caso 'numero' seja igual a 5.
        console.log("Cinco é o número."); //Exibe "Cinco é o número." no console.
        break; //Encerra o bloco do caso 5.
    default: //Se 'numero' não corresponder a nenhum caso acima.
        console.log("Número fora do intervalo."); //Exibe "Número fora do intervalo." no console.
}

//Função para obter o nome do dia da semana com base em um número de 0 (Domingo) a 6 (Sábado).
function getDiaSemanaTexto(diaSemana1) {
    let diaSemanaTexto1;
    switch (diaSemana1) {
        case 0:
            diaSemanaTexto1 = "Domingo";
            return diaSemanaTexto1;
        case 1:
            diaSemanaTexto1 = "Segunda";
            return diaSemanaTexto1;
        case 2:
            diaSemanaTexto1 = "Terça";
            return diaSemanaTexto1;
        case 3:
            diaSemanaTexto1 = "Quarta";
            return diaSemanaTexto1;
        case 4:
            diaSemanaTexto1 = "Quinta";
            return diaSemanaTexto1;
        case 5:
            diaSemanaTexto1 = "Sexta";
            return diaSemanaTexto1;
        case 6:
            diaSemanaTexto1 = "Sábado";
            return diaSemanaTexto1;
        default:
            diaSemanaTexto1 = ""; //Retorna uma string vazia se o número não corresponder a um dia da semana.
            return diaSemanaTexto1;
    }
}
const data1 = new Date("1987-04-21 00:00:00"); //Cria um objeto Date representando a data "1987-04-21 00:00:00".
const diaSemana1 = data1.getDay(); //Obtém o número do dia da semana (0 a 6) para a data especificada.
const diaSemanaTexto1 = getDiaSemanaTexto(diaSemana1); //Chama a função para obter o nome do dia da semana.
console.log(diaSemana1, diaSemanaTexto1); //Exibe o número do dia da semana e o nome do dia da semana no console.

const data = new Date("1987-04-21 00:00:00"); //Cria um objeto Date representando a data "1987-04-21 00:00:00".
const diaSemana = data.getDay(); //Obtém o número do dia da semana (0 a 6) para a data especificada.
let diaSemanaTexto; //Variável para armazenar o nome do dia da semana.
//Verifica o valor de 'diaSemana' e atribui o nome correspondente.
if (diaSemana === 0) {
    diaSemanaTexto = "Domingo";
} else if (diaSemana === 1) {
    diaSemanaTexto = "Segunda";
} else if (diaSemana === 2) {
    diaSemanaTexto = "Terça";
} else if (diaSemana === 3) {
    diaSemanaTexto = "Quarta";
} else if (diaSemana === 4) {
    diaSemanaTexto = "Quinta";
} else if (diaSemana === 5) {
    diaSemanaTexto = "Sexta";
} else if (diaSemana === 6) {
    diaSemanaTexto = "Sábado";
} else {
    diaSemanaTexto = ""; //Retorna uma string vazia se o número não corresponder a um dia da semana válido.
}
console.log(diaSemana, diaSemanaTexto); //Exibe o número do dia da semana e o nome do dia da semana no console.
