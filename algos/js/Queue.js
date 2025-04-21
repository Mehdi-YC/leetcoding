// this is made the easiest way and can be also done with the same style as the other ones
const assert = require("assert")
class Queue {
    constructor() {
        this.items = [];
    }

    // TODO: Add an element to the queue
    enqueue(element) {
        this.items =  [element,...this.items]
    }

    // TODO: Remove an element from the queue
    dequeue() {
        return this.items.pop()
    }

    // TODO: Peek at the front element without removing it
    peek() {
        return this.items[this.items.length-1]
    }

    // TODO: Check if the queue is empty
    isEmpty() {
        if (!this.items.length) return true
        return false
    }

    // TODO: Get the size of the queue
    size() {
        return this.items.length
    }
}

// Test cases
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

assert.strictEqual(queue.dequeue(), 1, "Test 1 Failed");
assert.strictEqual(queue.peek(), 2, "Test 2 Failed");
assert.strictEqual(queue.size(), 2, "Test 3 Failed");
assert.strictEqual(queue.isEmpty(), false, "Test 4 Failed");