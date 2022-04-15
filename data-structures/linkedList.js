class Node {
    constructor(element)
    {
        this.element = element;
        this.next = null;
    }
}


class LinkedList{
    
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    add(element)
    {
        var node = new Node(element);

        if(!this.head)
        {
            this.head = node;
        }
        else{
            let current = this.head;
            while(current.next)
            {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(element , index)
    {
        if(index > this.size || index < 0) return console.log('enter valid index');
        
        var node = new Node(element);

        if(index == 0)
        {
            node.next = this.head;
            this.head = node;
        }
        else{
            let current = this.head;
            let prev;
            let count = 0;

            while(count < index)
            {
                prev = current;
                current = current.next;
                
                count++;
            }
            prev.next = node;
            node.next = current;
        }
        this.size++;
    }

    removeFrom(index)
    {
        if(index > this.size || index < 0) return console.log('enter valid index');

        if(index == 0)
        {
            this.head = this.head.next;
        }
        else{
            let current = this.head;
            let prev;
            let count = 0;
            while(count < index)
            {
                prev = current;
                current = current.next;
                count++;
            }
            prev.next = current.next;
        }
        this.size--;
    }

    removeElement(element)
    {
        let current = this.head;
        let prev = this.head;
        while(current != null)
        {
            if(current.element == element)
            {
                prev.next = current.next;
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    isEmpty()
    {
        return this.size === 0;
    }
}

var linkedList = new LinkedList();

linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);

linkedList.removeFrom(0);

linkedList.add(2312);

linkedList.removeElement(30);

console.log(linkedList);