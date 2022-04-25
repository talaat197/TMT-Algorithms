/**
 
Given coins of different denominations and a total amount of money amount.
Write a function to compute the fewest number of coins that you need to make up that amount.

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Input: coins = [2], amount = 3
Output: -1
 */

const sumCoins = (coins, amount) => {
  let dp = Array(amount + 1).fill(Infinity);

  dp[0] = 0    // the number of coins to get 0  is 0

  for(let subProblem = 1; subProblem < amount + 1; subProblem++)
  {
    for(let coin of coins)
    {
      if(subProblem - coin >= 0)
      {
        dp[subProblem] = Math.min(dp[subProblem], 1 + dp[subProblem - coin])
      }
    }
  }
  console.log(dp)
  return dp[amount] !== Infinity ? dp[amount] : -1
}

console.log(sumCoins([1,2,5], 11))