// Your task, is to create NxN multiplication table, of size provided in parameter.
// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9


const multiplicationTable = function (size) {
    let nXnTable = []
    for (let i = 1; i <= size; i++) {
        let row = []
        for (let j = i; j <= size * i; j += i) {
            row.push(j)
        }
        nXnTable.push(row)
    }
    return nXnTable
}


console.log(multiplicationTable(3));
console.log(multiplicationTable(3));