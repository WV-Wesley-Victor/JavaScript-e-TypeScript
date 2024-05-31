/*
Operadores Lógicos
&& -> AND (E): Ele retorna verdadeiro somente quando ambas as expressões à esquerda e à direita são verdadeiras.
|| -> OR (OU): Ele retorna verdadeiro se pelo menos uma das expressões à esquerda ou à direita for verdadeira.
! -> NOT (NÃO): Ele inverte o valor da expressão, ou seja, se a expressão for verdadeira, ele a torna falsa.

Valores avaliados como falsos em JavaScript:
1. false: O valor booleano "false" representa a ausência de verdade.
2. 0: O número zero é considerado falso, pois não representa um valor verdadeiro.
3. '', "" e ``: Strings vazias são avaliadas como falsas, indicando ausência de conteúdo.
4. null / undefined: Ambos são valores que representam a ausência de um valor ou de uma referência.
5. NaN: "NaN" (Not-a-Number) é um valor especial que representa a impossibilidade de realizar operações matemáticas válidas.
*/
console.log("Wesley" && "Maria"); //Retorna "Maria" porque o operador "&&" retorna o último valor verdadeiro.
console.log(false && "Maria"); //Retorna false porque o operador "&&" retorna o primeiro valor falso encontrado.

//Define a função falaOi que retorna "Oi".
function falaOi() {
    return "Oi";
}
let vaiExecutar = "Wesley"; //Declara a variável vaiExecutar com o valor "Wesley" (true).
console.log(vaiExecutar && falaOi()); //Verifica vaiExecutar e chama falaOi se for verdadeiro.

console.log(0 || null || "Wesley" || true); //"Wesley" é o primeiro valor true, então será impresso no console.

const corUsuario = "vermelho"; //Define a cor do usuário como "vermelho".
//Se a cor do usuário for true, corPadrao será igual à cor do usuário. Caso contrário, corPadrao será "preto".
const corPadrao = corUsuario || "preto";
console.log(corPadrao); //Exibe a corPadrao no console. (vermelho)

const A = 0;
const B = null;
const C = false;
const D = NaN;
console.log(A || B || C || D); //Todos são falsos, então D é o ultimo falso na sequência e é impresso no console.
