function properFractions(n) {
    let counter = 2;
    let dividers = []
    let result = 0
    let pass = 0
    if (n == 1) return 0
    while (n !== counter) {
        if (n % counter === 0) {
            dividers.push(counter)
        }
        counter++
    }
    counter = 2
    while (counter < n) {
        for (const divider of dividers) {
            if (counter % divider !== 0) {
                pass++
            };
        }
        if (pass === dividers.length) {
            result++
        }
        pass = 0
        counter++
    }
    return result + 1
}

console.log(properFractions(5));