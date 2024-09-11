"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countA = countA;
function countA(text) {
    let count = 0;
    for (let letraA of text) {
        if (letraA.toLowerCase() === 'a') {
            count++;
        }
    }
    return `A letra 'a' ocorre ${count} vezes na string.`;
}
const texto = "Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.";
console.log(countA(texto));
