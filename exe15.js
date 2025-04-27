{/**
    EXERCÍCIO 15
escreva um programa que verifica se uma palavra 
é um palíndromo    
    
*/}

function varificandoPalidromo(palavra){

    let palavraInvertida = palavra.split("").reverse().join("")

    if(palavra == palavraInvertida){
        console.log(palavra, "é um palídromo")
    }else{
        console.log(palavra, "não pe um palídromo")
    }
}

varificandoPalidromo("arara")
varificandoPalidromo("gato")