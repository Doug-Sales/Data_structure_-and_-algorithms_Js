//FIFO
class Queue {
    constructor() {
        this._count = 0;
        this._lowestCount = 0; // Ajuda a manter o controle do primeiro elemento
        this._items = {}; // Armazena os elementos
    }



    enqueue(element) { //add elemento final da fila
        this._items[this._count] = element;
        this._count++;
    }

    dequeue() { //remove o primeiro elemento da fila, tambem retorna o valor.
        if (this.isEmpty()) {
            return undefined;
        }
        const copyToReturn = this._items[this._lowestCount];
        delete this._items[this._lowestCount];
        this._lowestCount++;
        return copyToReturn;
    }

    //  NÃO ESQUECER DE CHECAR isEmpty()
    peek() { // retorna o primeiro elemento 'valor' da fila( não remove ou modifica, só informa)
        if (this.isEmpty()) {
            return undefined;
        }
        return this._items[this._lowestCount]
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
        let objString = `${this._items[this._lowestCount]}`;

        //É passado o lowestCount, porque o valor de iniciar o for, pode não ser zero.
        for (let i = this._lowestCount; i < this._count; i++) {
            objString = `${objString}, ${this._items[i]} `
        }
        return objString;
    }
}

module.exports = Queue














