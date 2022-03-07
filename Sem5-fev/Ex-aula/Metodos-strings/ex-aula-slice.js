// Exercício - Slice

const cidade = "Salvador-BA";

const penultimoIndex = cidade.lastIndexOf(-2)
let estado = cidade.slice(penultimoIndex - 1)
//const corte = cidade.indexOf("-");

//let estado = cidade.slice(corte + 1)

console.log(estado)
//console.log(cidade.slice(corte, corte + 1))