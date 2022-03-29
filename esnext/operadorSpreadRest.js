//usar spread com objeto

const funcionario = { nome: 'Maria', salario: 12345}
const clone = { ativo: true, ...funcionario}

console.log(clone)

//usar spred com array

const groupA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...groupA]

console.log(grupoFinal)