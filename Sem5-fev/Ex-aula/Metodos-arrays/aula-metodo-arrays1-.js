// Exercício Resolvido 

function teste(strings) {
    const stringQuebrado = strings.split("")
    stringQuebrado.reverse()


    // let textoInvertido = "";
    //for (let letra of stringQuebrado) {
    //    textoInvertido += letra
    // }

    let textoInvertido = stringQuebrado.join("")
    console.log(textoInvertido)
}

teste("Teste arrays");