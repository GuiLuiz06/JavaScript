// 1 - adicionando eventos
const btnSecond = document.querySelector("#my-buttom")

btnSecond.addEventListener("click", function() {

    console.log("clicastes aqui")
})

// 2 - removendo eventos
const btn = document.querySelector("#btn")

function imprimindoMsg() {
    console.log("clicou")
}
btn.addEventListener("click", imprimindoMsg)

const threeBtn = document.querySelector("#btn-other")

threeBtn.addEventListener("click", () => {
    console.log("O evento foi removido com sucesso!")
    btn.removeEventListener("click", imprimindoMsg)
})

// 3 - argumento do evento
const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})

// 4 - propagação
const containerBtn = document.querySelector("#container-btn")
const bntInsertdiv = document.querySelector("#btn-div")

containerBtn.addEventListener("click", () => {
    console.log("evento 1")
})
bntInsertdiv.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("evento 2")
})

// 5 - removendo evento padrão 
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault()

    console.log("removi o evento padrão de ir para o google")
})

// 6 - evento de tecla
document.addEventListener("keyup", (e) => {
    console.log(`você apertou o ${e.key}`)
})
document.addEventListener("keyup", (e) => {
    console.log(`você soltou o ${e.key}`)
})

// 7 - eventos de mouse
const eventMouse = document.addEventListener("#mouse")

eventMouse.addEventListener("mousedown", () => {
    console.log(`segurou o botão do mouse`)
})