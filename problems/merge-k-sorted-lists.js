/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let bigArr = [];
  let tempLists = [...lists];
  let tempCount = 0,
    bigArrCount = 0;

  while (tempLists.length > 1) {
    if (tempCount + 1 >= tempLists.length) {
      // out of boundry
      bigArr[bigArrCount] = tempLists[tempCount];
    } else {
      bigArr[bigArrCount] = merge2Lists(tempLists[tempCount], tempLists[tempCount + 1]);
    }

    bigArrCount++;
    tempCount += 2;

    if (tempCount >= tempLists.length) {
      tempCount = 0;
      bigArrCount = 0;
      // you are done
      tempLists = [...bigArr]; // copy the arr to do better
      bigArr = [];
    }
  }
  return tempLists[0];
};

const merge2Lists = (list1, list2) => {
  const bigList = Array(list1.length + list2.length);

  let index1 = 0,
    index2 = 0,
    bigIndex = 0;

  while (index1 < list1.length && index2 < list2.length && bigIndex < bigList.length) {
    if (list1[index1] <= list2[index2]) {
      bigList[bigIndex] = list1[index1];
      index1++;
    } else {
      bigList[bigIndex] = list2[index2];
      index2++;
    }
    bigIndex++;
  }
  // store left
  while (index1 < list1.length) {
    bigList[bigIndex] = list1[index1];
    index1++;
    bigIndex++;
  }
  // store right
  while (index2 < list2.length) {
    bigList[bigIndex] = list2[index2];
    index2++;
    bigIndex++;
  }
  return bigList;
};

console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);
