/**
 * Optimizing box weights,Given an integer array of the item weights(arr) to be packed,divide the item weights into two subsets, A and B , for packing into the associated boxes while respecting below conditions between A and B.
e.g. n =5 and arr= [3,7,5,6,2]
then return the subset A in increasing order where the sum of A's > sum of B's.
if more than one pair exist return the one with the max total weight.
rules :-
the intersections of A and B is null
The union A and B is equal to the original array
the number of elements in subset A is minimal
The sum of A's weight is greater than the sum of B's weight

Return the subset of A in increasing order where the sum of A' weights is greater than the sum of B's weights
if more than one subSet A exists, return the one with maximum total weight
 */

// O(n Log n)
const optimizeBoxes = (arr) => {
  const maxSum = arr.reduce((a,b) => a + b);

  let sortedArr = arr.sort((a,b) => a - b)

  let subsetAMax = 0, subsetBMax = maxSum
  const subsetA = []
  i = arr.length - 1
  while(i >= 0 && subsetAMax < subsetBMax)
  {
    subsetAMax += sortedArr[i]
    subsetBMax -= sortedArr[i]
    let newLength = subsetA.unshift(sortedArr[i])
    if(newLength >= Math.ceil(arr.length /2)) // you reached the the half of an array condition breaks
    {
      console.log(newLength, subsetA)
      return []; // not found
    }
    if(subsetAMax > subsetBMax && sortedArr[i] === sortedArr[i - 1]) // check if the current number duplicated in set B
    {
      // revert the change
      subsetAMax -= sortedArr[i]
      subsetBMax += sortedArr[i]
      subsetA.shift()
      i--
    }
    i--
  }

  return subsetA;
}


console.log(optimizeBoxes([7,5,4,6,3,1,1]))