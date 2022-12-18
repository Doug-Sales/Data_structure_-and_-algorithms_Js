
const LinkedList = require('./linkedList.js')

let teste = new LinkedList()


console.log(teste.isEmpty())
//true

teste.push(15)
teste.push(11)
teste.push(12)
teste.push(13)
teste.push(14)

console.log(teste.isEmpty())
//false

console.log(teste.size())
//5

console.log(teste.toString())
//15, 11, 12, 13, 14

console.log(teste.indexOf(12))
//2

teste.remove(13)

console.log(teste.insert(20,10))
//false

console.log(teste.insert(20,1))
//true

console.log(teste.toString())
//15, 20, 11, 12, 14








