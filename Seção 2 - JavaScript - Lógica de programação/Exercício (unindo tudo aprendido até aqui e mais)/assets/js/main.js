const form = document.querySelector("#formulario"); //Seleciona o formulário do HTML.

//Define um ouvinte de evento para o envio do formulário.
form.addEventListener("submit", function (e) {
    e.preventDefault(); //Impede o comportamento padrão do envio do formulário (recarregar a página).
    const inputPeso = e.target.querySelector("#peso"); //Obtém o elemento de entrada de peso.
    const inputAltura = e.target.querySelector("#altura"); //Obtém o elemento de entrada de altura.
    const peso = Number(inputPeso.value); //Converte o valor do campo de peso em número.
    const altura = Number(inputAltura.value); //Converte o valor do campo de altura em número.
    //Verifica se o peso é inválido.
    if (!peso) {
        setResultado("Peso inválido", false); //Exibe uma mensagem de erro no resultado.
        return; //Sai da função.
    }
    //Verifica se a altura é inválida.
    if (!altura) {
        setResultado("Altura inválida", false); //Exibe uma mensagem de erro no resultado.
        return; //Sai da função.
    }
    const imc = getIMC(peso, altura); //Calcula o IMC com base no peso e na altura fornecidos.
    const nivelImc = getNivelImc(imc); //Determina o nível do IMC.
    const msg = `Seu IMC é ${imc} (${nivelImc}).`; //Cria uma mensagem com o resultado do IMC.
    setResultado(msg, true); //Exibe a mensagem no HTML.
});

//Determina o nível do IMC.
function getNivelImc(imc) {
    const nivel = [
        //Array de classificações do IMC.
        "Abaixo do peso",
        "Peso normal",
        "Sobrepeso",
        "Obesidade grau 1",
        "Obesidade grau 2",
        "Obesidade grau 3",
    ];
    //Determina o nível do IMC com base no valor de 'imc' e retorna a classificação apropriada.
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getIMC(peso, altura) {
    const imc = peso / altura ** 2; //Calcula o IMC com base no peso e altura fornecidos.
    return imc.toFixed(2); //Retorna o valor do IMC com duas casas decimais.
}

function criaP() {
    const p = document.createElement("p"); //Cria um elemento <p> no DOM.
    return p; //Retorna o elemento <p> recém-criado.
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado"); //Seleciona o elemento com o ID "resultado" no DOM.
    resultado.innerHTML = ""; //Limpa qualquer conteúdo anterior dentro do elemento.
    const p = criaP(); //Cria um novo elemento <p>.
    //Verifica se o resultado é válido.
    if (isValid) {
        p.classList.add("paragrafo-resultado"); //Adiciona a classe "paragrafo-resultado" ao elemento <p>.
    } else {
        p.classList.add("bad"); //Adiciona a classe "bad" ao elemento <p>.
    }
    p.innerHTML = msg; //Define o conteúdo do elemento <p> como a mensagem fornecida.
    resultado.appendChild(p); //Adiciona o elemento <p> ao elemento com o ID "resultado" no DOM.
}
