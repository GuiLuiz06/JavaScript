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

// const m = 10

// if(m > 5) {
//     console.log("Seu número é maior que 5!")
// }

// const user = "joão"

// if(user === "joão") {
//     console.log(`Olá, ${user}, é um prazer lhe conhecer.`)
// }

// if(user === "Maria") {
//     console.log("Olá Maria!")
// }

// console.log(user === "joão", user === "Maria")

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

// while 
let p = 0

while (p < 5) {
    console.log(`repetindo ${p}`)
    p = p + 1
}
// loop infinito

// let x = 10
// while (x > 5 ) {
// console.log(`repetindo ${x}`)
// }

//  do while 
// let o = 10

// do {
//     console.log(`o valor de o ${o}`)
//     o--
// } while (o > 1)

// for 

for(let t = 0; t < 10; t++) {
    console.log("repetindo algo.....")
}

// let r = 10

// for (r; r > 0; r = r - 1){
//     console.log(`o r está diminuindo ${r}`)
// }

// // break

// for (let g = 20; g > 10; g--) {
//     console.log(`o valor ded g é ${g}`)
    
//     if (g === 15) {
//         console.log("o g é 15!")
//         break;
//     }
// }

// continue

for (let s = 1; s < 10; s = s + 1) {
    // operador resto %
    if (s % 2 === 0) {
        console.log("Número par!")
        continue
    }

    console.log(s)
}

// swtich case

const dia = "domingo"

switch(dia) {
    case "segunda":
        console.log("Hoje não é segunda");
        break;
    case "terça":
        console.log("Hoje não é terça");
        break;
    case "quarta":
        console.log("Hoje não é quarta");
        break;
    case "quinta":
        console.log("Hoje não é quinta");
        break;
    case "sexta":
        console.log("Hoje não é sexta");
        break;
    case "sábado":
        console.log("Hoje não é sábado");          
        break;
    case "domingo":
        console.log("Hoje é domingo!");
        break;
    default:
        console.log("Dia da semana não encontrado!");       
}
 
