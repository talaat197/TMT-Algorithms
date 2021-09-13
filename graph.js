class Graph{
    constructor(sizeOfVertices)
    {
        this.size = sizeOfVertices;
        this.adjList = new Map();
    }

    addVertex(v)
    {
        this.adjList.set(v , []);
    }

    addEdge(v , w)
    {
        this.adjList.get(v).push(w);

        // directed graph
        this.adjList.get(w).push(v);
    }

    printGraph()
    {
        this.adjList.forEach((value , key) => {
            console.log(key , value);
        })

    }
}

var graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(1 , 2);
graph.addEdge(3 , 2);
graph.addEdge(3 , 4);

graph.printGraph();


