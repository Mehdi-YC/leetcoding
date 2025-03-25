
const assert = require("assert")
// =========================
// 1. Binary Search
// =========================
/**
 * Binary Search: Searches for a target value in a sorted array.
 * Time Complexity: O(log n)
 */
function binarySearch(arr, target) {
    if (target < arr[0] || target > arr[arr.length-1]) return -1
    let start  = 0
    let end    = arr.length -1
    let needle = Math.floor(arr.length/2)

    while (start<=end){
        if(target>arr[needle]) {
            end = needle -1
            needle = Math.floor((end + start) / 2)
        }
        else if (target < arr[needle]){
            start = needle +1
            needle = Math.floor((start + end) / 2)
            
        }
        else return needle
    }
    return -1


}

// Test cases
const sortedArray = [1, 3, 5, 7, 9];
assert.strictEqual(binarySearch(sortedArray, 5), 2, "Binary Search Test 1 Failed");
assert.strictEqual(binarySearch(sortedArray, 10), -1, "Binary Search Test 2 Failed");

// Quiz
// Q1: What is the time complexity of binary search?
// A1: O(log n)

// Q2: What happens if the array is not sorted?
// A2: Binary search will not work correctly.

// =========================
// 2. Merge Sort
// =========================
/**
 * Merge Sort: Sorts an array using the divide-and-conquer approach.
 * Time Complexity: O(n log n)
 */
function mergeSort(arr) {
    function mergeSortAlgorithm(arr,start,end){
        if (start>=end) return arr

        let middle = Math.floor((start+end)/2)
        mergeSortAlgorithm(arr,start,middle)
        mergeSortAlgorithm(arr,middle+1,end)
        merge(arr,start,middle,end)
    }

    function merge(data, left, middle, right) {
        let left_partition = data.slice(left, middle + 1);
        let right_partition = data.slice(middle + 1, right + 1); 

        let leftIdx = 0, rightIdx = 0, dataIdx = left;

        while (leftIdx < left_partition.length && rightIdx < right_partition.length) {
            if (left_partition[leftIdx] <= right_partition[rightIdx]) {
                data[dataIdx++] = left_partition[leftIdx++];
            } else {
                data[dataIdx++] = right_partition[rightIdx++];
            }
        }

        // Copy remaining elements
        while (leftIdx < left_partition.length) {
            data[dataIdx++] = left_partition[leftIdx++];
        }
        while (rightIdx < right_partition.length) {
            data[dataIdx++] = right_partition[rightIdx++];
        }
    }
    mergeSortAlgorithm(arr,0,arr.length-1)
    return arr
}

// Test cases
const unsortedArray = [9, 3, 7, 5, 1];
assert.deepStrictEqual(mergeSort(unsortedArray), [1, 3, 5, 7, 9], "Merge Sort Test Failed");

// Quiz
// Q1: What is the time complexity of merge sort?
// A1: O(n log n)

// Q2: What is the space complexity of merge sort?
// A2: O(n)

// =========================
// 3. Quick Sort
// =========================
/**
 * Quick Sort: Sorts an array using a pivot element.
 * Time Complexity: O(n log n) on average, O(n^2) in the worst case.
 */
function quickSort(arr) {
    // TODO: Implement quick sort
}

// Test cases
const unsortedArray2 = [9, 3, 7, 5, 1];
//assert.deepStrictEqual(quickSort(unsortedArray2), [1, 3, 5, 7, 9], "Quick Sort Test Failed");

// Quiz
// Q1: What is the worst-case time complexity of quick sort?
// A1: O(n^2)

// Q2: How can you avoid the worst-case scenario in quick sort?
// A2: Use a randomized pivot or median-of-three pivot selection.

// =========================
// 4. Depth-First Search (DFS)
// =========================
/**
 * DFS: Traverses a graph or tree depth-first.
 * Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
 */
function dfs(graph, startVertex) {
    // TODO: Implement DFS
}

// Test cases
const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"],
};
//assert.deepStrictEqual(dfs(graph, "A"), ["A", "B", "D", "E", "F", "C"], "DFS Test Failed");

// Quiz
// Q1: What is the time complexity of DFS?
// A1: O(V + E)

// Q2: What data structure is typically used to implement DFS?
// A2: A stack (or recursion).

// =========================
// 5. Breadth-First Search (BFS)
// =========================
/**
 * BFS: Traverses a graph or tree breadth-first.
 * Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
 */
function bfs(graph, startVertex) {
    // TODO: Implement BFS
}

// Test cases
//assert.deepStrictEqual(bfs(graph, "A"), ["A", "B", "C", "D", "E", "F"], "BFS Test Failed");

// Quiz
// Q1: What is the time complexity of BFS?
// A1: O(V + E)

// Q2: What data structure is typically used to implement BFS?
// A2: A queue.

// =========================
// 6. Dijkstra's Algorithm
// =========================
/**
 * Dijkstra's Algorithm: Finds the shortest path from a start vertex to all other vertices in a weighted graph.
 * Time Complexity: O(V^2) with an adjacency matrix, O(E + V log V) with a priority queue.
 */
function dijkstra(graph, startVertex) {
    // TODO: Implement Dijkstra's algorithm
}

// Test cases
const weightedGraph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 },
};
//assert.deepStrictEqual(dijkstra(weightedGraph, "A"), { A: 0, B: 1, C: 3, D: 4 }, "Dijkstra Test Failed");

// Quiz
// Q1: What is the time complexity of Dijkstra's algorithm with a priority queue?
// A1: O(E + V log V)

// Q2: Does Dijkstra's algorithm work with negative weights?
// A2: No, it does not.

// =========================
// 7. Knapsack Problem (0/1)
// =========================
/**
 * Knapsack Problem: Maximizes the value of items in a knapsack without exceeding its capacity.
 * Time Complexity: O(n * W), where n is the number of items and W is the capacity.
 */
function knapsack(weights, values, capacity) {
    // TODO: Implement the 0/1 Knapsack problem
}

// Test cases
const weights = [10, 20, 30];
const values = [60, 100, 120];
const capacity = 50;
//assert.strictEqual(knapsack(weights, values, capacity), 220, "Knapsack Test Failed");

// Quiz
// Q1: What is the time complexity of the 0/1 Knapsack problem?
// A1: O(n * W)

// Q2: What is the space complexity of the 0/1 Knapsack problem?
// A2: O(n * W)

// =========================
// 8. Longest Common Subsequence (LCS)
// =========================
/**
 * LCS: Finds the longest subsequence common to two strings.
 * Time Complexity: O(m * n), where m and n are the lengths of the two strings.
 */
function lcs(str1, str2) {
    // TODO: Implement LCS
}

// Test cases
//assert.strictEqual(lcs("ABCDEF", "AEBDF"), 4, "LCS Test Failed");

// Quiz
// Q1: What is the time complexity of the LCS algorithm?
// A1: O(m * n)

// Q2: What is the space complexity of the LCS algorithm?
// A2: O(m * n)

// =========================
// 9. Fibonacci Sequence (Dynamic Programming)
// =========================
/**
 * Fibonacci Sequence: Computes the nth Fibonacci number using dynamic programming.
 * Time Complexity: O(n)
 */
let memo_fibo  = new Map()
memo_fibo.set(0, 0)
memo_fibo.set(1,1)
function fibonacci(n) {
    
    if (memo_fibo.has(n)) return memo_fibo.get(n)
    memo_fibo.set(n ,  fibonacci(n-2) + fibonacci(n-1))
    return memo_fibo.get(n)
}

// Test cases
assert.strictEqual(fibonacci(10), 55, "Fibonacci Test Failed");

// Quiz
// Q1: What is the time complexity of the Fibonacci algorithm using dynamic programming?
// A1: O(n)

// Q2: What is the space complexity of the Fibonacci algorithm using dynamic programming?
// A2: O(n)

// =========================
// 10. Kadane's Algorithm
// =========================
/**
 * Kadane's Algorithm: Finds the maximum sum of a contiguous subarray.
 * Time Complexity: O(n)
 */
function kadane(arr) {
    // TODO: Implement Kadane's algorithm
}

// Test cases
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//assert.strictEqual(kadane(arr), 6, "Kadane's Test Failed");

// Quiz
// Q1: What is the time complexity of Kadane's algorithm?
// A1: O(n)

// Q2: What is the space complexity of Kadane's algorithm?
// A2: O(1)