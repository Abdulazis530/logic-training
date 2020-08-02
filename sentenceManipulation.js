
function sentencesManipulation(sentence){
    let words= sentence.split(" ")
    let manipulatedWord=""
    for (let word of words) {
        if(word[0]==="a" ||word[0]==="i"||word[0]==="u"||word[0]==="e"||word[0]==="o"){
            manipulatedWord+=word+" "
        }else{
            let sliced=word.slice(1)
            manipulatedWord+= sliced.concat(word[0],"nyo") +" "
        }
        
    }
    return manipulatedWord

}

console.log(sentencesManipulation('ibu pergi ke pasar bersama aku'));
