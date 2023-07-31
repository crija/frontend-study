let people = {nome: 'João', idade: 32, profissao: 'Desenvolvedor Web'}

console.log(people)
console.log('Meu nome é,', people.nome, 'tenho', people.idade, 'anos e sou', people.profissao)

console.clear()

// Como adicionar um par chave-valor?

people.altura = 1.90 // Adicionando chave-valor 
console.log(people) // Printando o objeto

console.clear()

// Como remover um par de chave-valor

delete people.altura // Deletar a chave-valor altura

console.log()

// Como percorrer?

for(let chave in people) {
    console.log(chave)
}