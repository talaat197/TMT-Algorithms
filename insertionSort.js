/*
    Best Case : O(n)
    Average Case : O(n^2)
    Worst Case : O(n^2)
*/

const insertionSort = (arr) => {

    for(let index = 1; index < arr.length ; index++)
    {
        let unSortedElemenet = arr[index]; // select the first unsorted element

        let index2 = index - 1;
        
        while(index2 >= 0  && unSortedElemenet < arr[index2])
        {

            arr[index2 + 1] = arr[index2];  // it shifts element to the right to create a position for an unsorted element
            index2--;
        }
        arr[index2 + 1] = unSortedElemenet;  // insert the unsorted element to it's proper position
    }

    return arr;
}

data = [9, 8, 7, 3, 1]

console.log(insertionSort(data))