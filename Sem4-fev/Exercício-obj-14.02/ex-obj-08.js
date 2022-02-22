// Meus pets

const usuarios = [
    {
        nome: "João",
        pets: [],
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

// percorrer array
// identificar, em cada objeto, qtd pets
// entrar com o if


for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].pets.length > 1) {
        usuarios[i].frase = `Sou ${usuarios[i].nome} e tenho ${usuarios[i].pets.length} pets`
    } else if (usuarios[i].pets.length === 1) {
        usuarios[i].frase = `Sou ${usuarios[i].nome} e tenho ${usuarios[i].pets.length} pet`
    } else {
        usuarios[i].frase = `Sou ${usuarios[i].nome} e tenho ${usuarios[i].pets.length} pets`
    }
}

console.log(usuarios);
