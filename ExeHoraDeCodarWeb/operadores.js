// Crie um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números.

const prompt = require("prompt-sync")();

let a = Number(prompt("Digite um número  "));
let b = Number(prompt("Digite outro número  "));

console.log(`A soma é  ${a+b}`);
console.log(`A subtração é  ${a-b}`);
console.log(`A multiplicação é  ${a*b}`);
console.log(`A divisão é  ${a/b}`);
