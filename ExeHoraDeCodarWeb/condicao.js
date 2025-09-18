//  Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.

const prompt = require("prompt-sync")();

let condicao = Number(prompt("Digite sua idade?  "));

if (condicao >= 18){
    return console.log("Você é maior de idade")
}else{
    return console.log("Você é menor de idade")
}