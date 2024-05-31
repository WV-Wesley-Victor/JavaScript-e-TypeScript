//O objeto Date em JavaScript é usado para lidar com datas e horas. Ele permite que você represente e manipule
//datas, bem como realizar várias operações relacionadas ao tempo.

const tresHoras = 60 * 60 * 3 * 1000; //Definindo a constante "tresHoras" com o valor de 3 horas em milissegundos
const umDia = 60 * 60 * 24 * 1000; //Definindo a constante "umDia" com o valor de 1 dia em milissegundos
const data = new Date(0 + tresHoras); //Criando uma nova data com base na época Unix (01/01/1970) mais 3 horas
console.log(data.toString());

const date = new Date(2019, 3, 20, 15, 14, 27, 999); //Criando uma data e hora específicas
console.log(date.toString());

const datas = new Date("2023-04-15 20:20:59"); //Criando uma data a partir de uma string
console.log("Dia", datas.getDate());
console.log("Mês", datas.getMonth() + 1); //Mês começa do zero
console.log("Ano", datas.getFullYear());
console.log("Hora", datas.getHours());
console.log("Min", datas.getMinutes());
console.log("Seg", datas.getSeconds());
console.log("ms", datas.getMilliseconds());
console.log("Dia da semana", datas.getDay()); //0 - Domingo, 6 - Sábado
console.log(datas.toString());

console.log(Date.now()); //Exibindo o valor atual do timestamp Unix em milissegundos

//Função que adiciona um zero à esquerda se o número for menor que 10
function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

//Função que formata uma data em um formato específico (DD/MM/AAAA HH:MM:SS)
function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

//Obtendo a data e hora atual e formatando-a no formato especificado
const ano = new Date();
const dataBrasil = formataData(ano);
console.log(dataBrasil);
