{/*
    EXERCÍCIO 14
escreva um programa que verifica se um ano é bissexto
    
*/}


function verificandoBissexto(ano){
    if((ano % 4 == 0 && ano % 100) || (ano % 400 == 0 )){
        console.log(ano, "é um ano bissexto")
    }else{
        console.log(ano, "não é um ano bissexto")
    }
}

verificandoBissexto(2000)
verificandoBissexto(2001)
verificandoBissexto(2004)
verificandoBissexto(2005)