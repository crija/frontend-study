// > Operadores Aritiméticos

let primeiroNumero = 20
let segundoNumero = 2

const soma = primeiroNumero + segundoNumero

console.log('soma =', soma)
console.log('subtração =', primeiroNumero - segundoNumero)
console.log('multiplicação =', primeiroNumero * segundoNumero)
console.log('divisão =', primeiroNumero / segundoNumero)
console.log('raiz =', primeiroNumero ** segundoNumero)
console.log('Resto da divisão =', primeiroNumero % segundoNumero)

/* > Preferência de Operadores
    .ordem dos sinais
*/

console.log(3 + 5 * 3) // multiplicar e depois somar
console.log((3 + 5) * 3) // somar e depois multiplicar

// Bibliotéca Math

console.log('número de PI', Math.PI)
console.log('raiz quadrade de 16', Math.sqrt(16))