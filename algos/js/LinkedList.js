
class LinkedList {
    constructor() {
        this.head = null
    }

    // Add a node to the end
    append(value) {
        const node = new ListNode(value)
        if (!this.head) {
            this.head = node
            return
        }
        let cur = this.head
        while (cur.next) cur = cur.next
        cur.next = node
    }

    // Add a node to the beginning
    prepend(value) {
        const node = new ListNode(value)
        node.next = this.head
        this.head = node
    }

    // Remove all nodes with the given value
    removeAll(value) {
        if (!this.head) throw Error("bro the list is empty")
        while (this.head && this.head.value == value) this.head = this.head.next
        let prev = null
        let cur = this.head

        while (cur) {
            if (value == cur.value) {
                prev.next = cur.next
                cur = prev.next
            } else {
                prev = cur
                cur = cur.next
            }
        }
    }

    // Remove the first node with the given value
    remove(value) {
        if (!this.head) throw Error("bro the list is empty")
        while (this.head && this.head.value == value) {
            this.head = this.head.next
            return
        }
        let prev = null
        let cur = this.head

        while (cur) {
            if (value == cur.value) {
                prev.next = cur.next
                return
            }
            prev = cur
            cur = cur.next
        }
    }

    // Get the size of the list
    size() {
        let size = 0
        let cur = this.head
        while (cur) {
            size += 1
            cur = cur.next
        }
        return size
    }

    // Get the sum of all node values
    sum() {
        let rv_sum = 0
        let cur = this.head
        while (cur) {
            rv_sum += cur.value
            cur = cur.next
        }
        return rv_sum
    }

    // Get the product of all node values
    mul() {
        if (!this.head) return null
        let rv_mul = 1
        let cur = this.head
        while (cur) {
            rv_mul *= cur.value
            cur = cur.next
        }
        return rv_mul
    }

    // Check if the list is empty
    isEmpty() {
        if (this.head) return false
        return true
    }

    // Get the value of the first node
    getFirst() {
        if (this.head) return this.head.value
        return null
    }

    // Get the value of the last node
    getLast() {
        if (!this.head) return null
        let cur = this.head
        let prev = null
        while (cur) {
            prev = cur
            cur = cur.next
        }
        return prev.value
    }

    // Insert a node at a specific index
    insertAt(index, value) {
        if (index < 0 || index > this.size()) throw Error("Invalid index")
        if (index === 0) {
            this.prepend(value)
            return
        }
        const node = new ListNode(value)
        let cur = this.head
        for (let i = 0; i < index - 1; i++) {
            cur = cur.next
        }
        node.next = cur.next
        cur.next = node
    }

    // Remove a node at a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size()) throw Error("Invalid index")
        if (index === 0) {
            this.head = this.head.next
            return
        }
        let cur = this.head
        for (let i = 0; i < index - 1; i++) {
            cur = cur.next
        }
        cur.next = cur.next.next
    }

    // Clear the list
    clear() {
        this.head = null
    }

    // Check if the list contains a value
    contains(value) {
        if (!this.head) return false
        let cur = this.head
        while (cur) {
            if (cur.value == value) return true
            cur = cur.next
        }
        return false
    }

    // Get the index of the first occurrence of a value
    indexOf(value) {
        let i = 0
        if (!this.head) return -1
        let cur = this.head
        while (cur) {
            if (cur.value == value) return i
            cur = cur.next
            i += 1
        }
        return -1
    }

    // Get the index of the last occurrence of a value
    lastIndexOf(value) {
        let i = 0
        let lastIndex = -1
        let cur = this.head
        while (cur) {
            if (cur.value == value) lastIndex = i
            cur = cur.next
            i += 1
        }
        return lastIndex
    }

    // Print the list as a string
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

    // Convert the list to a string
    toString() {
        let cur = this.head
        let rv = []
        while (cur) {
            rv.push(cur.value)
            cur = cur.next
        }
        return rv.join(" -> ")
    }

    // Iterate over the list and apply a callback
    forEach(callback) {
        let cur = this.head
        while (cur) {
            callback(cur.value)
            cur = cur.next
        }
    }

    // Create a new list by applying a callback to each node
    map(callback) {
        const newList = new LinkedList()
        let cur = this.head
        while (cur) {
            newList.append(callback(cur.value))
            cur = cur.next
        }
        return newList
    }

    // Create a new list with nodes that satisfy the callback
    filter(callback) {
        const newList = new LinkedList()
        let cur = this.head
        while (cur) {
            if (callback(cur.value)) {
                newList.append(cur.value)
            }
            cur = cur.next
        }
        return newList
    }

    // Reduce the list to a single value using a callback
    reduce(callback, initialValue) {
        let accumulator = initialValue
        let cur = this.head
        while (cur) {
            accumulator = callback(accumulator, cur.value)
            cur = cur.next
        }
        return accumulator
    }

    // Merge another list into this one
    merge(list) {
        if (!this.head) {
            this.head = list.head
            return this
        }
        let cur = this.head
        while (cur.next) {
            cur = cur.next
        }
        cur.next = list.head
        return this
    }

    // Sort the list using a comparator
    sort(comparator) {
        const values = this.toArray()
        values.sort(comparator)
        this.clear()
        for (const value of values) {
            this.append(value)
        }
    }

    // Remove duplicate values from the list
    removeDuplicates() {
        let cur = this.head
        while (cur) {
            let runner = cur
            while (runner.next) {
                if (runner.next.value === cur.value) {
                    runner.next = runner.next.next
                } else {
                    runner = runner.next
                }
            }
            cur = cur.next
        }
    }

    // Swap two nodes in the list
    swap(node1, node2) {
        if (node1 === node2) return

        let prev1 = null, cur1 = this.head
        while (cur1 && cur1 !== node1) {
            prev1 = cur1
            cur1 = cur1.next
        }

        let prev2 = null, cur2 = this.head
        while (cur2 && cur2 !== node2) {
            prev2 = cur2
            cur2 = cur2.next
        }

        if (!cur1 || !cur2) return

        if (prev1) prev1.next = cur2
        else this.head = cur2

        if (prev2) prev2.next = cur1
        else this.head = cur1

        const temp = cur1.next
        cur1.next = cur2.next
        cur2.next = temp
    }

    // Check if the list is a palindrome
    isPalindrome() {
        const values = this.toArray()
        return values.join("") === values.reverse().join("")
    }

    // Detect if the list has a cycle
    detectCycle() {
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
            if (fast === slow) return true
        }
        return false
    }

    // Find the kth node from the end
    findKthFromEnd(k) {
        let slow = this.head
        let fast = this.head
        for (let i = 0; i < k; i++) {
            if (!fast) return null
            fast = fast.next
        }
        while (fast) {
            slow = slow.next
            fast = fast.next
        }
        return slow.value
    }

    // Convert the list to a circular list
    toCircular() {
        let cur = this.head
        while (cur.next) {
            cur = cur.next
        }
        cur.next = this.head
    }

    // Create a list from an array
    fromArray(array) {
        for (const value of array) {
            this.append(value)
        }
    }

    // Reverse the list
    reverse() {
        let prev = null
        let cur = this.head
        while (cur) {
            const next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }
        this.head = prev
    }

    // Convert the list to an array
    toArray() {
        let cur = this.head
        let rv = []
        while (cur) {
            rv.push(cur.value)
            cur = cur.next
        }
        return rv
    }

    // Get the next value in the list (iterator-like behavior)
    next() {
        if (!this.iterator) {
            this.iterator = this.head
        } else {
            this.iterator = this.iterator.next
        }
        return this.iterator ? this.iterator.value : null
    }
}

// Test cases using assert


const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)

// Test size()
assert.strictEqual(list.size(), 3)

// Test sum()
assert.strictEqual(list.sum(), 6)

// Test mul()
assert.strictEqual(list.mul(), 6)

// Test isEmpty()
assert.strictEqual(list.isEmpty(), false)

// Test getFirst()
assert.strictEqual(list.getFirst(), 1)

// Test getLast()
assert.strictEqual(list.getLast(), 3)

// Test contains()
assert.strictEqual(list.contains(2), true)
assert.strictEqual(list.contains(4), false)

// Test indexOf()
assert.strictEqual(list.indexOf(3), 2)

// Test lastIndexOf()
list.append(2)
assert.strictEqual(list.lastIndexOf(2), 3)

// Test remove()
list.remove(2)
assert.strictEqual(list.contains(2), true) // Only one 2 was removed

// Test removeAll()
list.removeAll(2)
assert.strictEqual(list.contains(2), false)

// Test clear()
list.clear()
assert.strictEqual(list.size(), 0)

// Test fromArray()
list.fromArray([4, 5, 6])
assert.strictEqual(list.size(), 3)

// Test reverse()
list.reverse()
assert.deepStrictEqual(list.toArray(), [6, 5, 4])

// Test detectCycle()
assert.strictEqual(list.detectCycle(), false)
list.toCircular()
assert.strictEqual(list.detectCycle(), true)

console.log("All tests passed!")