class Queue {
    constructor() {
        this.items = [];
    }

    // TODO: Add an element to the queue
    enqueue(element) {
        // Implement this
    }

    // TODO: Remove an element from the queue
    dequeue() {
        // Implement this
    }

    // TODO: Peek at the front element without removing it
    peek() {
        // Implement this
    }

    // TODO: Check if the queue is empty
    isEmpty() {
        // Implement this
    }

    // TODO: Get the size of the queue
    size() {
        // Implement this
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