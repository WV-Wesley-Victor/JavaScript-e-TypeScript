//O objeto Date em JavaScript é usado para lidar com datas e horas. Ele permite que você represente e manipule
//datas, bem como realizar várias operações relacionadas ao tempo.

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras); //01/01/1970 Timestamp unix ou época unix
console.log(data.toString());
