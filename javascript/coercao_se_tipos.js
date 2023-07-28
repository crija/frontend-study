// Coerção (converção) de tipos

// Coerção explícita (manual)

const numero = 10

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)

console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('045940'))
console.log(parseFloat('048.47'))
console.log(parseInt('040.858'))
console.log(Boolean(1))

// converção Implícita (Automática)

console.log('10' + 1) // Quando é necessario fazer uma soma é necessario converter o número para interiro para não acontecer uma concatenação, mas nas demais operações não é preciso fazer a conversão.
console.log('10' - 1)
console.log('10' - 1)
console.log(10 * '3')
console.log(10 - 'sapo') // Vai tentar subtrair e vai retornar NaN.

// 1-exercícios:

let n = 1 + '1'
n = n - 1
console.log(n)

// 2-exercício:

console.log(2 + 3 + 4 + '5')

// 3-exercício:

console.log('5' + 2 + 3 + 4)

// 4-exercício:

console.log('10' - '4' - '3' - '2' + '5')


