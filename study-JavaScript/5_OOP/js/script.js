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

// 4 - classes básicas 
const cachorro = {
    raca: null,
    patas: 4
}

const picher = Object.create(cachorro)

picher.raca = "pincher"

console.log(picher)

console.log(picher.patas)

const pitBull = Object.create(cachorro)

pitBull.raca = "PitBull"

console.log(pitBull)

// 4 - função como classe - função construtora
function criarCachorro(nome, raca) {

    const cachorro = Object.create({})
    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const greg = criarCachorro("Greg", "bulldog")
const lick = criarCachorro("Lick", "PitBull")
console.log(greg)

console.log(Object.getPrototypeOf(lick))

// exercicios
function criarHumano(nome, idade) {
    const humano = Object.create({})
    humano.nome = nome
    humano.idade = idade

    return humano
}

const luiz = criarHumano("Luiz", 19)

console.log(luiz)

// 5 - funcoes como classe 

function Criarhumano(nome, idade) {
    this.nome = nome
    this.idade = idade
}

const gui = new Criarhumano("Guilherme", 19)

console.log(gui)


// 6 - metodos na função construtora
Criarhumano.prototype.uivar = function () {
    console.log("AUUUU!")
}

console.log(Criarhumano.prototype)

gui.uivar()

// 7 - classes es6
class Humanocriar {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const jorge = new Humanocriar("Jorge", 44)

console.log(jorge)
console.log(Object.getPrototypeOf(jorge))
