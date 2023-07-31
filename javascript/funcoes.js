// Funções

// Definição da função

function saudacao() {
    console.log('Olá, mundo!')
}

saudacao()

console.clear()

// Como enviar parâmetros para as funções?

function saudacao(nome, curso='Python') { // Criando uma função com dois parâmetros
    console.log(`Olá, ${nome} ao curso de ${curso}`)
}

saudacao('Carla', 'JavaScript')

console.clear()

// Retorno da função

function soma(n1, n2) {
    return n1 + n2 // Retorna a soma dos dois números
}

const resultado = soma(15, 20) // Definimos uma constante para guardar a soma 

console.log(`A média dos números é ${resultado / 2}`) // Usamos a soma e em seguida conseguimos printar a média.
