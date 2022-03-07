// Sistema de formatação de dados do formulário

let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";


// ajuste nome
let nomeArray = nome.split(" ")
let nomeAjustado = ""
let primeiraLetra = ""
for (let item of nomeArray) {
    primeiraLetra = item[0].toUpperCase()
    nomeAjustado = nomeAjustado + primeiraLetra + item.slice(1) + " "
}

// ajuste email


console.log(identificador.padStart(6, "0"));
console.log(nomeAjustado.trim())
console.log(email.trim())


