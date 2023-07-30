// Laços Condicionais

// No Node, que é a ferramenta que estamos usando, não existe uma função para ler dados do usuário. Por isso vamos importar a bibliotéca readline-sync

const input = require('readline-sync') // require para fazer a importação da bibliotéca

const numero_sorteado = 4

let numero = Number(input.question('Digite um número qualquer: ')) // input para a entrada de dado do usuário - escolhemos let porque o usuário vai precisar escolher outro número caso ele tenha errado. let == variável.


while (numero !== numero_sorteado){
    console.log('Você errou, tente novamente!')

    numero = Number(input.question('Digite novamente: '))
}

console.log('você acertou')


