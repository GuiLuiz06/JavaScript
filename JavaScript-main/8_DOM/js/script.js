// 1 - movendo-se pelo DOM
console.log(document.body)

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

// 2 -  selecionando por tag

const listaItens = document.getElementsByTagName("li")

console.log(listaItens)

// 3 - selecionando por id  

const title = document.getElementById("title")

console.log(title)

// 4 - selecionando por classe

const product = document.getElementsByClassName("product")

console.log(product)

// 5 - selecionando por css

const mainContainer = document.querySelector("#main-container")

console.log(mainContainer)

const productQuery = document.querySelectorAll(".product")

console.log(productQuery)

// 6 - insertBefore | adicionando itens antes de elementos
const p = document.createElement("p")

const header = title.parentElement

header.insertBefore(p, title)

const j = document.createElement("h2")

const acimaDiv = title.parentElement

acimaDiv.insertBefore(j, title)

//  7 - appendChild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)

// 8 - replaceChild
const h2 = document.createElement("header")

h2.textContent = "titulo novo!!!!"

header.replaceChild(h2, title)

// 9 - createTextMode 
const meuTexto = document.createTextNode("agora eu tenho um título novo novamente!!!!")

console.log(meuTexto)

const h3 = document.createElement("h3")

h3.appendChild(meuTexto)

console.log(h3)

mainContainer.appendChild(h3)

// 10 - alterando atributos! (adicionar links sem html)
    const google = navLinks.querySelector("a")

    console.log(google)
    google.setAttribute("href", "https://www.google.com")

    google.setAttribute("target", "_blank")

    const allLinks = navLinks.querySelectorAll("a")

    const segundolink = allLinks[1]

    console.log(segundolink)

    segundolink.setAttribute("href", "https://www.instagram.com.br")
    segundolink.setAttribute("target", "_blank")

//  11 - altura e largura
const footer = document.querySelector("footer")

console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

console.log(footer.clientWidth)
console.log(footer.clientHeight)

const product1 = product[1]

console.log(product1.getBoundingClientRect())

// 13 css com js
mainContainer.style.color = "green"
mainContainer.style.background = "gray"
mainContainer.style.borderRadius = "10px"

// 14- alterando estilo de varios elementos
for (const li of listaItens) {
    li.style.background = "aqua"
}