function minimumSwaps(arr) {
    let amtSwap = 0
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
            amtSwap++
        }
    }

    return amtSwap

}

console.log(minimumSwaps([1, 3, 2, 5, 8, 7]))