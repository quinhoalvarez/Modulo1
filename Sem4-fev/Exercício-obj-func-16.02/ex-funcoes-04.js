// Sistema de transações bancárias

const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        contaBancaria.saldo += transacao.valor;
        contaBancaria.historicos.push(transacao);

        return (`${transacao.tipo} de R$ ${transacao.valor / 100} realizado para o cliente: ${contaBancaria.nome}`)
    },
    sacar: function (valor) {
        // if (transacaoSaque.valor <= this.saldo)

        if (valor <= this.saldo) {
            contaBancaria.saldo -= transacaoSaque.valor;
            contaBancaria.historicos.push(transacaoSaque);
            return (`${transacaoSaque.tipo} de R$ ${transacaoSaque.valor / 100} realizado com sucesso`)
        } else {
            return ("Saldo insuficiente para o saque");
        }

    },
    extrato: function () {
        let mensagemExtrato = ""
        mensagemExtrato = mensagemExtrato + `Extrato de ${this.nome} - saldo R$ ${this.saldo / 100}`
        // console.log(`Extrato de ${this.nome} - saldo R$ ${this.saldo / 100}`);
        mensagemExtrato += "\n"
        mensagemExtrato = mensagemExtrato + `Histórico:`

        // console.log(`Histórico:`);
        for (let item of this.historicos) {
            // console.log(this.historicos)
            mensagemExtrato += "\n"
            mensagemExtrato = mensagemExtrato + `${item.tipo} de ${item.valor / 100}`
        }
        return mensagemExtrato
    }


}


const transacao = {
    tipo: "Depósito",
    valor: 10000
}

const transacaoSaque = {
    tipo: "Saque",
    valor: 5000 //aqui será o valor informado no argumento do método sacar
}


//contaBancaria.depositar(10000)

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());