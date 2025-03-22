//A collection of nodes connected by edges (directed or undirected).


class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    // TODO: Add a vertex to the graph
    addVertex(vertex) {
        // Implement this
    }

    // TODO: Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        // Implement this
    }

    // TODO: Perform a depth-first search (DFS)
    dfs(startVertex) {
        // Implement this
    }

    // TODO: Perform a breadth-first search (BFS)
    bfs(startVertex) {
        // Implement this
    }
}

// Test cases
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");

assert.deepStrictEqual(graph.dfs("A"), ["A", "B", "C"], "Test 1 Failed");
assert.deepStrictEqual(graph.bfs("A"), ["A", "B", "C"], "Test 2 Failed");