"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFibonacci = isFibonacci;
function isFibonacci(num) {
    let a = 0, b = 1;
    const sequence = [a, b];
    while (b < num) {
        const nextValue = a + b;
        sequence.push(nextValue);
        a = b;
        b = nextValue;
    }
    const pertence = sequence.includes(num) ? `${num} pertence à sequência de Fibonacci.` : `${num} não pertence à sequência de Fibonacci.`;
    return `${pertence} Sequência: [${sequence.join(', ')}]`;
}
const numero = 21;
console.log(isFibonacci(numero));
