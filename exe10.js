{/*
    EXERCÍCIO 10
escreva um programa que recebe duas notas de um aluno
calcule a média e imprime se o aluno fou aprovado ou reprovado    
considerando que a média para aprovação é 7
*/}

function calmedia (nota1,nota2){

    let media = nota1 + nota2 / 2

    if(media >= 7){
        console.log('Aluno foi aprovado')
    }else{
        console.log('Aluno reprovado')
    }
}

calmedia(9,8)
calmedia(4,10)
calmedia(2,8)