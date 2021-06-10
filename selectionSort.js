/**
 * Time Complexity (On2)
 *  Average Case : O(n2)
    Worst Case : O(n2)
    Best case : O(n2)
 */

const selectionSort = (unsortedArr) => {
  for (let index = 0; index < unsortedArr.length; index++) {
    let minIndexValue = index;
    for (let index2 = index + 1; index2 < unsortedArr.length; index2++) {
      if (unsortedArr[index2] < unsortedArr[minIndexValue]) {
        minIndexValue = index2;
      }
    }
    [unsortedArr[index], unsortedArr[minIndexValue]] = [
      unsortedArr[minIndexValue],
      unsortedArr[index],
    ];
  }
  return unsortedArr;
};

data = [1, 10, 5, 23, 11];

console.log(selectionSort(data));
