{/*
    EXERCÍCIO 13
escreva um programa que calcular o IMC (índice de massa corporal)
de uma pessoa e imprime uma mensagem indicando se a pessoa está abaixo
do peso, com peso normal,com sobrepeso ou obesa
    
*/}


function calculadoraImc(peso,altura){

    let imc = peso / (altura * altura)

    if(imc < 18.5){
        console.log("Abaixo do peso")
    }else if(imc >= 18.5 && imc < 25){
        console.log("Normal")
    }else if(imc >= 25 && imc < 30){
        console.log("Sobrepeso")
    }else if(imc >= 30){
        console.log("Obesidade")
    }
}

calculadoraImc(60,1.7)
calculadoraImc(80,1.7)
calculadoraImc(90,1.7)
