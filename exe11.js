{/*
    EXERCÍCIO 11 
escreva um programa que verifica se uma pessoa pode
votar com base na idade    

*/}


function validacaoVoto(idade){
    if(idade >= 18){
        console.log("O cidadão tem idade para votar")
    }else{
        console.log("O cidadão não tem idade para votar")
    }
}

validacaoVoto(18)
validacaoVoto(55)
validacaoVoto(16)