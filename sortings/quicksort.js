/**
 *  Best Case : O(nlog n)
    Average Case : O(n log n)
    Worst Case : O(n^2)
 */

function quicksort(arr , low , high)
{
   if(low < high)
   {
      let sortedElementIndex = partition(arr , low , high);

      quicksort(arr , sortedElementIndex + 1 , high);
      quicksort(arr , low , sortedElementIndex - 1);
   }
   return arr;
}

const partition = (arr , low , high) => {
   let pivot  = arr[high];

   let i = low - 1;
   for(let j = low; j <= high-1 ; j++)
   {
      if(arr[j] < pivot)
      {
         i++;
         // swap
         [arr[j] , arr[i]] = [arr[i] , arr[j]];
      }
   }
   [arr[i+1] , arr[high]] = [arr[high] , arr[i+1]];

   return i+1;
}


let data = [1, 8, 2, 3, 1];

console.log(quicksort(data , 0 , data.length - 1))