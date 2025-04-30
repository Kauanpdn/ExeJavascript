{/*
    EXERCÍCIO 19 
escreva um programa que verifica se um número está
dentro de um deteminado intervalo

*/}


function intervalo(n,limiteInferior,limiteSuperior){

    if(n > limiteInferior && n < limiteSuperior){
        console.log("O número está dentro de um intervalo")
    }else{
        console.log("Não está dentro de um intervalo")
    }
}

intervalo(10,9,11)
intervalo(10,11,12)


//concluido