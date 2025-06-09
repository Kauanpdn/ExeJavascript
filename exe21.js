// EXERCÍCIO 21
// escreva um programa que 
// determina a estaçã do com base no mês


function estaçõesAno(n){
    if(n >= 1 && n<=3){
        console.log("Verão")
    }
    if(n >= 4 && n <= 6){
        console.log("Primavera")
    }
    if(n >= 7 && n <= 9){
        console.log("Inverno")
    }
    if(n >= 10 && n <= 12){
        console.log("Outono")
    }
}

estaçõesAno(1)
estaçõesAno(3)
estaçõesAno(4)
estaçõesAno(6)
estaçõesAno(7)
estaçõesAno(9)
estaçõesAno(10)
estaçõesAno(12)
estaçõesAno(2)
estaçõesAno(5)
estaçõesAno(8)
estaçõesAno(11)
