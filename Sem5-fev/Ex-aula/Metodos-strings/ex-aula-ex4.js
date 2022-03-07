// Exercício Resolvido 4

const nome = "jose messias junior dwadw e adawd"

let nomeArray = nome.split(" ")
let nomeAjustado = ""


function nomeCorreto(nomeCompleto) {
    for (let item of nomeArray) {
        nomeAjustado += item[0].toUpperCase() + item.slice(1) + " "
        // console.log(item[0].toUpperCase() + item.slice(1))
    }
    console.log(`${nomeAjustado.trim()}__`)
}

nomeCorreto(nome)
