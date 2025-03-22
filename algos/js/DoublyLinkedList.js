//A linked list where each node has both next and prev pointers.


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // TODO: Add a node to the end
    append(value) {
        // Implement this
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
}

// Test cases
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.prepend(0);

assert.deepStrictEqual(list.toArray(), [0, 1, 2], "Test 1 Failed");
list.remove(1);
assert.deepStrictEqual(list.toArray(), [0, 2], "Test 2 Failed");
assert.strictEqual(list.find(2).value, 2, "Test 3 Failed");