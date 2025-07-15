let tamanhoMatriz = parseInt(prompt("digite a quantidade de alunos que você deseja cadastrar: "))

let boletim = []

for (let i = 0; i < tamanhoMatriz; i++) {

    let aluno = []

    let nome = prompt(`digite seu nome [${i}]`)
    let nota1 = parseInt(prompt(`digite sua primeira nota[${i}]`))
    let nota2 = parseInt(prompt(`digite a sua segunda nota [${i}]`))

    let media = (nota1 + nota2) / 2

    let situacao = ""

    if (media >= 7) {
        situacao = "aprovado"
    } else {
        situacao = "reprovado"
    }

    aluno.push(nome, nota1, nota2, media, situacao)
    boletim.push(aluno)
}

console.log("boletim do aluno: ", boletim)







