//Validação de arquivos


//const nomeArquivo = 'Foto da Familia.pdf';
//const nomeArquivo = 'Foto da Familia.png';
const nomeArquivo = 'Foto da Familia.jpeg';

let teste = nomeArquivo.indexOf(".")

let formatoArquivo = nomeArquivo.slice(teste + 1)

console.log(formatoArquivo)

if (formatoArquivo === "jpg" || formatoArquivo === "jpeg" || formatoArquivo === "gif" || formatoArquivo === "png") {
    console.log("Formato válido")
} else {
    console.log("Formato Inválido")
}