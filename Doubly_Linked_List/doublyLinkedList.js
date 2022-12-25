const Node = require('../LinkedList/node')
const LinkedList = require('../LinkedList/linkedList')

/*
Duplamente ligada:  ultimo "|next|" == tail
head X(undef) ←|·prev |value| next·|→ / ←|·prev |value| next·|→ / ←|·prev |value| next·|→ X(undef)


Nós ligados, entre o anterior(prev) e próximo(next)

*/
class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next); // extende da classe Node
        this.prev = prev; //novo
    }

}

class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) { // comparação de igualdade entre os elementos
        super(equalsFn); // chama o constructor do Linklist (equalsFn, count, head)
        this._tail = undefined; // ref. ao ultimo elemento da lista
    }

    insert(element, index) {
        if (index >= 0 && index <= this._count) {

            const node = new DoublyNode(element);
            let current = this._head;

            if (index === 0) {
                if (this._head === null) {

                    this._head = node;
                    this._tail = node;

                } else {

                    node.next = this._head;
                    current.prev = node;
                    this._head = node;

                }
            } else if (index === this._count) {

                current = this._tail;
                current.next = node;
                node.prev = current;
                this._tail = node;

            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = node;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this._count++;
            return true
        }
        return false;
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = this.head.next;

                if (this.count === 1) {
                    this.tail = undefined;

                } else {
                    this.head.prev = undefined;

                }
            } else if (index === this.count - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;

            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                previous.next = current.next;

            }
            this.count--;
            return current.element;

        }
        return undefined;

    }

    indexOf(element) {
        let current = this.head;
        let index = 0;
        while (current != null) {
            if (this.equalsFn(element, current.element)) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    clear() {
        super.clear();
        this.tail = undefined;
    }

    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        while (current != null) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }

    inverseToString() {
        if (this.tail == null) {
            return '';
        }
        let objString = `${this.tail.element}`;
        let previous = this.tail.prev;
        while (previous != null) {
            objString = `${objString},${previous.element}`;
            previous = previous.prev;
        }
        return objString;
    }


}

module.exports = { DoublyLinkedList, DoublyNode }

