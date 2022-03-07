// saber se um email é válido

// tem que ter pelo menos 01 @
// tem q ter pelo menos um . dps do @


// const email = "marcoalvarez@gmail.com";

let verificacao1 = ""
let indice = 0
let verificacao2 = ""

function verificacao(email) {
    verificacao1 = email.includes("@")
    // console.log(verificacao1);
    indice = email.indexOf("@");
    // console.log(indice)
    verificacao2 = email.includes(".", indice)
    //console.log(verificacao2)

    if (verificacao1 && verificacao2 === true) {
        console.log("Este e-mail é válido, jovem")
    } else {
        console.log("Este e-mail não é válido")
    }

}

verificacao("marcoflavioalvarez@gmail.com")



