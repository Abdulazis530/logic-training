function balancedNum(number) {
    const stringNumber = number.toString()
    const digit = stringNumber.length
    if (digit === 1 || digit === 2) return 'Balanced'
    let sum1 = 0
    let sum2 = 0
    if (digit > 2) {
        let middle = Math.floor(digit / 2)
        for (let i = 0; i < (digit % 2 === 0 ? middle - 1 : middle); i++)
            sum1 += Number(stringNumber[i])
        for (let i = digit - 1; i > middle; i--)
            sum2 += Number(stringNumber[i])
    }
    return sum2 === sum1 ? "Balanced" : "Not Balanced"
}




// console.log(balancedNum(1024), "Balanced")
// console.log(balancedNum(959), "Balanced")
// console.log(balancedNum(13), "Balanced")
// console.log(balancedNum(432), "Not Balanced")
console.log(balancedNum(56239814), "Balanced")