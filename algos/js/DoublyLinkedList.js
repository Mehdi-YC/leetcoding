//A linked list where each node has both next and prev pointers.
const assert = require("assert")
class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        
    }

    // TODO: Add a node to the end
    append(value) {
        let node = new ListNode(value)
        if (!this.head) this.head = node
        else{
            let cur = this.head

            while (cur.next){
                cur =cur.next
            }
            cur.next = node
            node.prev = cur
        }
    }

    // TODO: Add a node to the beginning
    prepend(value) {
        // Implement this
    }

    // TODO: Remove a node by value
    remove(value) {
        // Implement this
    }

    // TODO: Find a node by value
    find(value) {
        // Implement this
    }

    // TODO: Convert the list to an array
    toArray() {
        // Implement this
    }

    print() {
        if (!this.head) console.log("empty")
        let cur = this.head
        let rv = []
        while (cur) {
            rv.push(cur.value)
            cur = cur.next
        }
        console.log(rv.join(" -> "))
    }

    toArray() {
        let cur = this.head
        let rv = []
        while (cur) {
            rv.push(cur.value)
            cur = cur.next
        }
        return rv
    }

    toPalindromArray() {
        let cur = this.head
        let rv = []
        let prev = null
        while (cur) {
            prev = cur
            rv.push(cur.value)
            cur = cur.next
        }
        while (prev) {
            rv.push(prev.value)
            prev = prev.prev
        }
        return rv
    }
}

// Test cases
const list = new DoublyLinkedList();
list.append(0);
list.append(1);
list.append(2);
//list.prepend(0);

assert.deepStrictEqual(list.toArray(), [0, 1, 2], "Test 1 Failed");
assert.deepStrictEqual(list.toPalindromArray(), [0, 1, 2,2,1,0], "Test 1 Failed");
//list.remove(1);
//assert.deepStrictEqual(list.toArray(), [0, 2], "Test 2 Failed");
//assert.strictEqual(list.find(2).value, 2, "Test 3 Failed");