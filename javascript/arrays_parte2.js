// Arrays - Parte 2 - Metodos de Arrays

const arr1 = [30, 45, 89, 4]
let arr2 = []

// Fatiamento: slice

console.log(arr1.slice(0, 2)) // Printar os elementros que estão na posição 1 e 2
console.log(arr1.slice(2)) // Printar totos os elementos a partir da posição 1

console.clear()

// Dicionando elementos: push | slice

console.log('Antes de adicionar:', arr2) // Printar o arry vazio

arr2.push(10, 20, 30) // Adicionando itens no array
arr2.push(40) // Por padrão irá adicionar o elemento na ultima posição

console.log('Depois de adicionar:', arr2) // Printando o arry com os elementros adicionados

arr2.unshift(0) // Adicionar o elemento na primeira posição
console.log('Depois de adicionar com unshift:', arr2)

console.clear()

// Removendo elementros: pop | shift

console.log('Antes de remover com pop:', arr2)

arr2.pop() // Remove o último elemento do array

console.log('Depois de remover com pop:', arr2)

console.log('Antes de remover com shift:', arr2)

arr2.shift() // Remover o primeiro elemento do array

console.log('Depois de remover com shift:', arr2)

console.clear()

// Concatenando arrays: concat

console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2)) // Concatenando os dois arrays

console.clear()

// Buscando elementos: indexOf | lantIndexOf

console.log(arr1)

let indiceElemento89 = arr1.indexOf(89) // Guardar em uma variável o indice (posição) do elemento escolhido (por padrão, se tiver elemento repetido, vai guardar o primeiro que aparecer)

console.log(indiceElemento89)

let arr3 = [1, 5, 4, 5, 0]

console.log(arr3.lastIndexOf(5)) // Imprimir o indice do último elemento encontrado no arr3

console.clear()

// Descobrindo a existência de um elemento: include 

console.log(arr1)

console.log(arr1.includes(3)) // Retornar true ou false dependendo se existe o elemento no arr1 ou não

console.clear()

// Invertendo arrays: reverse

console.log('arr1 normal:', arr1)

console.log('Invertido:', arr1.reverse()) // Reverte o arr1