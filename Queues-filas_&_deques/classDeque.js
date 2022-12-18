//FIFO E LIFO - estrututratanto fila quanto pilha
class Deque {
    constructor() {
        this._count = 0;
        this._lowestCount = 0; // Ajuda a manter o controle do primeiro elemento
        this._items = []; // Armazena os elementos
    }

    addFront(element) {
        if (this.isEmpty()) { // primeiro avalia se esta vazio se sim  
            this.addBack(element); // chama o metodo, pois tbm possui a lógica para incrementar o count
        } else if (this._lowestCount > 0) {
            this._lowestCount--;
            this._items[this._lowestCount] = element;
        } else {
            for (let i = this._count; i > 0; i--) {
                this._items[i] = this._items[i - 1]
            }
            this._count++
            this._lowestCount = 0
            this._items[0] = element
        }


    }



    addBack(element) { //add elemento final da fila
        this._items[this._count] = element;
        this._count++;
    }

    removeFront() { //remove o primeiro elemento da fila, tambem retorna o valor.
        if (this.isEmpty()) {
            return undefined;
        }
        const copyToReturn = this._items[this._lowestCount];
        delete this._items[this._lowestCount];
        this._lowestCount++;
        return copyToReturn;
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        this._count--;
        //Armazena o valor para retorno.
        const result = this._items[this._count];

        //remove
        delete this._items[this._count];

        //valor removido e retornado.
        return result;

    }

    peekFront() { // retorna o primeiro elemento 'valor' da fila( não remove ou modifica, só informa)
        if (this.isEmpty()) {
            return undefined;
        }
        return this._items[this._lowestCount]
    }


    peekBack() { // retorna o ultimo elemento 'valor' da fila( não remove ou modifica, só informa)
        if (this.isEmpty()) {
            return undefined;
        }
        return this._items[this._lowestCount - 1]
    }

    isEmpty() { //boolean true:vazio falso:tem elemento
        return this.size() === 0;
    }

    size() { //retorna o numero de elementos
        return this._count - this._lowestCount;
    }

    clear() {
        this._items = {};
        this._count = 0;
        this._lowestCount = 0
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this._items[0]}`;

        //É passado o lowestCount, porque o valor de iniciar o for, pode não ser zero.
        for (let i = this._lowestCount; i < this._count; i++) {
            objString = `${objString}, ${this._items[i]} `
        }
        return objString;
    }
}

module.exports = Deque