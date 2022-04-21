/**
 * implement selection sort in recursion way
 */

function getMinIndexValue(arr, start, end){
  let minIndex = start
  for(let index = start +1; index <= end; index++)
  {
    if(arr[index] < arr[minIndex])
    {
      minIndex = index;
    }
  }

  return minIndex
}

function selectionSort(arr, start, end){
  // base case we sort all the elements
  if(start >= end) return;

  var minIndexValue = getMinIndexValue(arr, start, end)
  // swap
  let temp = arr[start];
  arr[start] = arr[minIndexValue]
  arr[minIndexValue] = temp;

  selectionSort(arr, start +1, end)
  return arr;
}
const arr = [5,1,3,2,34]
console.log(selectionSort(arr, 0, arr.length-1))