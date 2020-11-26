// function partSums(ls) {
//     const result = []
//     const iterator = [...ls].length
//     for (let index = 0; index < iterator; index++) {
//         let sum = ls.reduce((accumulator, currentvalue) => accumulator + currentvalue)
//         result.push(sum)
//         ls.shift()
//     }
//     result.push(0)
//     return result
// }



// function partSums(ls) {
//     const result = []
//     const loop = (ls) => {
//         if (!ls.length) {
//             result.push(0)
//             return
//         }
//         let sum = ls.reduce((acc, curr) => acc + curr)
//         ls.shift()
//         result.push(sum)

//         loop(ls)
//     }

//     loop(ls)
//     return result
// }

function partSums(ls) {
    ls.unshift(0);
    let sum = ls.reduce((p, c) => p + c, 0);
    return ls.map(v => sum = sum - v);
}
console.log(partSums([0, 1, 3, 6, 10]));
console.log(
    partSums([1, 2, 3, 4, 5, 6])

)

