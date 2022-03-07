// Validação de e-mail

//Sempre tem que ter @
//Sempre tem que ter pelo menos um .
//Nunca pode começar com .
//Nunca pode terminar com .

const email = "jose@cubos.academy";
const email1 = "jose@cubos.academy.br";
const email2 = "jose.messias@cubos.academy"
const email3 = "jose.messias@cubos.io"
const email4 = "jose@cubos"
const email5 = "jose.messias@cubos"
const email6 = "jose.messias@."
const email7 = "jose.@cubos"
const email8 = ".@"
const email9 = "@."
const email10 = "jose.messias@cubos."
const email11 = ".messias@cubos."
const email12 = ".messias@cubos"






function validacaoEmail(email) {
    // validar 3
    let validacao1 = email.includes("@") && email.includes(".");
    let validacao2 = !email[0].includes(".");
    let validacao3 = ""

    let emailLength = email.slice(- 1)

    if (emailLength != ".") {
        validacao3 = true
    } else {
        validacao3 = false
    }

    if (validacao1 && validacao2 && validacao3 === true) {
        console.log("Email válido")
    } else {
        console.log("Email inválido")
    }
    // console.log(validacao1, validacao2, validacao3)
}


validacaoEmail(email)
validacaoEmail(email1)
validacaoEmail(email2)
validacaoEmail(email3)
validacaoEmail(email4)
validacaoEmail(email5)
validacaoEmail(email6)
validacaoEmail(email7)
validacaoEmail(email8)
validacaoEmail(email9)
validacaoEmail(email10)
validacaoEmail(email11)
validacaoEmail(email12)






