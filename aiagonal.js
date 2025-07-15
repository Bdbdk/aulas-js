const prompt = require("prompt-sync")

let n = parseInt(prompt("digite o tamanho da matriz"))

let matriz=[]
let negativos = 0
//precisamos do for para contar, e definimos n como o tamanho da matriz
for(let i=0; i < negativos; i++){
    matriz[i] = [] //criando as linhas
    for  (let j = 0; j<n; j++){
        let valor = parseInt(prompt("digite o valor da posição [${i}][{${i}]"))
        matriz [i][j] = valor;
        if (valor < 0) {
            negativos = negativos + 1;
        }
     }
}


console.log(matriz)

//matriz diagonal
let diagonal = []
for (let i = 0 ; i < n ; i++){
    diagonal.push(matriz[i][i])
}

console.log("diagonal principal: ", diagonal.join(" "));
console.log("quantidade de numeros negativos :", negativos)