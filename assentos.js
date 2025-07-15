let mapaAssentos = [
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,1,0,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0]
]

//0 disponivel
//1 ocupado

//verificar disponibilidade

if (mapaAssentos[1][2]===1){
    console.log("assento ocupado")
}else{
    console.log("assento livre")
}