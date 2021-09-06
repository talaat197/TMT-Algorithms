/**
 * Time complexity O(V + E)
 * V is the number of nodes
 * E is the number of adjacents
 *
 * space complexity is O(V)
 */

function breadthFirstSearch(graph, rootNode) {
  let queue = [], visited = [];
  queue[0] = rootNode;
  visited[0] = rootNode;
  
  while (queue.length) {
    let visitedNode = queue.shift();

    console.log(visitedNode, queue);

    graph[visitedNode].forEach((neighbour) => {
      if (!visited.includes(neighbour)) {
        visited.push(neighbour);
        queue.push(neighbour);
      }
    });
  }
  console.log(visited);
}

const graph = { 0: [1, 2], 1: [2], 2: [3], 3: [1, 2] };

breadthFirstSearch(graph, 0);
