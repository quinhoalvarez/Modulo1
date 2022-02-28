// Carrinho de um e-commerce

function addProdutoAoCarrinho(produto) {
    // verificar se o ID é o msm
    let resultadoBusca = false;

    for (let item of carrinho.produtos) {

        if (item.id === produto.id) {
            item.qtd += produto.qtd
            // este "produto" assume valor de "novaBermuda" ou qualquer outra valor que for colocado na chamada
            resultadoBusca = true
        }

    }

    if (resultadoBusca === false) {
        carrinho.produtos.push(produto);
    }
}


//let resutadoBusca = false
//console.log(resutadoBusca)

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {

        console.log(carrinho.nomeDoCliente);
        console.log(`Total de itens: ${this.calcularTotalDeItens()}`);
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar()).toFixed(2)}`);
    },

    addProduto: function (produto) {
        // verificar se o ID é o msm
        let resultadoBusca = false;

        for (let item of carrinho.produtos) {

            if (item.id === produto.id) {
                item.qtd += produto.qtd
                // este "produto" assume valor de "novaBermuda" ou qualquer outra valor que for colocado na chamada
                resultadoBusca = true
            }

        }

        if (resultadoBusca === false) {
            carrinho.produtos.push(produto);
        }
    },

    imprimirDetalhe: function () {
        console.log(carrinho.nomeDoCliente);

        for (let item of this.produtos) {
            console.log(`Item ${item.id} - ${item.nome} -  ${item.qtd} und - R$ ${((item.qtd * item.precoUnit) / 100).toFixed(2)}`)
        }

        console.log(`Total de itens: ${this.calcularTotalDeItens()}`);
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar()).toFixed(2)}`);
    },

    calcularTotalDeItens: function () {
        let somaQtd = 0;
        for (let item of carrinho.produtos) {
            somaQtd = somaQtd + item.qtd;
        }

        return somaQtd;
    },

    calcularTotalAPagar: function () {
        let totalApagar = 0
        for (let item of carrinho.produtos) {
            totalApagar = totalApagar + (item.precoUnit * item.qtd)
        }

        return totalApagar / 100;
    },

    calcularDesconto: function () {
        // desconto 1 = verificar qtd de itens. 
        // Se > 4 , tirar o mais barato

        let menorPrecoUnt = (carrinho.produtos[0].precoUnit) / 100;
        let desconto2 = 0;
        let descontoTotal = 0;

        if (this.calcularTotalDeItens() > 4) {
            for (let item of this.produtos) {
                if (item.precoUnit < menorPrecoUnt) {
                    menorPrecoUnt = (item.precoUnit / 100);
                    // return menorPrecoUnt;
                }
            }
        }
        // console.log(menorPrecoUnit)


        if (this.calcularTotalAPagar() > 100) {
            desconto2 = ((this.calcularTotalAPagar() * 0.10))
            // console.log(desconto2)
            // return desconto2;
        }

        if (menorPrecoUnt > desconto2) {
            descontoTotal = menorPrecoUnt;
        } else {
            descontoTotal = desconto2;
        }

        return (descontoTotal).toFixed(2);
        // console.log(descontoTotal.toFixed(2))
    }

}


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);

// carrinho.imprimirResumo();
carrinho.imprimirDetalhe();
console.log(carrinho.calcularDesconto());



