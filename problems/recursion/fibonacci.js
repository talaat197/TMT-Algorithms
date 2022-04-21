/**
 * Write a program and recurrence relation to find the Fibonacci series of n where n>2 . 
 */

function fib(n){
  if(n === 0) return 0

  if(n === 1) return 1;

  return fib(n-1) + fib(n-2)
}

console.log(fib(6));