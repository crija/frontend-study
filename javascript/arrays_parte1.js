// Arrays

// - Como criar um array?
let arr = ['Carla', 18, true] // criando um arrey e pondo informações dentro, separando cada informação com uma virgula

console.log(arr) // printando o arr


// - Como acessar os elementos no array?
console.log('Primeiro elemento: ', arr[0]) // Acessando a informação que está na posição 0


// - Como obter o tamanho do array?
console.log('Temanho do array', arr.length) // Para saber a quantidade de elementos que estão guardados dentro de um array


// - Percorrendo array:
console.clear() // Para ignorar os códigos a cima

for (let i = 0; i < arr.length; i++) { // Printar cada elemento do arr
    console.log(arr[i]) 
}

console.clear()


for (let elemento of arr) { // Outra forma de imprimir cada elemento do arr. Ira passar por cada ítem e ir printando. (elemento é o nome de variável)
    console.log(elemento)
}

console.clear()


for (let indice in arr) { // irá printar o indice de cada elementro. (indice é uma variável)
    console.log(indice)
}

censole.clear()


for (let indice in arr) { 
    console.log(indice, arr[indice]) // Printar cada indice e cada elemento que estão no arr
}


