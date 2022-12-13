var res = document.getElementById('res')
function clicar() {
    var nome = window.prompt('Qual o seu nome?')
    res.innerHTML = `Olá <strong>${nome}</strong>! É um prazer te conhecer!`
}