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