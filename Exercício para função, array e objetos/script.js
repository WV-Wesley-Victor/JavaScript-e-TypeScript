//Definindo uma função chamada meuEscopo
function meuEscopo() {
    const form = document.querySelector(".form"); //Selecionando o elemento HTML com a classe "form"
    const resultado = document.querySelector(".resultado"); //Selecionando o elemento HTML com a classe "resultado"
    const pessoas = []; //Criando um array vazio chamado "pessoas" para armazenar informações de pessoas
    //Definindo uma função chamada "recebeEventoForm" para lidar com o envio do formulário
    function recebeEventoForm(evento) {
        evento.preventDefault(); //Impedindo o comportamento padrão do envio do formulário, que é recarregar a página
        const nome = form.querySelector(".nome"); //Selecionando os campos de entrada de dados no formulário
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");
        //Armazenando os valores dos campos no array "pessoas"
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });
        console.log(pessoas); //Registrando o array "pessoas" no console
        //Atualizando o conteúdo do elemento HTML com a classe "resultado" para exibir os valores submetidos
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }
    //Adicionando um ouvinte de evento "submit" ao formulário para chamar a função "recebeEventoForm" quando o formulário for submetido
    form.addEventListener("submit", recebeEventoForm);
}
meuEscopo(); // Chamando a função "meuEscopo" para executar o código dentro dela
