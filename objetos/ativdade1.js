const prompt = require("prompt-sync")()

// Criando o vetor
let pessoas = []

let N = parseInt(prompt("digite quantas pessoas queres cadastrar: "))


for(let i = 0; i < N; i ++){

  let nome = prompt("digite seu nome: ")
  let idade = parseInt(prompt("digite sua idade: "))
  let altura = parseFloat(prompt("digite sua altura: "))
  let peso = parseFloat(prompt("digite seu peso: "))


let pessoa = {
    nome: nome,
    altura: altura,
    idade: idade,
    peso: peso,


    calcularIMC: function(){
        return peso/(altura*altura)
    },

    maiorIdade: function(){
            if (this.idade > 18) {
                console.log(`pessoa maior de idade ${this.nome} e seu IMC ${this.calcularIMC().toFixed(2)}`)
                //"toFixed(2)" serve para dar os primeiros 2 digitos depois da virgula, por exemplo, 21,0830947034704, ao invez disso, seria 21,80
            }
        }
    }

    pessoas.push(pessoa)

}


for (let i = 0; i < pessoas.length; i++ ){
    pessoas[i].maiorIdade()
}