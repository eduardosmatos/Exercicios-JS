function calcular() {
    numero = window.prompt('Digite um número:')

    res = document.getElementById('res')
    res.innerHTML = `<p>O número a ser analisado aqui será o <strong>${numero}</strong></p>`
    res.innerHTML += `<hr>`
    res.innerHTML += `<p>O seu valor absoluto é ${numero}</p>`
    res.innerHTML += `<p>A sua parte inteira é ${parseInt(numero)}</p>`
    res.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(numero)}</p>`
    res.innerHTML += `<p>A sua raíz quadrada é ${Math.sqrt(numero)}</p>`
    res.innerHTML += `<p>A sua raíz cúbica é ${Math.cbrt(numero)}</p>`
    res.innerHTML += `<p>O valor de ${numero}<sup>2</sup> é ${Math.pow(numero, 2)}</p>`
    res.innerHTML += `<p>O valor de ${numero}<sup>3</sup> é ${Math.pow(numero, 3)}</p>`
}