function interagir() {
    let res = document.getElementById('res')
    let agora = new Date
    res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${agora}</mark></p>`
}