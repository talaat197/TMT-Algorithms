/**
 * Write a function that takes two inputs n and m and outputs the number of unique paths from
 * the top left corner to the bottom right corner of n x m grid
 * Constraints: you can only move down or right 1 unit at a time
 */

let memo = [];
function getUniquePaths(n,m){
  // base case 1, row or 1 colum
  if(n === 1 || m === 1)
    return 1;
  
  return getUniquePaths(n-1,m) + getUniquePaths(n, m-1)
}

console.log(getUniquePaths(3,3))