let usuario = 0
let computador = 0
let placarUsuario = 0
let placarComputador = 0
const pedra = document.getElementById('botaoPedra')
const papel = document.getElementById('botaoPapel')
const tesoura = document.getElementById('botaoTesoura')
const fraseEscolhas = document.getElementById('frase-escolhas')
const fraseRresultado = document.getElementById('frase-resultado')
const placarUsu = document.getElementById('placar-usuario')
const placarComp = document.getElementById('placar-computador')

function vezDoComputador() {
    const escolhas = ['pedra', 'papel', 'tesoura']
    const sorteio = Math.floor(Math.random() * 3)
    computador = escolhas[sorteio]
    return escolhas[sorteio]
}
vezDoComputador()

console.log('computador jogou: ' + computador)

pedra.addEventListener('click', usuPedra)

function usuPedra() {
    console.log('entrou')
    usuario = 'pedra'
    placar()
}
papel.addEventListener('click', usuPapel)

function usuPapel() {
    usuario = 'papel'
    placar()
}
tesoura.addEventListener('click', usuTesoura)

function usuTesoura() {
    usuario = 'tesoura'
    placar()
}

function placar() {
    if (usuario === 'pedra' && computador === 'pedra') {
        fraseEscolhas.innerText = ('Você jogou Pedra e o computador jogou Pedra')
        fraseRresultado.innerText = ('Pedra empata com Pedra. Tente de Novo !!!')
        placarUsu.innerText = (placarUsuario)
        placarComp.innerText = (placarComputador)
        vezDoComputador()


    }
    if (usuario === 'pedra' && computador === 'tesoura') {
        fraseEscolhas.innerText = ('Você jogou Pedra e o computador jogou Tesoura')
        fraseRresultado.innerText = ('Você ganhou !!! Pedra ganha de Tesoura. Parabéns !!! ')
        placarUsuario++
        placarUsu.innerText = (placarUsuario)
        placarComp.innerText = (placarComputador)
        vezDoComputador()

    }
    if (usuario === 'pedra' && computador === 'papel') {
        fraseEscolhas.innerText = ('Você jogou Pedra e o computador jogou Papel')
        fraseRresultado.innerText = ('Você Perdeu !!! Pedra perde de Papel. Tente de novo !!!')
        placarComputador++
        placarUsu.innerText = (placarUsuario)
        placarComp.innerText = (placarComputador)
        vezDoComputador()

    }
    if (usuario === 'papel' && computador === 'papel') {
        fraseEscolhas.innerText = ('Você jogou Papel e o computador jogou Papel')
        fraseRresultado.innerText = ('Você Empatou !!! Papel empata com Papel. Parabéns !!!')
        placarUsu.innerText = (placarUsuario)
        placarComp.innerText = (placarComputador)
        vezDoComputador()


    }
    if (usuario === 'papel' && computador === 'pedra') {
        fraseEscolhas.innerText = ('Você jogou Papel e o computador jogou Pedra')
        fraseRresultado.innerText = ('Você Ganhou !!! Papel ganha de Pedra. Parabéns !!!')
        placarUsuario++
        placarUsu.innerText = (placarUsuario)
        placarComp.innerText = (placarComputador)
        vezDoComputador()

    }
    if (usuario === 'papel' && computador === 'tesoura') {
        fraseEscolhas.innerText = ('Você jogou Papel e o computador jogou Tesoura')
        fraseRresultado.innerText = ('Você Perdeu !!! Tesoura ganha de Pedra. Tente de novo !!!')
        placarComputador++
        placarUsu.innerText = (placarUsuario)
        placarComp.innerText = (placarComputador)
        vezDoComputador()

    }
    if (usuario === 'tesoura' && computador === 'tesoura') {
        fraseEscolhas.innerText = ('Você jogou Tesoura e o computador jogou Tesoura')
        fraseRresultado.innerText = ('Você Empatou !!! Tesoura empata com Tesoura. Parabéns !!!')
        placarUsu.innerText = (placarUsuario)
        placarComp.innerText = (placarComputador)
        vezDoComputador()

    }
    if (usuario === 'tesoura' && computador === 'pedra') {
        fraseEscolhas.innerText = ('Você jogou Tesoura e o computador jogou Pedra')
        fraseRresultado.innerText = ('Você Perdeu !!! Tesoura perde de Pedra. Tente de novo !!!')
        placarComputador++
        placarUsu.innerText = (placarUsuario)
        placarComp.innerText = (placarComputador)
        vezDoComputador()

    }
    if (usuario === 'tesoura' && computador === 'papel') {
        fraseEscolhas.innerText = ('Você jogou Tesoura e o computador jogou Papel')
        fraseRresultado.innerText = ('Você Ganhou !!! Tesoura ganha de Papel. Parabéns !!!')
        placarUsuario++
        placarUsu.innerText = (placarUsuario)
        placarComp.innerText = (placarComputador)
        vezDoComputador()
    }

}

