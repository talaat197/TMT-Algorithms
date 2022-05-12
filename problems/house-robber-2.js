var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  else if (nums.length <= 3) return Math.max(...nums);

  let dp = Array(nums.length - 1).fill(0);
  dp[0] = nums[0];
  dp[1] = nums[0];
  dp[2] = nums[0] + nums[2];
  let max = 0;
  for (let i = 3; i < nums.length - 1; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  max = dp[nums.length - 2];


  nums.shift();
  dp = Array(nums.length - 1).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return Math.max(max, dp[nums.length - 1]);
};

console.log(rob([200,3,140,20,10]))