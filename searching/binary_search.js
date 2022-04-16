/*
    Best Case : O(1)
    Average Case : O(logn)
    Worst Case : O(logn)
*/

function binarySearch(arr, searchValue) {
  const arrayLength = arr.length;
  let lowIndex = 0;
  let highIndex = arrayLength - 1;
  let mid = parseInt((lowIndex + highIndex) / 2);

  while (lowIndex <= highIndex) {
    if (searchValue === arr[mid]) return mid;

    if (searchValue > arr[mid]) {
      lowIndex = mid + 1;
    }
    if (searchValue < arr[mid]) {
      highIndex = mid - 1;
    }

    mid = parseInt((lowIndex + highIndex) / 2);
  }
  // not found
  return -1;
}

function recursionBinarySearch(arr, searchValue, lowIndex, highIndex) {
  // not found
  if (lowIndex > highIndex) return -1;

  mid = parseInt((lowIndex + highIndex) / 2);

  if (arr[mid] === searchValue) return mid;
  
  if (searchValue > arr[mid]) {
    lowIndex = mid + 1;
    return binarySearch(arr, searchValue, lowIndex, highIndex);
  }
    if (searchValue < arr[mid]) {
    highIndex = mid - 1;
    return binarySearch(arr, searchValue, lowIndex, highIndex);
  }
}

let testArray = [1, 2, 3, 4, 5, 6, 7,2];

console.log(binarySearch(testArray, 2));

console.log(recursionBinarySearch(testArray, 2, 0, testArray.length - 1));
