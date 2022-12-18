const Stack = require('./stackClass')
const teste = new Stack()

// teste.push(2)
// teste.push(5)

// console.log(teste.peek())



// console.log(teste.isEmpty())
// console.log(teste)

// teste.clear()
// console.log(teste)
// console.log(teste.isEmpty())


// console.log(Object.getOwnPropertyNames(teste))
// console.log(Object.keys(teste))
// console.log(teste.items)

//===============================================================

// Teste private
class user {
    #name = undefined

    setName(x){
        this.#name = x
    }

    printName(){
        return this.#userWelcome()
    }

    #userWelcome(){ //Declara private '#'
        return `Welcome, ${this.#name}. ` + user.testeStatic();
    }
    static testeStatic() {
        return 'Teste Static'
    }
    

}

const name = 'Douglas'
const newUser = new user()

newUser.setName(name)

// console.log(newUser.testeStatic)


console.log(newUser.printName())
// console.log(Object.getOwnPropertyDescriptors(newUser))
// console.log(Object.getOwnPropertyDescriptors(teste))
// console.log(Object.getOwnPropertyNames(teste))

































