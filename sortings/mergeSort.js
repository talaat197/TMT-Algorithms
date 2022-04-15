/*
    Best Case : O(nlogn)
    Average Case : O(nlogn)
    Worst Case : O(nlogn)

    Space Complexity: O(n)
*/

/*
Steps:
Have we reached the end of any of the arrays?
    No:
        Compare current elements of both arrays 
        Copy smaller element into sorted array
        Move pointer of element containing smaller element
    Yes:
        Copy all remaining elements of non-empty array
*/

const mergeSort = (arr , first , last) => {
    if(first >= last) return;

    let mid = parseInt((last + first) / 2);
    
    mergeSort(arr , first , mid);
    mergeSort(arr , mid +1  , last);

    merge(arr , first , mid , last);

    return arr;
}

const merge = (arr , first , mid , end) => {
    let length1 = mid - first + 1;
    let length2 = end - mid;

    let L = [];
    let R = [];

    for(let index = 0; index < length1; index++)
    {
        L[index] = arr[first + index];
    }
    // copy from mid to the end to Right array
    for(let index = 0; index < length2; index++)
    {
        R[index] = arr[mid + 1 + index];
    }
    console.log(L , R , first , mid , end)

    let indexOfL = 0 , indexOfR = 0 , mainIndex = first;

    while(indexOfL < length1 && indexOfR < length2)
    {
        if(L[indexOfL] < R[indexOfR])
        {
            arr[mainIndex] = L[indexOfL];
            indexOfL++;
        }
        else{
            arr[mainIndex] = R[indexOfR];
            indexOfR++;
        }
        mainIndex++;
    }

    while(indexOfL < length1)
    {
        arr[mainIndex] = L[indexOfL];
        indexOfL++;
        mainIndex++;
    }

    while(indexOfR < length2)
    {
        arr[mainIndex] = R[indexOfR];
        indexOfR++;
        mainIndex++;
    }
}

let data = [10, 8, 2, 3, 1];

console.log(mergeSort(data , 0 , data.length - 1))