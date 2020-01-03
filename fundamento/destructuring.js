// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradrouro: 'Rua ABC',
        numero: 110
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumarada = true} = pessoa
console.log(sobrenome, bemHumarada)

const { endereco: { logradrouro, numero, cep }} = pessoa
console.log(logradrouro, numero, cep)

// const { conta: {ag, num}} = pessoa
// console.log(conta)