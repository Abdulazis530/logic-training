
function getActualFloor(numbers, floor) {
    let count = 1
    let result = 0
    while (count <= floor) {

        if (numbers.indexOf(count) === -1) result++
        count++
    }
    return result
}

console.log(
    getActualFloor([4, 13, 10], 15))


