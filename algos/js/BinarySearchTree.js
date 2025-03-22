//A binary tree with a specific ordering property.

class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // TODO: Insert a value into the BST
    insert(value) {
        // Implement this
    }

    // TODO: Search for a value in the BST
    search(value) {
        // Implement this
    }

    // TODO: Find the minimum value in the BST
    findMin() {
        // Implement this
    }

    // TODO: Find the maximum value in the BST
    findMax() {
        // Implement this
    }

    // TODO: Delete a value from the BST
    delete(value) {
        // Implement this
    }
}

// Test cases
const bst = new BinarySearchTree(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);

assert.strictEqual(bst.search(5).value, 5, "Test 1 Failed");
assert.strictEqual(bst.findMin(), 3, "Test 2 Failed");
assert.strictEqual(bst.findMax(), 15, "Test 3 Failed");