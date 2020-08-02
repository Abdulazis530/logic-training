function weirdMultiply(sentence) {
  let numStr = sentence.toString();

  if (numStr.length === 1) return parseInt(numStr);

  if (numStr.length > 1) {
    let mult = numStr[0];

    for (let i = 1; i < numStr.length; i++) {
      mult *= numStr[i];
    }

    return weirdMultiply(mult);
  }
}

console.log(weirdMultiply(39)); //3*9=27=>2*7=>14=>1*4=>4
console.log(weirdMultiply(999)); //9*9*9=729=>7*2*9=126=>1*2*6=12=>1*2=>2
console.log(weirdMultiply(3)); //3

