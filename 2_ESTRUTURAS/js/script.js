// PONTO E VÍRGULA É OPCIONAL(poucas vezes é obrigatório)

// 1 - variáveis 
let nome = "Guilherme"
console.log(nome)
nome = "Guilherme Luiz"
console.log(nome)

const idade = 18
console.log("Olá, eu me chamo " + nome + " e tenho " + idade + "anos")

// 2 - mais sobre variáveis 

// let 2teste = "inválido"
// let @nome = "Guilherme"
let a = 10, b = 20, c = 30
console.log(a, b, c)

const nomecompleto = "Guilherme Luiz"
const nomeCompleto = "Leandro Luiz"

console.log(nomecompleto)
console.log(nomeCompleto)

let _teste = "teste ok!"
let $teste = "teste ok!"

console.log(_teste, $teste)

// 3 - prompt
// const age = prompt("digite a sua idade: ")

// console.log(`Você tem ${age} anos`)

// 4 - alert 
// alert("Testando")

// const z = 10;

// alert(`o número é ${z}`)

// 5 - math 
console.log(Math.min(5, 2, 1, 10))
console.log(Math.max(5, 2, 1, 10))
console.log(Math.floor(5.14))
console.log(Math.ceil(5.14))

// 6 - console
console.log("Teste!")
console.error("Erro!")
console.warn("aviso!")

// ESTRUTURAS DE CONTROLE

// if 

const m = 10;

if(m > 5) {
    console.log("Seu número é maior que 5!")
}

const user = "joão"

if(user === "joão") {
    console.log(`Olá, ${user}, é um prazer lhe conhecer.`)
}

if(user === "Maria") {
    console.log("Olá Maria!")
}

console.log(user === "joão", user === "Maria")

// if else

const usuario = "caio"
if (usuario === "Guilherme") {
    console.log(`Olá, ${usuario}, é um prazer ter a sua presença conosco.`)
}
else{
    console.log(`Olá, ${usuario}, por favor se retire, você não é o Guilherme.`)
}

// else if
if(10 > 11) {
    console.log("Teste 1")
} 
else if (15 > 16) {
    console.log("Teste 2") 
}
else if(20 > 10) {
    console.log("Agora vai!!")
}

const username = "caio"
const idadeG = 18

if(username === "Guilherme") {
    console.log("Bem vindo Caio!")
} else if(username === "Guilherme" && idadeG === 18) {
     console.log("Olá Guilherme, você tem 18 anos!")
}
else {
    console.log("Nenhuma condição aceita!")
}