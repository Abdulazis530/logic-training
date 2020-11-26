
function snail(array) {
    const result = []

    while (array.length) {
        //take data from top side
        result.push(...array.shift())

        //take data from right side
        array.map(row => result.push(row.pop()))

        //take bottom side and right side
        array.reverse().map(row => row.reverse())
    }
    return result

}



console.log(snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))

//output:
// [1, 2, 3, 6, 9, 8, 7, 4, 5]