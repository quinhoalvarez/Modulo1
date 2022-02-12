// Extrato de Compra Online

const valorDoProduto = 10000;
const qtdDeParcelas = 12;
const valorParcela = valorDoProduto / qtdDeParcelas;
const qtdParcelasPagas = 4;


if (qtdParcelasPagas === qtdDeParcelas) {
    console.log("Compra quitada");
} else {
    console.log(`Faltam ${qtdDeParcelas - qtdParcelasPagas} parcelas de R$ ${valorParcela.toFixed(2)}`);
}


