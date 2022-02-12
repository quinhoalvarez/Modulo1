//Transformar nota em conceito

// 9 a 10 = A // 8 a 8.9 = B // 6 a 7.9 = C // 4 a 5.9 = D // < 4 = E

const nota = 9

if (nota < 4) {
    console.log("E");
} else if (nota < 6) {
    console.log("D");
} else if (nota < 8) {
    console.log("C");
} else if (nota < 9) {
    console.log("B");
} else {
    console.log("A");
}

