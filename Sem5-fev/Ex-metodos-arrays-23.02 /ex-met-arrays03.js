// Grupos de carros

function carros(nomes, posicao) {

    const resultado = nomes.slice(posicao, posicao + 3);
    const resultado2 = resultado.join(" - ");

    console.log(resultado2);
}

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

carros(nomes, posicao);

