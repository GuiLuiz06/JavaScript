// arrays - lista de elementos  
// lista com tipo de dados diferentes
const list = [1, 2, 3, 4, 5] 

console.log(list)
console.log(typeof list)

const mist = ["guilherme", 18, "masculino"]

console.log(mist)
console.log(typeof mist)

// 2 - mais sobre arrays
// acessar elementos individuais dos arrays
const number = [1, 2, 3, 4, 5]

console.log(number[2])

// 3 - propriedades
// declarar uma variavel normal
// se fizer com array nao funciona corretamente

const myname = "guilherme"

console.log(myname.length)

// 4 - métodos 
const otherNumber = [6, 7, 8, 9, 10]

console.log(number.concat(otherNumber))

const meunome = "Guilherme"

console.log(meunome.toUpperCase())
console.log(meunome.indexOf("m"))

// 5 - objetos
const person = {
    name: "Guilherme", 
    age: 18,
    job: "Desenvolvedor Web"
}
console.log(person)
console.log(person.job.length)

// 6 - criando e deletando propriedades  
const pc = {
    process: 4.5,
    memoria: "16gb",
    font: "650W"
}
console.log(pc)

pc.fans = 4

console.log(pc)

// delete pc.font
// console.log(pc) 

// arrays - listas de itens 
// Objetos - são utilizados para descrever um tem
// é possivel ter um array de objetos

// 7 - mais sobre objetos
 const obj = {
    a: "Ola",
    b: true,
 }

 console.log(obj instanceof Object)

 const obj2 = {
    c: ["gui"],
 }

 Object.assign(obj2, obj)
 console.log(obj2)
 console.log(obj)

//   8 - conhecendo os objetos
console.log(Object.keys(pc))
console.log(Object.entries(pc))

// 9 - mutação
const a = {
    name: "Guilherme",
}
const b = a

console.log(a)
console.log(b)

console.log(a === b)

a.age = 18;

console.log(b)

delete b.age

console.log(a)
console.log(b)

// 10 -loop em array
const nomes = ["pedro", "lucas", "mateus", "guilherme"]

for (let i = 0; i < nomes.length; i++) {
    console.log(`Listando os usuários: ${nomes[i]}`)
}

// 11 - push e pop 
const array = ["a", "b", "c", "d"]

array.push("e")
console.log(array)

console.log(array.length)
array.pop("e")
console.log(array)

const itemremovido = array.pop()

console.log(itemremovido)

console.log(array)
array.push("d", "e", "f")


console.log(array)

//  12 - shift e unshift (remove primeiro item - adiciona mais itens)

const letters = ["a", "b", "c"] 

const letter = letters.shift()
console.log(letter)
console.log(letters)

letters.unshift("q", "r", "s")
letters.unshift("j")
console.log(letters)

// 13 - indexOf e LastIndexOf

const fruits = ["morango", "uva", "abacate", "morango"]
console.log(fruits.indexOf("uva"))
console.log(fruits.indexOf("abacate"))

console.log(fruits[2]);
console.log(fruits[fruits.indexOf("abacate")])

console.log(fruits.lastIndexOf("ameixa"))

console.log(fruits.indexOf("ameixa"))

// 14 - slice 

const testeSlice = ["h", "i", "j", "k", "l", "m"]

const subArray = testeSlice.slice(2, 5)

console.log(subArray)

console.log(testeSlice)

const subArray2 = testeSlice.slice(2, 5 + 1)

console.log(subArray2)

const subArray3 = testeSlice.slice(1)

console.log(subArray3)

// 15 - foreach

const numbers = [1,2,3,4,5,6]

numbers.forEach((numero) => {
    console.log(`o número é ${numero}`)
})

// simulação de como vem do banco de dados
const posts = [
    { title: "primeiro post", category: "PHP"},
    { title: "Segundo post", category: "JavaScript"},
    { title: "Tercero post", category: "Python"},
]
posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title} da categoria: ${post.category} `)
})

// 16 - include

const brands = ["bmw", "fiat", "porshe"]

console.log(brands.includes("bmw"))
console.log(brands.includes("kia"))

// 17 - Reverse 
  const numbs = [1, 2, 3, 4, 5]

  numbs.reverse();

  console.log(numbs)

// 18 - METODOS DE STRING

//18 - TRIM

const trimTeste = " teste \n "

console.log(trimTeste)

console.log(trimTeste.trim())

console.log(trimTeste.length)

console.log(trimTeste.trim( ).length)
 
// 19 - padStart

const testPadStart = "1" 

const numbernew = testPadStart.padStart(4, 2)

console.log(testPadStart)

console.log(numbernew)

const testePadEnd = "9"

const newnumber = testePadEnd.padEnd(3, 9)

console.log(testePadEnd)

console.log(newnumber)

// 20 - slipt

const frase = "na vida não se pode ter tudo"

const arrayFrase = frase.split(" ")

console.log(arrayFrase)

// 21 - join 

const fraseRepetida = arrayFrase.join(" ")

console.log(fraseRepetida)

const frutas = ["goiaba", "Pera", "Uva", "Maçã"]

const fraseDaCompra = `precisamos comprar: ${frutas.join(", ")}.`

console.log(fraseDaCompra)

// 22 - Repeat

const repeat = "Testando repeat "

console.log(repeat.repeat(5))

// 23 - rest operator - MANEIRA DE RECEBER TODOS OS TIPOS DE DADOS QUE CHEGAM
   
const somaInfinita = (...args) => {
    
    let total = 0

    for(let i = 0; i < args.length; i++){
        total += args[i]
    }
    return total;
}

console.log(somaInfinita(1, 5, 4))

console.log(somaInfinita(999, 332, 342, 42432, 5445454))

// 24 - for of

const somaInfinita2 = (...args) => {
    let total = 0

    for(num of args) {
        total += num
    }
    return total
}

console.log(somaInfinita2(44, 66))

// 25 - destructing em objetos

const userDetails = {
    PrimeiroNome: "Guilherme",
    segundoNome: "Luiz",
    trabalho: "desenvolvedor"
}

const {PrimeiroNome, segundoNome, trabalho} = userDetails

console.log(PrimeiroNome, segundoNome, trabalho)

// renomear variáveis

const {PrimeiroNome: firstname} = userDetails

console.log(firstname)

// 26 - destructing em arrays

const cars = ["avião", "carro", "moto", "bicicleta"]

const [va, vb, vc, vd] = cars

console.log(va, vb, vc, vd)

// 27 - JSON 

const myJson = '{"name": "guilherme", "age": 31, "skills": ["PHP", "Java", "Python"]}'

console.log(myJson)

console.log(typeof myJson)

// 28 - json para objeto e objeto para json

const myObject = JSON.parse(myJson)

console.log(myObject)

console.log(myObject.name)

console.log(typeof myObject)

// json invalido
const badJson = '{"name": Guilherme, "age": 18 }'

// const myBadObject = JSON.parse(badJson)

myObject.IsOpenToWork = true;

console.log(myObject)

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)

console.log(typeof myNewJson)