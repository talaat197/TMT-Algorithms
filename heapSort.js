

function Heapsort(arr)
{
    maxHeap(arr);

    for(let index = arr.length -1; index > 0; index--)
    {
        [arr[index] , arr[0]] = [arr[0] , arr[index]];
        heapify(arr , index , 0);
    }
}

function maxHeap(arr)
{
    for(let index = parseInt((arr.length / 2)-1) ; index > -1; index--)
    {
        heapify(arr , arr.length , index);
    }
}

function heapify(arr , size , index)
{
    let largest = index;
    let leftIndex = 2*index +1;
    let rightIndex = 2*index +2;
    if(leftIndex < size && arr[leftIndex] > arr[index])
    {
        largest = leftIndex;
    }
    if(rightIndex < size && arr[rightIndex] > arr[largest])
    {
        largest = rightIndex;
    }
    
    if(largest != index)
    {
        [arr[largest] , arr[index]] = [arr[index] , arr[largest]];
        heapify(arr , size , largest);
    }
}

// var arr = [ 5, 12, 11, 13, 4, 6, 7 ];
let arr = [3 , 9 , 2 , 1 , 4 ,5 , 10 , 0 , 1];

Heapsort(arr);

console.log(arr);