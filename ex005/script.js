window.alert('Seja bem-vindo(a) ao meu site!')
var res = document.getElementById('res')
function calcular() {
    let num = window.prompt('Insira um número aqui')
    let dobro = num*2
    let metade = num/2
    res.innerHTML = `O dobro de ${num} é ${dobro} e a metade é ${metade}`
}
