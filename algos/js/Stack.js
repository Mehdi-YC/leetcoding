class Stack {
    constructor() {
        this.items = [];
    }

    // TODO: Push an element onto the stack
    push(element) {
        // Implement this
    }

    // TODO: Pop an element from the stack
    pop() {
        // Implement this
    }

    // TODO: Peek at the top element without removing it
    peek() {
        // Implement this
    }

    // TODO: Check if the stack is empty
    isEmpty() {
        // Implement this
    }

    // TODO: Get the size of the stack
    size() {
        // Implement this
    }
}

// Test cases
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

assert.strictEqual(stack.pop(), 3, "Test 1 Failed");
assert.strictEqual(stack.peek(), 2, "Test 2 Failed");
assert.strictEqual(stack.size(), 2, "Test 3 Failed");
assert.strictEqual(stack.isEmpty(), false, "Test 4 Failed");