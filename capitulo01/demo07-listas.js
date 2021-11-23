const minhaLista = []
const minhaListaDeTarefas = [
  'mandar email',
  'colocar comida para o Mew',
  'limpar o quarto'
]

//console.log(minhaListaDeTarefas[0])
//console.log(minhaListaDeTarefas[1])
//console.log(minhaListaDeTarefas[4])

//quantidade de items no array
//console.log(minhaListaDeTarefas.length)

//adicionar item
//minhaListaDeTarefas.push('Formatar computador')
//console.log(minhaListaDeTarefas)

//remover o ultimo item da lista
//const ultimo = minhaListaDeTarefas.pop()
//console.log(ultimo, minhaListaDeTarefas)

//remover o primeiro item da lista
//minhaListaDeTarefas.shift()
//console.log(minhaListaDeTarefas)

//remover um item especifico a partir de um indice
//console.log(minhaListaDeTarefas[2])
//qual item de inicio
// quantos remover
minhaListaDeTarefas.splice(2, 1)
console.log(minhaListaDeTarefas)

const itens = [
  1, 'computador', 0.22
]

//verificar tipo do array

//console.log(typeof(itens))
//console.log(Array.isArray(itens))

//ordenar
// const numeros = [3,2,1,0]
// console.log(numeros.sort())
// const textos = ['c', 'a', 'b', 'z']
// console.log(textos.sort())

//juntar 2 arrays

// const novo = itens.concat([1,2,3])
// console.log(novo)

//junta array em uma string
//console.log(itens.join(','))

//verificar indice do array

const index = itens.indexOf('computador')
console.log(index)