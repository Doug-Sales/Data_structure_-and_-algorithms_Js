// Estruturas de dados e algoritmos, pg-111 STACK

class Stack {
    constructor() {
        this.items = [];
    }

    // Adiciona elementos no topo da pilha
    push(element) {
        this.items.push(element)
    }

    // Remove o elemnto do topo da pilha (LIFO - Last In, First Out), pode retorna o valor removido.
    pop() {
        this.items.pop()
    }

    // Método auxiliar criado. Espiar valor no topo da pilha.
    peek() {
        return this.items[this.items.length -1];
    }

    // M.A, Diz se array esta vazio
    isEmpty() {
        return this.items.length === 0;
    }

    // Tamanho do array {1 ... n}
    size() {
        return this.items.length;
    }

    //Esvazia a pilha
    clear() {
        return this.items = [];
    }

}

module.exports = Stack










