/**
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// let memo;
var uniquePaths = function(m, n) {
  
  let memo = Array(m).fill().map(e => Array(n).fill(0))

  memo[m-1][n-1] = 1; // base case

  let row = m-1, col = n -1

  while(row >= 0 && col >= 0) {
      // calculate me
      if(row !== m-1 && n !== n-1) {
        memo[row][col] = memo[row][col +1] + memo[row +1][col]
      }
      // loop left
      for(let i = col -1; i >= 0; i--) {
           memo[row][i] = memo[row][i+1]
          if(memo[row +1] !== undefined) {
             memo[row][i] +=  memo[row +1][i]
          }
      }
      // loop top
      for(let i = row -1; i >= 0; i--) {
           memo[i][col] = memo[i +1][col]
          if(memo[i][col +1] !== undefined) {
             memo[i][col] += memo[i][col +1]
          }
      }
      row--
      col--
  }
  console.log(memo)
  return memo[0][0]
};

console.log(uniquePaths(3, 7))


