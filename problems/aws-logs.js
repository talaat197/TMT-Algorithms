/**
 * An item is represented as an asterisk ( * = ascii decimal 42).
 *  A compartment is represented as a pair of pipes that may or may not have items between them ( | = ascii decimal 124).

Example 1:
Input: s = |**|*|*, startIndices = [1, 1], endIndices = [5, 6]
Output: [2, 3]
Explanation:
The string has a total of 2 closed compartments, one with 2 items and one with 1 item.
For the first pair of indices, (0, 4), the substring |**|*. There are 2 items in a compartment.
For the second pair of indices, (0, 6), the substring is |**|*|* and there are 2 + 1 = 3 items in compartments.
Both of the answers are returned in an array, [2, 3]
Example 2:
Input: s = *|*|, startIndices = [1], endIndices = [3]
Output: [1]
Explanation:
the substring from index = 1 to index = 3 is |*|. There is one compartments with one item in this string.
Constraints:
1 <= m, n <= 10^5
1 <= startIndices[i] <= endIndices[i] <= n
Each character or s is either * or |

 */

const numOfItems = (s, startIndices, endIndices) => {
  const dp = Array(s.length)
  const results = [];
  let count = 0;
  // count number of * before each |
  for(let i=0; i < s.length; i++)
  {
    if(s[i] === '|')
    {
      dp[i] = count;
    }
    else{
      count++
    }
  }
    for(let index = 0; index < startIndices.length; index++)
    {
      let start= startIndices[index] - 1, end=endIndices[index] - 1
      while(s[start] !== '|') start++
      while(s[end] !== '|') end--

      if(start < end)
      {
        results.push(dp[end] - dp[start])
      }
      else{
        results.push(0)
      }
    }

  return results;
}

console.log(numOfItems('|*|*|', [1,1], [4,5]))