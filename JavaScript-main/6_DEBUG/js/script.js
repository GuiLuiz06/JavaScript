// 1 - strict
"use strict"

// opa = "teste" - ERRADO

const opa = "teste"

// const undefined = 4 - n pode também

// delete [].length

// 2 - console.log 
let a = 2
let b = 4

if (a == 2) {
    a = a + b + 2
}

console.log(a)

for (let i = 0; i < b; i++) {
    a = a + 20
    console.log(a)
}

//  3 - Debugger
let c = 1
let d = 2

if (c == 1) {
    c = d + 2
}
// debugger

for (let i = 0; i < b; i++) {
    c = c + 3
}

console.log("executou o looping")

// debugger

if (c > 5) {
    c = 23
}

// 4 - tratamento do dados
function checarNumero(n) {
      const result = Number(n)

      if (Number.isNaN(result)){
        console.log("Valor Incorreto!")
        return
      }
      console.log("Valor Correto!")
      return result   
}

checarNumero(5)
checarNumero("22")
checarNumero(2)
checarNumero("recebido")

// 5 - exceptions - Ajudar programadores alertando um possivel erro
let p = 30

if (p != 18) {
    // throw new Error ("O valor desse produto não pode ser diferente de 18")
}

// 6 - try catch

try {
    const soma = x + z
} catch(error) {
    console.log(`erro no programa: ${error}`)
}
// 7 - Finally
try {
    const value = checarNumero("asdsa") 

    if(!value) {
        throw new Error("valores inválidos")
    }
}    catch(error) {
    console.log(`opa, aconteceu um erro! ${error}`)
} finally {
    console.log("O código rodou normalmente!")
}

// 8 - assertion 
function checkArray(arr) {
    if (arr.length === 0) {
        throw new Error("o array precisa ter elementos")
    } else {
        console.log(`o array tem ${arr.length} elementos`)
    }
}

// checkArray([])
checkArray([1, 2, 3])