const Stack = require('./stackClass')
const teste = new Stack()

teste.push(2)
teste.push(5)

let pop = teste.pop()
console.log('Pop - "removido": ' + pop)

console.log('\n')
teste.push(7)
console.log('Peek - valor no topo: ' + teste.peek())
console.log('isEmpty ? : ' + teste.isEmpty())

console.log('\n')
console.log('Cleaning: ' + teste.clear())
console.log('Size: ' + teste.size())
console.log('isEmpty ? : ' + teste.isEmpty())


console.log(Object.getOwnPropertyNames(teste))




//===============================================
// Teste private
class user {
    #name = undefined

    setName(x) {
        this.#name = x
    }

    printName() {
        return this.#userWelcome()
    }

    #userWelcome() { //Declara private '#'
        return `Welcome, ${this.#name}.`
    }

}

// const name = 'Douglas'
// const newUser = new user()

// newUser.setName(name)
// console.log(newUser.printName())
// console.log(Object.getOwnPropertyDescriptors(newUser))





























