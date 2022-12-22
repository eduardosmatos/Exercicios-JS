function calcular() {
    let ano = window.prompt('Em que ano você nasceu?')
    let data = new Date
    let atual = data.getFullYear()
    let idade = Number(atual) - Number(ano)
    let saida = document.getElementById('res')
    saida.innerHTML = `Quem nasceu em ${ano} vai completar <strong>${idade}</strong> anos em ${atual}`
}