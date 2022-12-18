const defaultEquals  = require('util')
const Node = require('./node');


class LinkedList {
    constructor(_equalsFn = defaultEquals) {
        this._count = 0;
        this._head = undefined;
        this._equalsFn = _equalsFn;
    }

    push(element) {
        const node = new Node(element);
        let current;
        if (this._head == null) {
            this._head = node;
        } else {
            current = this._head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this._count++;
    }

    getElementAt(index) {
        if (index >= 0 && index <= this._count) {
            let node = this._head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    removeAt(index) {
        if (index >= 0 && index < this._count) {
            let current = this._head;

            if (index === 0) {
                this._head = current.next;
            } else {
                const previous = this.getElementAt(index - 1);

                current = previous.next;
                previous.next = current.next;
            }
            this._count--;
            
        }
        return undefined;
    }

    insert(element, index) {
        if (index >= 0 && index <= this._count) {
            const node = new Node(element);
            if (index === 0) {
                const current = this._head;
                node.next = current;
                this._head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this._count++
            return true;
        }
        return false;
    }

    indexOf(element) {
        let current = this._head;
        for (let i = 0; i < this._count && current != null; i++) {
            if (element === current.element) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index)
    }

    size() {
        return this._count;
    }

    isEmpty() {
        return this.size() === 0;
    }

    getHead() {
        return this._head;
    }

    toString() {
        if (this._head == null) {
            return '';
        }
        let objString = `${this._head.element}`;
        let current = this._head.next;

        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    }
}



module.exports = LinkedList

















