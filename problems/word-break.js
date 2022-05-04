/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreakREcursion = (s, wordDict) => {
  let size = s.length;
  if (s == 0) return true;

  for (let i = 1; i <= size; i++) {
    if (wordDict.includes(s.substring(0, i)) && wordBreak(s.substring(i, size), wordDict)) {
      // O(2^n*s)
      return true;
    }
  }

  return false;
};
var wordBreakDp1 = function (s, wordDict) {
  // dp solution with prefixes
  let size = s.length;
  if (size == 0) return true;

  let dp = Array(size + 1).fill(false);

  for (let i = 1; i <= size; i++) {
    if (dp[i] === false && wordDict.includes(s.substring(0, i))) {
      dp[i] = true;
    }
    if (dp[i] === true) {
      if (i == size) {
        return true;
      }
      for (let j = i + 1; j <= size; j++) {
        if (dp[j] === false && wordDict.includes(s.substring(i, j))) {
          dp[j] = true;
        }
        console.log(dp[j], s.substring(i, j), wordDict.includes(s.substring(i, j)));
        if (j == size && dp[j] === true) {
          return true;
        }
      }
    }
  }

  return false;
};

const wordBreakDp2 = (s, dict) => {
  let size = s.length;
  let dp = Array(size + 1).fill(false);
  dp[size] = true; // empty string base case
  for (var i = size - 1; i >= 0; i--) {
    for (let word of dict) {
      let sub = s.substring(i, i + word.length);
      if (word === sub) {
        dp[i] = dp[i + sub.length];
      }
      if (dp[i] === true) break;
    }
  }

  return dp[0];
};

console.log(wordBreakDp2("leetcode", ["leet", "code"]));
