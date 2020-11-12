// function doubles(s) {
//     let result = ""
//     let nonSameCharacter = 0
//     for (let i = 0; i < s.length; i++) {

//         let j = i
//         let counter = 1
//         if (s[i] === s[i - 1]) continue
//         if (s[i] !== s[i + 1]) {
//             result += s[i]
//             nonSameCharacter++
//         }
//         if (nonSameCharacter === s.length) {
//             return s
//         }

//         while (s[i] === s[j + 1]) {
//             counter++
//             j++
//         }
//         if (counter > 1 && counter % 2 !== 0) {
//             result += s[i]
//             counter = 1
//         }

//     }

//     return doubles(result)
// }



//other person solution

function doubles(s) {
    const cs = [];
    for (const c of s) {
        if (cs.length != 0 && cs[cs.length - 1] == c)
            cs.pop();
        else
            cs.push(c);
    }
    return cs.join('');
}
console.log(doubles('bbbaaaccaaa'));