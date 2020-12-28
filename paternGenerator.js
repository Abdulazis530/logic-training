
const createMidlePattern = (c) => {
    //temporary array to store midle patern
    let createMidlePattern = []
    //it will togle pushX if count pattern have 2 as value
    let countPattern = 0;
    let pushX = true;
    //midleindex: store midIndexof temporary array in every loop
    let midIndex;
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
            midIndex = Math.floor(createMidlePattern.length / 2);
            lastData = createMidlePattern.pop()
            /* 
            it will make storageArray like this ["x","o","x"]
            */
            createMidlePattern.splice(midIndex, 0, lastData)
        }
        countPattern++
    }
    return createMidlePattern
}




const paternGenerator = (c) => {
    //slot of caracter including white space
    let slot = c * 2 - 1;
    let result = "";
    let midIndex = Math.floor(c / 2);
    let rightPattern;
    let leftPattern;

    const midlePattern = createMidlePattern(c).join(" ")
    //taking midle patern from its midle to the left
    let left = midlePattern.split(" ").slice(0, midIndex)

    //taking midle patern from its midle to the right
    //I need to copy the value of left array because if you do reverse it will change the original array
    let right = [...left]
    right.reverse()

    //initial top white space is calculated based on total slot avaible and it need to minus by 1 because we dont use right edge
    let topWhiteSpace = slot - (right.length * 2 - 1) - 1

    //setting inital state of result that only consist midlePattern
    result += midlePattern
    //you will see the logic patern of this kata, after every two row from midle, either from midle patern to the bottom or from 
    //midlle patern to top row, the middle patern will remove one of its character, so the counter will watch if its value equal two it will slice left patern and right patern
    let counter = 0

    if (c === 1) return "x"
    for (let i = 1; i < c; i++) {
        //it's for c whit even value
        if (i === 1 && c % 2 === 0) counter = 1

        if (counter === 2) {
            right = right.slice(1)
            left = left.slice(0, -1)
            //for white space handling top pattern lil bit tricky
            topWhiteSpace += 2
            counter = 0
        }
        //repeat is string method to make "x" number of string 
        rightPattern = " ".repeat(topWhiteSpace) + right.join(" ")
        leftPattern = " ".repeat(i) + left.join(" ")
        result = rightPattern + "\n" + result + "\n" + leftPattern
        topWhiteSpace--
        counter++
    }
    return result
}







console.log(paternGenerator(5))
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log(paternGenerator(6))
