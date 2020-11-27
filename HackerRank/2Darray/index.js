
function hourglassSum(arr) {
    //find limit for looping
    const limit = arr.length - 3
    //why arr.length-3 ?? because maximum dimension in length for each hourglas is 3 and size of array is 6 some maximum number of hourglases we can made only 4 per row.
    //temporary array
    const hourGlasses = []
    //do loop for each row using limit
    for (let row = 0; row <= limit; row++) {
        //loop for each collom using limit
        for (let col = 0; col <= limit; col++) {
            let topHourGlass = arr[row][col] + arr[row][col + 1] + arr[row][col + 2]
            let midHourGlass = arr[row + 1][col + 1]
            let bottomHourGlass = arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2]
            hourGlasses.push(topHourGlass + midHourGlass + bottomHourGlass)
        }
    }

    return Math.max(...hourGlasses)
}



console.log(hourglassSum(
    [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]]

))