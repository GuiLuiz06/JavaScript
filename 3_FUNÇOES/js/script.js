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