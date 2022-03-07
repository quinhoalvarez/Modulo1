// Esconder número do cartão de crédito

const numeroCartao = '1111222233334444';

let novoNumero = numeroCartao.slice(0, 4) + "********" + numeroCartao.slice(12, 16)

console.log(novoNumero)