// Valor da parcela do Sucesso Compartilhado

// Aluno tem uma renda mensal de 3000 - 18% do valor para pgto
// Tempo até 60 meses
// Paga até 18000


const rendaMensal = 3000
const valorDaParcela = rendaMensal * 0.18
const tempoContratoMeses = 12
const somaValorPago = valorDaParcela * tempoContratoMeses


if (tempoContratoMeses > 60) {
    console.log("Tempo de contrato já expirou");
} else if (somaValorPago > 18000) {
    console.log("O contrato já foi quitado");
} else if (rendaMensal >= 2000) {
    console.log(`O valor da parcela é de R$ ${valorDaParcela.toFixed(2)}`);
} else {
    console.log("Não tem renda suficiente pra pagar")
}

