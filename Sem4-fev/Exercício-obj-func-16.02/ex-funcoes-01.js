// Sistema de correção de provas

let pontuacao = 0
let nota = 0

function corrigirProva(prova) {
    // Pelo que entendi a função "corrigirProva" joga no parâmetro (prova) a variável, neste caso, 
    // "provaaa" - devido a chamada "corrigirProva(provaaa)"

    for (let item of prova.questoes) {
        if (item.resposta === item.correta) {
            pontuacao = pontuacao + 1;
            nota = nota + (prova.valor / prova.questoes.length);
        }
    }
    console.log(`O aluno ${prova.aluno} acertou ${pontuacao} questões e obteve nota ${nota}`);

}



const provaaa = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}

corrigirProva(provaaa)
