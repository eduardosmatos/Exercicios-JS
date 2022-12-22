res = document.getElementById('res')

function calcular() {
    nome = window.prompt('Qual é o nome do aluno?')
    nota1 = window.prompt(`Qual foi a primeira nota de ${nome}?`)
    nota2 = window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`)

    media = (Number(nota1) + Number(nota2))/2

    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>`
    res.innerHTML += `<p>A média final foi <mark>${media}</mark>.</p>`
   
    if (media >= 6) {
        res.innerHTML += `<p>A mensagem que temos é: <strong style="color: red;">Meus parabéns!.</strong></p>`
    } else {
        res.innerHTML += `<p>A mensagem que temos é: <strong style="color: red;">Estude mais um pouco!.</p>`
    }
}
