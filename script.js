let botoes = document.querySelectorALL(".botoes button")
botoes.forEach(botao => {
    botao.addEventListener("click", guardaNota)
})

function guardaNota(evento) {
    let nota = evento.target.innerText

    localStorage.setItem("nota", nota)
}