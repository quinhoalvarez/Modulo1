const temIngresso = true;
const censura = 16;
const idade = 17;

// Para entrar, temos que ter 02 condições verdadeiras
// temIngreso = true e censura >= 16

if (temIngresso === true) {
    if (idade >= censura) {
        console.log("Pode entrar no filme");
    } else {
        console.log("Não pode entrar no filme por falta de idade");
    }
} else {
    console.log("Como vc quer entrar no filme se n tem ingresso, jovem?!");
}

