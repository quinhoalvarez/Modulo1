// Carro

// a)

const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado === true) {
            console.log("Este carro está ligado");
        } else {
            this.ligado = true
            statusCarro(carro);
        }

    },
    desligar: function () {
        if (this.ligado === false) {
            console.log("Este carro está desligado");
        } else {
            this.ligado = false
            this.velocidade = 0
            statusCarro(carro);
        }
    },
    acelerar: function () {
        if (this.ligado === false) {
            console.log("Não é possível acelar um carro desligado");
        } else {
            this.velocidade = this.velocidade + 10;
            statusCarro(carro)
        }
    },
    desacelerar: function () {
        if (this.ligado === false) {
            console.log("Não é possível desacelar um carro desligado");
        } else {
            this.velocidade = this.velocidade - 10;
            statusCarro(carro)
        }
    }

}


function statusCarro(carro) {
    let carroLigado = carro.ligado ? "ligado" : "desligado";
    console.log(`Carro ${carroLigado}. Velocidade: ${carro.velocidade}.`)
}



// verificar pq esse if n está correto
//    if (carro.ligado === true) {
//        carro.ligado = "Carro Ligado";
//    } else {
//        carro.ligado = "Carro Desligado";
//    }
//
//    console.log(` ${carro.ligado}. Velocidade ${carro.velocidade}`);
//}


carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
