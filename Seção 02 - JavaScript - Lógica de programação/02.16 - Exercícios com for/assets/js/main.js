const elementos = [
    { tag: "p", texto: "Qualquer texto que você quiser." },
    { tag: "div", texto: "Frase 2." },
    { tag: "section", texto: "Frase 3." },
    { tag: "footer", texto: "Frase 4." },
];
const container = document.querySelector(".container"); //Seleciona o elemento HTML com a classe "container".
const div = document.createElement("div"); //Cria um novo elemento <div>.
//Loop for que itera sobre o array de objetos 'elementos'.
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]; //Desestrutura o objeto para obter a tag e o texto.
    let tagCriada = document.createElement(tag); //Cria um novo elemento HTML com a tag obtida do objeto.
    tagCriada.innerHTML = texto; //Define o conteúdo do elemento como o texto obtido do objeto.
    div.appendChild(tagCriada); //Adiciona o elemento criado à div.
}
container.appendChild(div); //Adiciona a div, que tem os elementos criados, ao elemento com classe "container".
