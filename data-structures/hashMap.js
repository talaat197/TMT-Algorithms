class HashTable
{
    constructor()
    {
        this.table = new Array(127);
        this.size = 0;
    }

    _hash(key)
    {
        let hashed = 0;
        for(let i = 0; i< key.length; i++)
        {
            hashed += key.charCodeAt(i);
        }

        return hashed % this.table.length;
    }

    set(key , value)
    {
        let tableIndex = this._hash(key);
        if(this.table[tableIndex] && this.table[tableIndex].length)
        {
            for(let i =0; i< this.table[tableIndex].length; i++)
            {
                if(key == this.table[tableIndex][i][0])
                {
                    this.table[tableIndex][i][1] = value
                    return;
                }
            }
            this.table[tableIndex].push([key , value]);
        }
        else{
            this.table[tableIndex] = [[key , value]];
        }
        this.size++;
    }

    get(key)
    {
        let tableIndex = this._hash(key);
        if(this.table[tableIndex] && this.table[tableIndex].length)
        {
            for(let value of this.table[tableIndex])
            {
                if(value[0] == key)
                {
                    return value;
                }
            }
        }
        else{
            return undefined
        }
    }

    remove(key)
    {
        let tableIndex = this._hash(key);
        if(this.table[tableIndex] && this.table[tableIndex].length)
        {
            for(let index = 0; index < this.table[tableIndex].length; index++)
            {
                if(this.table[tableIndex][index][0] == key)
                {
                    this.table[tableIndex].splice(index , 1);
                    this.size--;
                    return true
                }
            }
        }
        else
        {
            return false;
        }
    }

    display()
    {
        for(let values of this.table)
        {
            if(values)
            {
                for(let value of values)
                {
                    console.log(value);
                }
            }
        }
    }
}


const ht = new HashTable();

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);

// console.log(ht.get("ǻ"))
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]

// console.log(ht.size); // 3
ht.remove("Spain");
ht.display()
