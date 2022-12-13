var res = document.getElementById('res')
function somar() {
    let num1 = window.prompt('Insira um número:')
    let num2 = window.prompt('Insira outro número:')
    let soma = Number(num1) + Number(num2)
    res.innerHTML = `A soma entre ${num1} e ${num2} é igual a <strong>${soma}!</strong>`
}
