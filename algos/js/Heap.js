//A specialized tree-based data structure used for priority queues.



class MinHeap {
    constructor() {
        this.heap = [];
    }

    // TODO: Insert a value into the heap
    insert(value) {
        // Implement this
    }

    // TODO: Extract the minimum value from the heap
    extractMin() {
        // Implement this
    }

    // TODO: Get the minimum value without removing it
    peek() {
        // Implement this
    }

    // TODO: Get the size of the heap
    size() {
        // Implement this
    }
}

// Test cases
const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(15);

assert.strictEqual(heap.peek(), 5, "Test 1 Failed");
assert.strictEqual(heap.extractMin(), 5, "Test 2 Failed");
assert.strictEqual(heap.size(), 2, "Test 3 Failed");