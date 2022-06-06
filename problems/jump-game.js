/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  let max = nums[0];
  const size = nums.length;
  if (size === 1) return true;

  for (let i = 0; i < size; i++) {
    if(max <= i && nums[i] == 0) return false // there's no way

    if(i + nums[i] > max) max = i + nums[i]

    if(max >= (size -1)) return true
  }

  return false
};

console.log(canJump([3, 2, 1, 0, 4]));
