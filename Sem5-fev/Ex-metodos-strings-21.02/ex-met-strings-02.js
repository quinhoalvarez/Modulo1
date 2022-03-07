// Sistema para formatar números

const cpf = "22222123092";
let impressaoCPF = ""

if (cpf.length !== 11) {
    console.log("CPF Inválido")
} else {
    impressaoCPF = cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9)
    console.log(impressaoCPF)
}

// mesmo principio par ao CNPJ
