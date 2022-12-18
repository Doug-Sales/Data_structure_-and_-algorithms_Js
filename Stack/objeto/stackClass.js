// Estruturas de dados e algoritmos, pg-117 STACK -Objetos

class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    // Adiciona elementos no topo da pilha
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    // Remove o elemento do topo da pilha (LIFO - Last In, First Out), pode retorna o valor removido.
    pop() {
        if(this.isEmpty()) {
            return undefined;
        }
        this.count--;
        //Armazena o valor para retorno.
        const result = this.items[this.count]; 

        //remove
        delete this.items[this.count];
        
        //valor removido e retornado.
        return result;

    }

    // Método auxiliar criado. Espiar valor no topo da pilha.
    peek() {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count-1]
    }

    // M.A, Diz se array esta vazio
    isEmpty() {
        return this.count === 0;
    }

    // Tamanho do array {1 ... n}
    size() {
        return this.count;
    }

    //Esvazia a pilha
    clear() {
        this.items = {};
        this.count = 0;
    }

}

module.exports = Stack










