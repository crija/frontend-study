// Laço Númerico: For

const { question } = require("readline-sync")

// Acumulador

let acumulador = 0

acumulador = acumulador + 10 // Soma o valor do acumulador mais acumilador mais o número definido

acumulador += 10 // A mesma ideia da forma mostrada a cima, mas simplificada

acumulador++ // Soma o valor do acumulador mais uma unidade ex:  10 + 1

console.clear() // Não rodar o código a cima no terminal

// Estrutura for

for (let i = 0; i < 10; i++) {
    console.log('Repete:', i, 'vezes') 
}

console.clear()

for (let i = 12; i > 8; i--) {
    console.log('Repete:', i)
}

console.clear()

// calculando a média de um aluno

let nota
let soma = 0

for (let i = 1; i <= 3; i++) {
    nota = Number(question(`Informe a nota ${i} do aluno: `))

    soma += nota
}

console.log(`A média do aluno é ${soma / 3}.`)