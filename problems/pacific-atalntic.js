/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    
  const Rows = heights.length
  const Cols = heights[0].length
  let pacific = new Set(), atalntic = new Set() 
  
  const dfs = (r, c, visited, prevHeight) => {
      if(
          r < 0 || c < 0 || r >= Rows || c >= Cols // out of boundary
          ||
          visited.has(key(r, c)) // already visited
          ||
          heights[r][c] < prevHeight // water cannot get to the current cell
        ) return // do nothing the cell will not be included in the visited list
      
      visited.add(key(r,c))
      dfs(r, c +1, visited, heights[r][c]) // right 
      dfs(r, c -1, visited, heights[r][c]) // left
      dfs(r +1, c, visited, heights[r][c]) // down
      dfs(r -1, c, visited, heights[r][c]) // up
  }
  
  for(let c = 0; c < Cols; c++) {
      dfs(0, c, pacific, heights[0][c])
      dfs(Rows -1, c, atalntic, heights[Rows -1][c])
  }
  
  for(let r = 0; r < Rows; r++) {
      dfs(r, 0, pacific, heights[r][0])
      dfs(r, Cols -1, atalntic, heights[r][Cols -1])
  }
  
  let result = []
  for(let r = 0; r < Rows; r++) {
      for(let c = 0; c < Cols; c++) {
          if(pacific.has(key(r,c)) && atalntic.has(key(r, c)) ){
              result.push([r, c])
          }
      }
  }
  return result
};
  
const key = (r,c) => (`${r},${c}`)

console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))