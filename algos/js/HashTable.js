//A data structure that maps keys to values using a hash function.

class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size).fill(null).map(() => []);
    }

    // TODO: Hash a key
    hash(key) {
        // Implement this
    }

    // TODO: Insert a key-value pair
    insert(key, value) {
        // Implement this
    }

    // TODO: Get a value by key
    get(key) {
        // Implement this
    }

    // TODO: Remove a key-value pair
    remove(key) {
        // Implement this
    }
}

// Test cases
const hashTable = new HashTable();
hashTable.insert("name", "Alice");
hashTable.insert("age", 25);

assert.strictEqual(hashTable.get("name"), "Alice", "Test 1 Failed");
hashTable.remove("age");
assert.strictEqual(hashTable.get("age"), undefined, "Test 2 Failed");