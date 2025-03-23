//A binary tree with a specific ordering property.
const assert = require('assert')
const { log } = require('console')
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
            this.head=null
    }

    // TODO: Insert a value into the BST
    insert(value) {
        let node = new TreeNode(value)
        if (!this.head) this.head = node
        else{
            let cur = this.head
            while(cur){
                if(value<cur.value && cur.left != null ){
                    cur = cur.left
                }
                else if(value>cur.value && cur.right != null ){

                    cur = cur.right
                }
                else if (value<cur.value && cur.left == null){
                        cur.left = node
                        return
                }
                else {
                    cur.right = node
                    return
                }
                    
                }
            }
        }
    

    // TODO: Search for a value in the BST
    search(value) {
        if (!this.head) return null
        else {
            let cur = this.head
            while(cur){
                if (value<cur.value){
                    cur = cur.left
                }
                else if (value>cur.value){
                    cur = cur.right
                }
                else return value
            }
            return null
        }
    }

    // TODO: Find the minimum value in the BST
    findMin() {
        if (!this.head) return null
        else {
            let cur = this.head
            while(cur.left){
                cur = cur.left
            }
            return cur.value
        }
    }

    // TODO: Find the maximum value in the BST
    findMax() {
        if (!this.head) return null
        else {
            let cur = this.head
            while(cur.right){
                cur = cur.right
            }
            return cur.value
        }
    }

    // TODO: Delete a value from the BST
    delete(value) {
        if (!this.head) return null;
    
        let prev = null;
        let cur = this.head;
    
        while (cur) {
            if (value < cur.value) {
                prev = cur;
                cur = cur.left;
            } else if (value > cur.value) {
                prev = cur;
                cur = cur.right;
            } else {
                // Case 1: No child
                if (!cur.left && !cur.right) {
                    if (!prev) this.head = null;
                    else if (prev.left === cur) prev.left = null;
                    else prev.right = null;
                    return value;
                }
    
                // Case 2: One child
                if (cur.left && !cur.right) {
                    if (!prev) this.head = cur.left;
                    else if (prev.left === cur) prev.left = cur.left;
                    else prev.right = cur.left;
                    return value;
                }
                if (!cur.left && cur.right) {
                    if (!prev) this.head = cur.right;
                    else if (prev.left === cur) prev.left = cur.right;
                    else prev.right = cur.right;
                    return value;
                }
    
                // Case 3: Two children - Find inorder successor
                let successorParent = cur;
                let successor = cur.right;
                while (successor.left) {
                    successorParent = successor;
                    successor = successor.left;
                }
    
                // Replace cur's value with successor's value
                cur.value = successor.value;
    
                // Remove successor
                if (successorParent.left === successor) {
                    successorParent.left = successor.right;
                } else {
                    successorParent.right = successor.right;
                }
    
                return value;
            }
        }
    
        return null;
    }
    
}

// Test cases
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(20);
bst.insert(1);
bst.insert(6);
bst.insert(4);

assert.strictEqual(bst.search(5), 5, "Test 1 Failed");
assert.strictEqual(bst.findMin(), 1, "Test 2 Failed");
assert.strictEqual(bst.findMax(), 20, "Test 3 Failed");


assert.strictEqual(bst.delete(3), 3, "Test 1 Failed");
assert.strictEqual(bst.search(5), 5, "Test 1 Failed");
assert.strictEqual(bst.search(3), null, "Test 1 Failed");