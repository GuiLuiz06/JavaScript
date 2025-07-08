// criando uma função
function minhaFuncao() {
    console.log("Testando");
}

minhaFuncao()

const minhaFuncaoEmVariavel = function () {
    console.log("função em variável")
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`imprindo: ${txt}`)
}

funcaoComParametro("imprimindo alguma coisa")

// 2 - return

const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2) {
    return n1+ n2
}
 const resultado = soma(a, b)

 console.log(resultado)

//  3 - escopo da funcao
let y = 30;

function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da função é: ${y}`)
}
testandoEscopo()
console.log(`y fora da função é ${y}`)

//  4 - escopo aninhado - nested scopes
let m = 10

function escopoAninhado() {
    let m = 20

    if (true) {
        let m = 30

        if (true) {
            let m = 40

            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}
escopoAninhado()

console.log(m)

// 5 - arrow function
const testeArrow = () => {
    console.log("esta é uma arrow function")
}
testeArrow()
const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("par")
        return
    }

    console.log("impar")
}
parOuImpar(5)
parOuImpar(12)

// mais sobre arrow function
const raizQuadrada = (x) => {
    return x * x
}
console.log(raizQuadrada(4))

const raizQuadrada2 = (x) => x * x
console.log(raizQuadrada2(5))
console.log(raizQuadrada2(12))

const helloWorld = () => console.log("Hello World")
helloWorld()

// 7 - parametro opcional

const multiplicacao = function(m, n) {
    if(n === undefined) {
        return m * 2
    }
    else {
        return m * n
    }
}
console.log(multiplicacao(5))

console.log(multiplicacao(3, 4))

 const greeting = (nome) => {
    if (!nome) {
        console.log("olá")
        return
    }
    else {
        console.log(`Olá ${nome}`)
    
    }
 } 

 greeting()
 greeting("guilherme")

//  valor default 

const saudacao = (nome, great = "Olá") => {
    return `${great}, ${nome}`
}
console.log(saudacao("guilherme"))
console.log(saudacao("Pedro", "Bom dia"))

const repeteTexto = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++) {
        console.log(text)
    }
}
repeteTexto("teste")
repeteTexto("Testando novamente!", 5)

// closure

function someFunction() {
    let texto = "olá, Guii"

    function display () {
        console.log(texto)
    }
    display()
}

someFunction()

// mais sobre closure
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m
    }
}

const c1 = multiplicationClosure(5)
const c2 = multiplicationClosure(10)

console.log(c1)
console.log(c2)

console.log(c1(5))
console.log(c2(10))

// recursion (quase um for)
const ten = (n, m) => {
    if (n < 10) {
        console.log("A função parou!")
    }
    else {
        const x = n - m

        console.log(x)

        ten(x, m)
    }
}

ten(200, 5)

// infinite recursion
// function run() {
//     console.log("Executando...")
//     run()
// }

// run ()

function factorial(x) {
    if(x === 0) {
        return 1
    }
    else {
        return x * factorial(x - 1)
    }
}

const num = 3

const result = factorial(num)

console.log(`O fatorial do número ${num} é: ${result}`)