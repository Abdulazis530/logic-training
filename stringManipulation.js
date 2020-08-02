function stringManipulation(word) {
    if (
        word[0] === "a" ||
        word[0] === "i" ||
        word[0] === "u" ||
        word[0] === "e" ||
        word[0] === "o"
    ) {
        return word;
    } else {
        let sliced = word.slice(1);
        return sliced.concat(word[0], "nyo");
    }
}

console.log(stringManipulation("ayam")); //ayam
console.log(stringManipulation("bebek")); //ebekbnyo

//Buatlah sebuah fungsi untuk memanipulasi string dengan mengikuti aturan sebagai berikut:
//1. Apabila kata diawali huruf vokal, fungsi langsung mengembanglikan kata tersebut
//2. Apabila kata diawali huruf konsonan, huruf konsonan tersebut dipindahkan ke akhir kata dan menambahkan akhiran 'nyo'


//vscode formatter ctr+shift+i