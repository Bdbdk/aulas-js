const prompt = require("prompt-sync")

// Criando o vetor
let pessoas = []

let N = parseInt(prompt("digite quantas pessoas queres cadastrar: "))


for(let i = 0; i < N; i ++){

  let nome = prompt("digite seu nome")
  let idade = parseInt(prompt("digite sua idade"))
  let altura = parseFloat(prompt("digite sua altura"))
  let peso = parseFloat(prompt("digite seu peso"))


let pessoa = {
    nome: nome,
    altura: altura,
    idade: idade,
    peso: peso,


    calcularIMC: function(){
        peso/(altura*altura)
    },

    maiorIdade: function(){
            if (this.idade > 18) {
                console.log(`pessoa maior de idade ${this.nome} e seu IMC ${this.calcularIMC}`)
            }
        }
    }

    pessoas.push(pessoa)

}

console.log(`nome das pessoas ${this.nome}`)
console.log(`altura das pessoas ${this.altura}`)
console.log(`idade das pessoas ${this.idade}`)
console.log(`peso das pessoas ${this.peso}`)
console.log(this.maiorIdade)