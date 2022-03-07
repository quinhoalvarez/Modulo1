// Remover pontuação

const cpf = "011.022.033-44";

let impressaoCPF = "";

impressaoCPF = cpf.slice(0, 3) + cpf.slice(4, 7) + cpf.slice(8, 11) + cpf.slice(12, 14)

console.log(impressaoCPF)

