{/*
    EXERCÍCIO 12
escreva um programa que verifica a situação de um
estudante de com sua média final    
    

*/}

function verificandoMedia (n1,n2,n3,n4){
    
    let media = (n1 + n2 + n3 + n4) / 4

    if(media >= 7){
        console.log("Aprovado")
    }else if(media >= 5 && media <= 6.9){
        console.log("Recuperação")
    }else{
        console.log("Reprovado")
    }
}

verificandoMedia(7,7,7,6)
verificandoMedia(8,9,10,10)
verificandoMedia(3,2,1,3)