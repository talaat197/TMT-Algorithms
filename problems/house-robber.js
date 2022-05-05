/**
You are a professional robber planning to rob houses along a street.
 Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses
  have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house,
 return the maximum amount of money you can rob tonight without alerting the police.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => { // O(n)
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  let dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[nums.length - 1];
};

const robRecursion = (nums, n = nums.length - 1) => { // O(2^n)
  if (n < 0) return 0;
  if (n == 0) return nums[0];

  let pick = nums[n] + rob(nums, n - 2);
  let notPick = rob(nums, n - 1);

  return Math.max(pick, notPick);
};

console.log(rob([4, 1, 2, 7, 5, 3, 1]));
