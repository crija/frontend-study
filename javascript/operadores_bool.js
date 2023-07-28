const numero = 10;

console.log(numero > 20)
console.log(numero <= 23)
console.log(numero >= 12)

console.log(numero == '10') // compara o conteúdo
console.log(numero === 10) // compara o tipo de dado
console.log(numero !== '10') // dica: usar sempre o === ou !== quando for comparar

// Conjunções Lógicas

// AND => &&

let idade = 18
let tenhoCNH = true

const possoDirigir = idade >= 18 && tenhoCNH === true

console.log('Posso dirigir?', possoDirigir)

// OR => ||

idade = 40

const votoFacultativo = idade < 18 || idade >= 70

// NOT => !

const estouFeliz = false

console.log(!estouFeliz)