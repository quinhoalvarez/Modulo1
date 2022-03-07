// URL amigável

const texto = "Aprenda programar do zero na Cubos Academy";

let formatacao = texto.split(" ");
let textoAmigavel = ""

for (let item of formatacao) {
    textoAmigavel = (textoAmigavel + item + "-").toLowerCase()
}

console.log(textoAmigavel.slice(0, texto.length))

