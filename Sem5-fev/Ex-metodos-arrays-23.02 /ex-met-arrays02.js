// Divisao do Grupo


function divisaoGrupo(nomes, tamanhoDoGrupo) {

    const resultado1 = nomes.slice(0, tamanhoDoGrupo);
    const resultado2 = nomes.slice(tamanhoDoGrupo, nomes.length);

    console.log(`Grupo1: ${resultado1}`);
    console.log(`Grupo2: ${resultado2}`);
    //console.log(nomes)

}


const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

divisaoGrupo(nomes, tamanhoDoGrupo)