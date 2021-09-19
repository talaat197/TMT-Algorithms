const gridTraveler = (rows , cols) => {
    let table = Array(rows + 1).fill().map(() => Array(cols + 1).fill(0));

    table[1][1] = 1;

    for(let row = 0; row <= rows; row++)
    {
        for(let col = 0; col <= cols; col++)
        {
            const current = table[row][col];
            if(row + 1 <= rows) table[row + 1][col] += current;
            if(col + 1 <= cols) table[row][col + 1] += current;
        }
    }

    return table[rows][cols];
}

console.log(gridTraveler(2,2))