function topThreeWords(text) {
  const words = text.split(" ");

words.forEach((e,i)=>{
if(e==="") words.splice(i,1)
})
console.log(words)
words.forEach((e, i) => {
    if (e === " " || e==="") words.splice(i, 1);

    for (let char of e) {
      if (char === char.toUpperCase() ||char===","||char==="."||char=="/" ||char===" ") {
        words.splice(i,1);
      }
      break;
    }
  });

  console.log(words);
  let obj = {};
  for (const word of words) {
    if (!obj[word]) {
      obj[word] = 1;
    } else {
      obj[word]++;
    }
  }
  
  let arr = [];
  for (const key in obj) {
    arr.push([key, obj[key]]);
  }

  const newArr = arr.sort(function (a, b) {
    return b[1] - a[1];
  });
  console.log(newArr)
  if(newArr.length<3){
      return [newArr[0][0],newArr[1][0]]
  }
  return [newArr[0][0], newArr[1][0], newArr[2][0]];
}

// console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"));
// console.log(topThreeWords("a a c b b"));
// console.log(
//   topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// );

console.log(
    topThreeWords("  wont won't won't ")
  )
//