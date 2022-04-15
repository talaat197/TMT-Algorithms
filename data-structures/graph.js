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

    bfs(root)
    {
        let visited = [root];
        let queue = [root];
        while(queue.length)
        {
            let node = queue.shift();
            console.log('visiting node' , node);
            this.adjList.get(node).forEach(adjNode => {
                if(!visited.includes(adjNode))
                {
                    visited.push(adjNode);
                    queue.push(adjNode);
                    
                }
            })
        }
    }

    depthFirstSearch(root)
    {
        let visited = [root] , stack = [root];
        while(stack.length)
        {
            let node = stack.pop();
            console.log('visiting node' , node)

            this.adjList.get(node).forEach(adjNode => {
                if(!visited.includes(adjNode))
                {
                    visited.push(adjNode);
                    stack.push(adjNode);
                }
            })
        }
    }
}

var graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);

graph.addEdge(1 , 2);
graph.addEdge(1 , 5);
graph.addEdge(5 , 6);
graph.addEdge(5 , 7);
graph.addEdge(3 , 2);
graph.addEdge(3 , 4);
graph.addEdge(2 , 6);

// graph.printGraph();

graph.bfs(1);


