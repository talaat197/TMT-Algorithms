/**
 * Time complexity O(V + E)
 * V is the number of nodes
 * E is the number of adjacents
 *
 * space complexity is O(V)
 */

function depthFirstSearch(graph, rootNode) {
  let stack = [], visited = [];
  stack[0] = rootNode;
  visited[0] = rootNode;

  while (stack.length) {
    let visitedNode = stack.pop();

    console.log(visitedNode, stack);

    graph[visitedNode].forEach((neighbour) => {
      if(!visited.includes(neighbour))
      {
        stack.push(neighbour)
        visited.push(neighbour)
      }
    })
  }
}

const graph = { 0: [1, 2], 1: [2], 2: [3], 3: [1, 2] };

depthFirstSearch(graph, 0);
