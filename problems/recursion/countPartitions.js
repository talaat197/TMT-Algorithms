/**
 * write a function that counts the number of ways you can partition n objects
 * using parts up to m ( m >= 0)
 */

function countParts(n,m){
  // base case 
  if(n === 0 || n === 1 || m === 1) return 1

  if(m === 0 || n < 0) return 0

  return countParts(n - m, m) + countParts(n , m -1)
}


console.log(countParts(6,4))