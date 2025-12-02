// 1 - métodos

const animal = {
    pernas: 2,
    nome: "dogue",
    latir: function () {
        console.log("au")
    }
}
// exercicio
const humano = {
    pernas: 2,
    bracos: 2,
    dedos: 10,
    nome: "Gui"
}

console.log(animal.nome)

animal.latir()

if (humano.dedos != 10) {
    console.log("Você não tem 10 dedos")
}
else {
    console.log(humano.dedos)
}

// 2.1 - aprofundando em métodos 
const pessoa = {
    nome: "Lucas",

    getNome: function () {
        return this.nome
    },

    setNome: function (novoNome) {
        this.nome = novoNome
    }
}

console.log(pessoa.nome)

console.log(pessoa.getNome())

pessoa.setNome("André")

console.log(pessoa.getNome())

// exercicio 
const pessoa1 = {
    nome: "josé",

    getNome1: function () {
        return this.nome
    },

    setNome1: function (novoNome1) {
        this.nome = novoNome1
    }
}

console.log(pessoa1.nome)

console.log(pessoa1.getNome1())

pessoa1.setNome1("Osvaldo")

console.log(pessoa1.getNome1())

// 3 - prototype 
const texto = "abcd"

console.log(Object.getPrototypeOf(texto))

const bool = true

console.log(Object.getPrototypeOf(bool))

const int = 123

console.log(Object.getPrototypeOf(int))

const word = {
    nome: "terra",
}

console.log(Object.getPrototypeOf(word))

const arr = ["ola", 22, true]

console.log(Object.getPrototypeOf(arr))

// 3.1 - mais sobre prototype 

const meuObjeto = {
    a: "b"
}

console.log(Object.getPrototypeOf(meuObjeto))

console.log(Object.getPrototypeOf(meuObjeto) === Object.prototype)

const meuSegundoObjeto = Object.create(meuObjeto)

console.log(meuSegundoObjeto)

// 4 - classes