const Queue = require('./classQueue')

const fila = new Queue()

console.log(fila)
console.log('\n')

fila.enqueue(2)

console.log(fila)
console.log('\n')

fila.enqueue(5)
fila.enqueue(1)




console.log(fila)
console.log(fila.dequeue())
console.log(fila)

fila.dequeue()
fila.enqueue('Douglas')
console.log(fila.toString())




























