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