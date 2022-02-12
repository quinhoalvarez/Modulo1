// Compra com Desconto

// tipo de pagamento crédito, débito, dinheiro, cheque

const tipoDePagamento = "Dinheiro";
const precoProduto = 100;
const desconto1 = 0.05;
const desconto2 = 0.03;
const desconto3 = 0.10;


if (tipoDePagamento === "Crédito") {
    console.log(`Valor a ser pago é ${precoProduto * (1 - desconto1)}`);
} else if (tipoDePagamento === "Débito" || tipoDePagamento === "Dinheiro") {
    console.log(`Valor a ser pago é ${precoProduto * (1 - desconto3)}`);
} else if (tipoDePagamento === "Cheque") {
    console.log(`Valor a ser pago é ${precoProduto * (1 - desconto2)}`);
} else {
    console.log("Forma de pgto inválida");
}
