/**
 * (i-1)/2  return the parent index
 * i*2  + 1  return the left child
 * i*2 + 2    return the right child
 * 
 * most of the heap operation runs in O(log n)
 */


class Heap
{
    maxHeap(arr)
    {
        for(let index = parseInt((arr.length / 2) -1) ; index > -1; index--)
        {
            this.heapify(arr , arr.length , index);
        }
    }
    heapify(arr , size , index) // we have to start from index size/2 -1 which is the node that has a leaf nodes
    {
        let largestIndex = index;
        let leftIndex = 2*index +1;
        let rightIndex = 2*index +2;

        if(leftIndex < size && arr[leftIndex] > arr[largestIndex])
        {
            largestIndex = leftIndex;
        }
        if(rightIndex < size && arr[rightIndex] > arr[largestIndex])
        {
            largestIndex = rightIndex;
        }
        if(largestIndex != index)
        {
            // swap
            [arr[index] , arr[largestIndex]] = [arr[largestIndex] , arr[index]];
    
            this.heapify(arr , size , largestIndex)
        }
    }

    insert(arr , value)
    {
        if(!arr.length)
        {
            arr = [value];
        }
        else{
            arr.push(value);
            this.maxHeap(arr);
        }
    }

    delete(arr , value)
    {
        if(arr.length)
        {
            for(var index = 0; index < arr.length; index++)
            {
                if(arr[index] == value) break;
            }

            if(index < arr.length)
            {
                [arr[index] , arr[arr.length - 1] ] = [arr[arr.length - 1] , arr[index]]
                
                arr.pop();
                
                this.maxHeap(arr); 
            }
        }
    }
}

var heap = new Heap()

let arr = [3 , 9 , 2 , 1 , 4 ,5];

heap.maxHeap(arr);
console.log(arr);

heap.insert(arr , 10);

heap.delete(arr , 10)

console.log(arr , parseInt((arr.length/2)) -1);