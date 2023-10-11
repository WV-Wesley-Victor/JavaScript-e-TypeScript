//O tipo string em JavaScript é um tipo primitivo que representa uma sequência de caracteres.
//01234567 = Um texto
let umaString = "Um texto";
//0123456789 = Um "texto"
let umaString1 = 'Um "texto"';

//umaString
console.log(umaString.charAt(3));
console.log(umaString1[4]);
console.log(umaString.indexOf("texto"));
console.log(umaString.lastIndexOf("x"));
console.log(umaString.search(/x/));
console.log(umaString.replace("Um", "Outro"));
console.log(umaString.length);
console.log(umaString.slice(3, 8));
console.log(umaString.substring(umaString.length - 5));
console.log(umaString.split(" "));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());

//umaString1
console.log(umaString1);
console.log(umaString1.concat(" em um lindo dia."));
console.log(umaString1 + " em um lindo dia.");
console.log(`${umaString1} em um lindo dia.`);
