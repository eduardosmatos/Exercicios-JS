var res = document.getElementById('res')
function média() {
    var nome = window.prompt('Qual é o nome do aluno?')
    let nota1 = window.prompt(`Qual foi a primeira nota de ${nome}?`)
    let nota2 = window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`)
    let média = (Number(num1) + Number(num2)) / 2
    res.innerHTML = `Calculando a média final de <mark>${nome}</mark>.`
    res.innerHTML = `As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark>.`
    res.innerHTML = `A média final será <mark>${média}</mark>.`
}