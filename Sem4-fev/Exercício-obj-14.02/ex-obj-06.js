// Separando jovens de adulto


let usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

let jovens = [];
let adultos = [];

for (let usuario of usuarios) {
    if (usuario.idade < 18) {
        jovens.push(usuario.nome);
    } else {
        adultos.push(usuario.nome);
    }
}

console.log(jovens);
console.log(adultos);

