//O operador ternário ? : é uma forma concisa de expressar uma condição.
//Ele avalia a expressão à esquerda do '?' e, se for verdadeira, retorna o valor à esquerda dos ':'.
//Se a expressão for falsa, retorna o valor à direita dos ':'.

const pontuacaoUsuario = 1000; //Definir a pontuação do usuário como 1000.

//Verificar se a pontuação do usuário é maior ou igual a 1000 e exibir uma mensagem apropriada.
if (pontuacaoUsuario >= 1000) {
    console.log("Usuário VIP");
} else {
    console.log("Usuário normal");
}

//Usar operador ternário para determinar o nível do usuário com base na pontuação e exibir o resultado.
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";
console.log(nivelUsuario);

//Definir a cor do usuário como nula, mas se for nula, atribuir "Preto" como cor padrão.
const corUsuario = null;
const corPadrao = corUsuario || "Preto";
