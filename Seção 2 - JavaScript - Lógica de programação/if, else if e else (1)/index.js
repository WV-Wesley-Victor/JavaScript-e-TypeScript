//'if' é usado para testar uma condição e executar um bloco de código se essa condição for verdadeira.
//'else if' é usado para testar uma nova condição se a condição do 'if' for falsa, e executar um bloco de código associado se essa nova condição for verdadeira.
//'else' é usado para especificar o que acontece quando todas as condições anteriores são falsas.

/*
  Este programa verifica a hora do dia e exibe uma saudação de acordo com o intervalo de horas:
  - Se a hora estiver entre 0 e 11, será exibido "Bom dia".
  - Se estiver entre 12 e 17, será exibido "Boa tarde".
  - Se estiver entre 18 e 23, será exibido "Boa noite".
*/
const hora = 19; //Defina a hora que deseja verificar.
if (hora >= 0 && hora <= 11) {
    console.log("Bom dia"); //Se a hora estiver entre 0 e 11, imprime "Bom dia".
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde"); //Se a hora estiver entre 12 e 17, imprime "Boa tarde".
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite"); //Se a hora estiver entre 18 e 23, imprime "Boa noite".
} else {
    console.log("Olá"); //Se nenhuma das condições anteriores for verdadeira, imprime "Olá".
}

const tenhoGrana = false; //Define a variável 'tenhoGrana' como falsa.
if (tenhoGrana) {
    console.log("Vou sair de casa"); //Se 'tenhoGrana' for verdadeira, imprime "Vou sair de casa".
} else {
    console.log("Não vou sair de casa"); //Se 'tenhoGrana' for falsa, imprime "Não vou sair de casa".
}
