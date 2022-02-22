// Sistema de correção de provas



// Analisar resposta.

function corrigirProva(prova) {

    let questoesCorretas = 0;

    for (const questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            questoesCorretas++;
        }
    }

    let nota = (questoesCorretas * prova.valor / prova.questoes.length).toFixed(2);

    console.log(`O(a) aluno(a) ${prova.aluno} acertou ${questoesCorretas} questões e obteve nota ${nota} em ${prova.materia}.`);

}

const prova = {
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

console.log(corrigirProva(prova))