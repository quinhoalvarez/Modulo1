// Exercício resolvido data

function imprimirData(dia, mes, ano) {

    console.log(`${dia}/${mes}/${ano}`)
}




const dia = 01
const mes = 02
const ano = 1990

// ajustar numeros para colocar o 0 na frente
let diaString = dia.toString()
let diaAjustado = diaString.padStart(2, "0")

let mesString = mes.toString()
let mesAjustado = mesString.padStart(2, "0")

let anoString = ano.toString()




imprimirData(diaAjustado, mesAjustado, anoString)


