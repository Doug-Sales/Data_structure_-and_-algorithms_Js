// Estruturas de dados e algoritmos, pg-122 STACK implementando private com a classe WeakMap


const items = new WeakMap()

class Stack {
    constructor() {
        items.set(this, []);
    }

    // Adiciona elementos no topo da pilha
    push(element) {
        const s = items.get(this)
        s.push(element)
    }

    // Remove o elemento do topo da pilha (LIFO - Last In, First Out), pode retorna o valor removido.
    pop() {
        const s = items.get(this)
        const r = s.pop()
        return r;
    }

    // Método auxiliar criado. Espiar valor no topo da pilha.
    peek() {
        const s = items.get(this)
        return s[s.length - 1]
    }

    // M.A, Diz se array esta vazio
    isEmpty() {
        const s = items.get(this)
        return s.length === 0;
    }

    // Tamanho do array {1 ... n}
    size() {
        const s = items.get(this)
        return s.length;
    }

    //Esvazia a pilha
    clear() {
        items.set(this, [])
        const s = items.get(this)

        return s.length === 0;
    }

}

module.exports = Stack










