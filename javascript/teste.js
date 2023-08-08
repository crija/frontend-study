/* Praticando */

const { question } = require("readline-sync")

let arr1 = {id:6, nome:'Carla', idade:18 }

console.log('id', arr1.id, 'Meu nome é', arr1.nome, 'tenho', arr1.idade, 'anos')

console.clear()

if (arr1.nome === 'Ana') {
    console.log('Seu nome não é', arr1.nome )
}
else if (arr1.nome !== 'Ana') {
    console.log('Seu nome é ', arr1.nome)
}

console.clear()

jogo = String(question(`Deseja participar do jogo de adivinha? `))

if (jogo !== 'sim') {
    console.log('ok')
    
}
else if (jogo === 'sim') {
    informarNome = String(question(`Informe seu nome: `))
    idade = Number(question('Agora nos informe a sua idade: '))

    acertar = 3
    i = 1
    for (aceitar = 0; aceitar < 3; i++) {
        tente = Number(question('Digite um número de 0 a 10: '))
        if (tente !== 3) {
            console.log('ops...tente novamete')
        }
        else if (tente === 3) {
            
            console.log(`PARABÉNS! Você acertou na ${i} tentativa`)
            break
        }
    
    }
}
    
