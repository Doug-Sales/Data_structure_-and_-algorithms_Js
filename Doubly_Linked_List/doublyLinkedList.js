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
}

module.exports = { DoublyLinkedList, DoublyNode }

