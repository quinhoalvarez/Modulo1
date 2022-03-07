// Gerador de Nickname


//O nickname deve conter, no máximo, 13 caracteres;
//Deve começar sempre com "@";
//Não deve existir espaços em branco;
//São permitidos apenas caracteres minúsculos.

//const nome = 'Guido Cerqueira';
const nome = "Marco "
let nickname = "";
let nickNameFinal = ""

for (let item of nome) {
    if (item !== " ") {
        nickname = nickname + item
    }
    if (nickname.length >= 12) {
        nickname = nickname.slice(0, 12)
    }
    nickname = nickname.toLowerCase()
}

if (nickname.length === 12) {
    nickname = nickname.padStart(13, "@")
} else {
    nickname = nickname.padStart(nickname.length + 1, "@")
}


console.log(nickname)
