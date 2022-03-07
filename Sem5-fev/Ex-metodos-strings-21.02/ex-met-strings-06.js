// Formatar número de celular

const celular = 7199918888;
//const celular = 99918888;

let celularString = celular.toString()
let novoNumero = ""

if (celularString.length >= 9) {
    novoNumero = "(" + celularString.slice(0, 2) + ")" + " " + "9" + " " + celularString.slice(2, 6) + "-" + celularString.slice(6)
} else {
    novoNumero = "9" + " " + celularString.slice(0, 4) + "-" + celularString.slice(4)
}


console.log(novoNumero)