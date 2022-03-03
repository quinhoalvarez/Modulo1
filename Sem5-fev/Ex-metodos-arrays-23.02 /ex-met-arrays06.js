// Encontrar dono do pet

const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

// percorrer o array e achar o indice do pet X
// verificar, no mesmo indice, qual o nome

let donoPet = ""
//let nomePet = "Max"

function acharDonoPet(donoPet, nomePet) {
    for (let item of usuarios) {
        if (item.pets.includes(nomePet) === true) {
            donoPet = item.nome
            return (`O dono de ${nomePet} é ${donoPet}`)
            //console.log(item.nome)
        } else {
            return (`Que pena ${nomePet}, não encontramos seu dono`)
        }
    }

}

console.log(acharDonoPet(donoPet, "Max"))