const podeDirigir = true
if(podeDirigir) {
  console.log('Ela pode dirigir')
}

const saldoEmConta = 1

if(!saldoEmConta){
  console.log('não tem saldo!')
}

//força o valor a true ou false
// de acordo com a tabela
const boolComString = "ae hackerzão !!"

console.log('boolComString', !!boolComString)

//negação
console.log('negação', !boolComString)

//negação + forçar a bool
console.log('negação + forçar a bool', !(!!boolComString))