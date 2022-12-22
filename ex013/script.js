res = document.getElementById('res')

function calcular() {
    let num1 = window.prompt('Digite um número:')
    let num2 = window.prompt('Digite outro número:')

    let maior = 0

    if (num1 < num2) {
        maior = num2
        res.innerHTML = `Analisando os valores ${num1} e ${num2}, o maior valor é <strong>${maior}</strong>`
    } else if (num2 < num1) {
        maior = num1
        res.innerHTML = `Analisando os valores ${num1} e ${num2}, o maior valor é <strong>${maior}</strong>`
    } else {
        res.innerHTML = `Analisando os valores ${num1} e ${num2}, ambos são <strong>IGUAIS!</strong>`
    }
}
