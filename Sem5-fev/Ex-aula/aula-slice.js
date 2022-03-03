// exercicio função slice

function texto(dados) {
    const dadosArrays = dados.split("")
    // 

    const removerPrimeiros = Math.round(dadosArrays.length * 0.1);
    const removerUltimos = Math.round(dadosArrays.length * 0.9);
    // for (i = 0; i < dadosArrays.length; i++) {
    //      if (i <= removerPrimeiros) {
    //        const resultado = dadosArrays.slice(1, 4)
    //    }
    //}

    const resultado = dadosArrays.slice(removerPrimeiros, removerUltimos)

    console.log(dadosArrays)
    // console.log(dadosArrays.length)
    console.log(resultado)
}

texto("eu quero s");