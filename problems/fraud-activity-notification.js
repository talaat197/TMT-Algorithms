/*
 * Complete the 'activityNotifications' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY expenditure
 *  2. INTEGER d
 */
const getMedian = (arr) => {
  let mid = parseInt(arr.length / 2)
  if(arr.length % 2 == 0) // even
  {
      return (arr[mid -1] + arr[mid]) / 2
  }
  return arr[mid]
}
const mergeSort = (arr1, arr2) => {
  let sortedArr = Array(arr1.length + arr2.length)
  let leftIndex = 0, rightIndex = 0, mainIndex = 0;
  while(leftIndex < arr1.length && rightIndex < arr2.length) {
      if(arr1[leftIndex] >= arr2[rightIndex]) {
          sortedArr[mainIndex] = arr2[rightIndex]
          rightIndex++
      }
      else{
          sortedArr[mainIndex] = arr1[leftIndex]
          leftIndex++
      }
      mainIndex++
  }
  while(leftIndex < arr1.length) {
      sortedArr[mainIndex++] = arr1[leftIndex++]
  }
  while(rightIndex < arr2.length) {
      sortedArr[mainIndex++] = arr2[rightIndex++]
  }
  
  return sortedArr;
}
function activityNotifications(expenditure, d) {
  if(d >= expenditure.length) return 0;
  let notifications = 0
  let trailDays = expenditure.slice(0, d)
  trailDays.sort((a,b) => a - b) // O(n log n)
  for(let i = d; i < expenditure.length; i++) { // O(n)
    let median = getMedian(trailDays)
    if(median * 2 <= expenditure[i]) notifications++
    
    trailDays.shift() // remove the first element
    trailDays = mergeSort(trailDays, [expenditure[i]]) // O(n)
    console.log(trailDays)
  }
  
  return notifications;
}

console.log(activityNotifications([4,1,2,4,5,8,6,20] , 3))