// Num parque de diversões existe uma Montanha Russa Muito Assustadora. 
// Por isso, nesta montanha russa não são permitidas pessoas:

//Menores de 12 anos
//Maiores de 65 anos
//Que possuam qualquer patologia cardíaca
//Menores de 150cm de altura


const idade = 18
const patologia = false
const altura = 150



if (idade < 12 || idade > 65 || patologia === true || altura < 150) {
    console.log("Acesso Negado")
} else if (idade < 18) {
    console.log("10 reais");
} else {
    console.log("20 reais");
}
