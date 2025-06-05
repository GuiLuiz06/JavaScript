// 1 - métodos 
const animal = {
    nome: "jingle",
    latir: function () {
        console.log("au au")
    }
}

console.log(animal.nome)

animal.latir()

// 2 - aprofundando em métodos
const pessoa = {

    nome: "Guilherme",

    getNome: function() {
        return this.nome
    },

    SetNome: function () {
        this.nome = novoNome
    },
    
}

console.log(pessoa.nome)

console.log(pessoa.getNome())

pessoa.SetNome("Pedro")

console.log(pessoa.getNome())