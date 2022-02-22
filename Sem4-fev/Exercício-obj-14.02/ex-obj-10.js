// Compras online

// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

jose.carrinho.push(
    tv, qtd = 1,
    webcam, qtd = 1,
    mouse, qtd = 2
);

carlos.carrinho.push(
    notebook, qtd = 2
);

patricia.carrinho.push(
    teclado, qtd = 1,
    caboUsb, qtd = 2,
    carregador, qtd = 1,
    mouse, qtd = 1,
    monitor, qtd = 1
);

renato.carrinho.push(
    webcam, qtd = 5
);

roberto.carrinho.push(
    webcam, qtd = 1,
    caboUsb, qtd = 2,
    monitor, qtd = 1
)

console.log(jose, carlos, patricia, renato, roberto)
