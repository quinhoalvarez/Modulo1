// Exercício replace

const valor = "1,350,000";

let valorNovo = ""


for (let item of valor) {
    valorNovo += item.replace(",", ".")
}
console.log(valorNovo)


//console.log(valorNovo)


