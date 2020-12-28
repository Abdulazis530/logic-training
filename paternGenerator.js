
const createMidlePattern = (c) => {
    //temporary array to store midle patern
    let createMidlePattern = []

    //it will togle pushX if count pattern have 2 as value
    let countPattern = 0;
    let pushX = true;

    //midleindex: store midleIndexof temporary array in every loop
    let midleIndex;
    //midleindex: store temporary array poped data  in every loop
    let lastData;
    for (let i = 0; i < c; i++) {

        //checkpoint 1 : to change pushed data to temporary array and setting it again to zero 
        if (countPattern === 2) {
            pushX = !pushX
            countPattern = 0
        }

        //if pushX true it will store "x" else will push "o" 
        createMidlePattern.push(pushX ? "x" : "o")
        /*
        first, it will push data and ignore the arrangement
        > let say c =3 when i=3, temporary array will have data like this = ["x","x","o"]
        */
        if (createMidlePattern.length > 2) {
            midleIndex = Math.floor(createMidlePattern.length / 2);
            lastData = createMidlePattern.pop()

            /* 
            it will make storageArray like this ["x","o","x"]
            */
            createMidlePattern.splice(midleIndex, 0, lastData)
        }
        countPattern++
    }
    return createMidlePattern.join(" ")
}




const paternGenerator = (c) => {

    //membuat pola tengah
    let result = ""
    let midleIndex = Math.floor(c / 2)
    if (c === 1) return "x"
    const midlePattern = createMidlePattern(c)

    let left = midlePattern.split(" ").slice(0, midleIndex).join(" ")
    let right = left.split(" ").reverse().join(" ")
    let totalChar = c * 2 - 1
    let topWhiteSpace = totalChar - right.length - 1
    let rightPattern
    let leftPattern
    result += midlePattern
    let counter = 0
    for (let i = 1; i < c; i++) {

        if (counter === 2) {
            right = right.slice(1)
            left = left.slice(0, -1)
            counter = 0
        }

        rightPattern = " ".repeat(topWhiteSpace) + right
        leftPattern = " ".repeat(i) + left
        result = rightPattern + "\n" + result + "\n" + leftPattern
        topWhiteSpace--
        counter++
    }
    console.log(result)
}







console.log(paternGenerator(5))
console.log(paternGenerator(6))
