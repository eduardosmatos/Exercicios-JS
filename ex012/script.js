res = document.getElementById('res')

function calcular() {
    numero = window.prompt('Digite um número:')
    resultado = Number(numero)%2
    if (resultado == 0) {
        res.innerHTML = `O número ${numero} que foi digitado é <strong>PAR!</strong>`
    } if (resultado == 1) {
        res.innerHTML = `O número ${numero} que foi digitado é <strong>ÍMPAR!</strong>`
    }
}
