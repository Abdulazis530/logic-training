// const binarySearcg = (sorted, value) => {

//     let high = sorted.length - 1
//     let low = 0
//     let mid = 0


//     while (low <= high) {
//         mid = Math.floor((high + low) / 2)
//         if (arr[mid] == value) {
//             return arr[mid]
//         } else if (value > arr[mid]) {
//             low = mid + 1
//         } else {
//             high = mid - 1
//         }
//     }

//     return -1
// }

const expl = (i, x, n) => {
    if (i > 3) return
    if (x < n) {
        console.log(x)
        expl(i + 1, x + 2, n)
    } else {
        console.log(x + n)
        expl(i + 1, x - 2, n)
    }
}


expl(0, 1, 5)