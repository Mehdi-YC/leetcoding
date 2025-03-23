//A tree data structure where each node has at most two children.
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor(value) {
        this.head = null
    }

    // TODO: Insert a value into the tree
    insert(value) {

    }

    // TODO: Search for a value in the tree
    search(value) {
        // Implement this
    }

    // TODO: Perform an in-order traversal
    inOrderTraversal() {
        // Implement this
    }

    // TODO: Perform a pre-order traversal
    preOrderTraversal() {
        // Implement this
    }

    // TODO: Perform a post-order traversal
    postOrderTraversal() {
        // Implement this
    }
}

// Test cases
const tree = new BinaryTree(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);

assert.strictEqual(tree.search(5).value, 5, "Test 1 Failed");
assert.deepStrictEqual(tree.inOrderTraversal(), [3, 5, 10, 15], "Test 2 Failed");