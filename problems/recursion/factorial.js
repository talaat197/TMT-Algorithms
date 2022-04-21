/**
 * Write a program and recurrence relation to find the Factorial of n where n>2
 */

function fact(n){
  // base case
  if(n === 1) return 1;

  // 5 * f(4) = 4 * f(3) = 3 * f(2) = 2 * (f(1) -> 1)
  return n*fact(n-1)
}

console.log(fact(5));