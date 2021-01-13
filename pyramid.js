function pyramid(rows) {


    let k
    let temp = ""
    for (let i = 1; i <= rows; i++) {
        k = 0
        for (let space = 1; space <= rows - i; space++) {
            temp += "  "
        }

        while (k !== 2 * i - 1) {
            temp += "* "
            k++
        }
        temp += "\n"

    }
    return temp

}

console.log(pyramid(5))