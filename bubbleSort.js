/**
 * Time complexity O(n2)
 *  Average Case : O(n2)
    Worst Case : O(n2)
    Best case : O(n)
 *
 * space complexity is O(1)
 */

const bubblesort = (arr) => {
    let swapped = false;
    for(let index = 0 ; index < arr.length ; index++)
    {
        for(let index2 = 0; index2 < (arr.length - index - 1) ; index2++)
        {
            if(arr[index2] > arr[index2 + 1])
            {
                let temp = arr[index2 + 1]
                arr[index2 + 1] = arr[index2]
                arr[index2] = temp
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr;
}

data = [10, 20, 30, 40, 50]

console.log(bubblesort(data))