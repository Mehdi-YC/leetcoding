const assert = require("assert")
class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class Stack {
    constructor() {
        this.head = null
    }


    // TODO: Push an value onto the stack
    push(value) {
        const node = new ListNode(value)
        if (!this.head) {
            this.head = node
            return
        }
        let cur = this.head
        while (cur.next) cur = cur.next
        cur.next = node
    }
    

    // TODO: Pop an value from the stack
    pop() {
        if (!this.head) return null
        let prev = null
        let cur = this.head
        while (cur.next){ 
            prev = cur
            cur = cur.next
        }
        const rv = cur.value
        prev.next = null
        return rv
    }

    // TODO: Peek at the top value without removing it
    peek() {
        if (!this.head) return null
        let prev = null
        let cur = this.head
        while (cur.next){ 
            prev = cur
            cur = cur.next
        }
        return cur.value
    }

    // TODO: Check if the stack is empty
    isEmpty() {
        if (!this.head) return true
        return false
    }

    // TODO: Get the size of the stack
    size() {
        let size = 0
        let cur = this.head
        while (cur) {
            size += 1
            cur = cur.next
        }
        return size
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

}

// Test cases
const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)


stack.print()
assert.strictEqual(stack.pop(), 3, "Test 1 Failed")
assert.strictEqual(stack.peek(), 2, "Test 2 Failed")
assert.strictEqual(stack.size(), 2, "Test 3 Failed")
assert.strictEqual(stack.isEmpty(), false, "Test 4 Failed")

console.log('\x1b[92m%s\x1b[0m', ' * All tests passed');

