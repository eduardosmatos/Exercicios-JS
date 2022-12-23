let res = document.getElementById('res')
let num = 0
let palpite = 0

function adivinhar() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    num = min + Math.trunc(dif * aleatorio)
}

function jogar() {
    palpite = Number(window.prompt('Qual é o seu palpite?'))
    if (palpite < num) {
        res.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MAIOR!</strong></p>`
    } else if (palpite > num) {
        res.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MENOR!</strong></p>`
    } else if (palpite == num) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}