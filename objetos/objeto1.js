const prompt = require("prompt-sync")

let nome = "fabio"
let idade = 15


function matricular (nome, idade) {
    console.log(`aluno ${nome} de ${idade} de idade realizou a matricula`)
}

matricular(nome, idade)


//usando objetos


let aluno = {
    nome: "fabio",
    idade: 15,
    matricular: function (){
        console.log(`aluno ${nome} de ${idade} de idade realizou a matricula`)
    }
}

console.log(aluno.nome)
console.log(aluno.idade)
console.log(aluno.matricular)