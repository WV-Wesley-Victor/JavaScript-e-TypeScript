const numero = Number(prompt("Digite um número:"));

//document.getElementById();
const numeroTitulo = document.getElementById("numero-titulo"); //Pega o elemento pelo o ID
const texto = document.getElementById("texto"); //Pega o elemento pelo o ID

numeroTitulo.innerHTML = numero;
texto.innerHTML = "";
texto.innerHTML += `<p>Seu número + 2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;
