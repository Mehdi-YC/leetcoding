# leetcoding
trying leetcode in Rust, Pyhon,JS and maybe Go...Zig....Ocaml.... well, any new flashy language ,maybe Nim?

---
---


# Essential Patterns & Algorithms for Interviews and Problem Solving

## 1. Two Pointers
Used for problems involving arrays or linked lists where you need to find pairs, subarrays, or perform operations in-place.

### Common Problems:
- [ ] **Two Sum**: Find two numbers in an array that add up to a target.
- [ ] **Remove Duplicates from Sorted Array**: Remove duplicates in-place.
- [ ] **Palindrome Check**: Check if a string or linked list is a palindrome.
- [ ] **Merge Two Sorted Arrays**: Merge two sorted arrays into one.

### Time Complexity:
- Typically **O(n)**.

## 2. Sliding Window
Used for problems involving subarrays or substrings where you need to find a window that satisfies certain conditions.

### Common Problems:
- [ ] **Maximum Sum Subarray of Size K**: Find the maximum sum of any subarray of size k.
- [ ] **Longest Substring Without Repeating Characters**: Find the longest substring with unique characters.
- [ ] **Minimum Window Substring**: Find the smallest substring containing all characters of another string.

### Time Complexity:
- Typically **O(n)**.

## 3. Fast and Slow Pointers (Floyd’s Algorithm)
Used for problems involving cycles or finding the middle of a linked list.

### Common Problems:
- [ ] **Detect Cycle in a Linked List**: Check if a linked list has a cycle.
- [ ] **Find the Middle of a Linked List**: Find the middle node of a linked list.
- [ ] **Happy Number**: Determine if a number is a happy number.

### Time Complexity:
- Typically **O(n)**.

## 4. Binary Search
Used for problems involving sorted arrays or search spaces where you can eliminate half of the possibilities at each step.

### Common Problems:
- [ ] **Search in a Sorted Array**: Find the index of a target value in a sorted array.
- [ ] **Find First/Last Position of an Element**: Find the first or last occurrence of a target in a sorted array.
- [ ] **Search in Rotated Sorted Array**: Search in a sorted array that has been rotated.

### Time Complexity:
- Typically **O(log n)**.

## 5. Depth-First Search (DFS)
Used for problems involving trees, graphs, or backtracking.

### Common Problems:
- [ ] **Path Sum**: Check if a path in a binary tree sums to a target value.
- [ ] **Number of Islands**: Count the number of islands in a 2D grid.
- [ ] **Permutations**: Generate all permutations of a set.

### Time Complexity:
- Typically **O(V + E)** for graphs.

## 6. Breadth-First Search (BFS)
Used for problems involving level-order traversal or finding the shortest path in unweighted graphs.

### Common Problems:
- [ ] **Level Order Traversal**: Traverse a binary tree level by level.
- [ ] **Shortest Path in a Binary Matrix**: Find the shortest path in a 2D grid.
- [ ] **Word Ladder**: Find the shortest transformation sequence from one word to another.

### Time Complexity:
- Typically **O(V + E)** for graphs.

## 7. Dynamic Programming (DP)
Used for problems where the solution can be broken down into overlapping subproblems.

### Common Problems:
- [ ] **Fibonacci Sequence**: Compute the nth Fibonacci number.
- [ ] **Longest Common Subsequence (LCS)**: Find the longest subsequence common to two strings.
- [ ] **Knapsack Problem**: Maximize the value of items in a knapsack.
- [ ] **Coin Change**: Find the minimum number of coins needed to make a target amount.

### Time Complexity:
- Typically **O(n * m)** for 2D DP problems.

## 8. Backtracking
Used for problems where you need to explore all possible solutions (e.g., permutations, combinations).

### Common Problems:
- [ ] **N-Queens**: Place N queens on an N×N chessboard such that no two queens threaten each other.
- [ ] **Subsets**: Generate all subsets of a set.
- [ ] **Combination Sum**: Find all combinations of numbers that sum to a target.

### Time Complexity:
- Typically **O(2^n)**.

## 9. Greedy Algorithms
Used for problems where a locally optimal choice leads to a globally optimal solution.

### Common Problems:
- [ ] **Activity Selection**: Select the maximum number of non-overlapping activities.
- [ ] **Huffman Coding**: Construct an optimal prefix code for data compression.
- [ ] **Fractional Knapsack**: Maximize the value of items in a knapsack, allowing fractional items.

### Time Complexity:
- Typically **O(n log n)**.

## 10. Divide and Conquer
Used for problems that can be broken down into smaller, independent subproblems.

### Common Problems:
- [ ] **Merge Sort**: Sort an array using the divide-and-conquer approach.
- [ ] **Quick Sort**: Sort an array using partitioning.
- [ ] **Closest Pair of Points**: Find the closest pair of points in a 2D plane.

### Time Complexity:
- Typically **O(n log n)**.

## 11. Union-Find (Disjoint Set Union)
Used for problems involving connected components or dynamic connectivity.

### Common Problems:
- [ ] **Number of Connected Components**: Count the number of connected components in a graph.
- [ ] **Kruskal’s Algorithm**: Find the minimum spanning tree of a graph.

### Time Complexity:
- Typically **O(n * α(n))**, where **α(n)** is the inverse Ackermann function.

## 12. Topological Sort
Used for problems involving directed acyclic graphs (DAGs) where you need to order nodes based on dependencies.

### Common Problems:
- [ ] **Course Schedule**: Determine if you can finish all courses given prerequisites.
- [ ] **Task Scheduling**: Schedule tasks with dependencies.

### Time Complexity:
- Typically **O(V + E)**.

## 13. Trie (Prefix Tree)
Used for problems involving strings and prefixes.

### Common Problems:
- [ ] **Implement a Trie**: Insert, search, and delete words in a trie.
- [ ] **Longest Common Prefix**: Find the longest common prefix among a set of strings.
- [ ] **Word Search II**: Find all words in a 2D grid using a trie.

### Time Complexity:
- Typically **O(L)**, where **L** is the length of the word.

## 14. Monotonic Stack
Used for problems where you need to find the next greater or smaller element.

### Common Problems:
- [ ] **Next Greater Element**: Find the next greater element for each element in an array.
- [ ] **Largest Rectangle in Histogram**: Find the largest rectangle that can be formed in a histogram.

### Time Complexity:
- Typically **O(n)**.

## 15. Kadane’s Algorithm
Used for problems involving maximum subarray sums.

### Common Problems:
- [ ] **Maximum Subarray**: Find the contiguous subarray with the largest sum.
- [ ] **Maximum Product Subarray**: Find the contiguous subarray with the largest product.

### Time Complexity:
- Typically **O(n)**.

## 16. Bit Manipulation
Used for problems involving binary representations and bitwise operations.

### Common Problems:
- [ ] **Single Number**: Find the number that appears once in an array where every other number appears twice.
- [ ] **Count Set Bits**: Count the number of 1s in the binary representation of a number.
- [ ] **Power of Two**: Check if a number is a power of two.

### Time Complexity:
- Typically **O(1) to O(log n)**.

---

This list covers the most important patterns and algorithms used in coding interviews. Mastering these will help you solve a wide variety of problems efficiently!

---
---
# what i need to implement

- [ ] **Stack:** A Last-In-First-Out (LIFO) data structure.

- [ ] **Queue:** A First-In-First-Out (FIFO) data structure.

- [ ] **Doubly Linked List:** A linked list where each node has both next and prev pointers.

- [ ] **Binary Tree:** A tree data structure where each node has at most two children.

- [ ] **Binary Search Tree (BST):** A binary tree with a specific ordering property.

- [ ] **Heap:** A specialized tree-based data structure used for priority queues.

- [ ] **Graph:** A collection of nodes connected by edges (directed or undirected).

- [ ] **Hash Table:** A data structure that maps keys to values using a hash function.


# repos to check

[awesome-algorithms by tayllan](https://github.com/tayllan/awesome-algorithms)

[awesome DSA](https://github.com/otabek-kholmirzaev/awesome-dsa)

## vizualisation tools:
https://thimbleby.gitlab.io/algorithm-wiki-site/wiki/bubble_sort/
https://visualgo.net/
https://www.cs.usfca.edu/~galles/visualization/Algorithms.html