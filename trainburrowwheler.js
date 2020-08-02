//here even exists a transformation, which brings equal symbols closer together, it is called the Burrows-Wheeler-Transformation. The forward transformation works as follows: Let's say we have a sequence with length n, first write every shift of that string into a n x n matrix:

//Input: "bananabar"

// b a n a n a b a r
// r b a n a n a b a
// a r b a n a n a b
// b a r b a n a n a
// a b a r b a n a n
// n a b a r b a n a
// a n a b a r b a n
// n a n a b a r b a
// a n a n a b a r b

//               .-.
// a b a r b a n a n
// a n a b a r b a n
// a n a n a b a r b
// a r b a n a n a b
// b a n a n a b a r <- 4
// b a r b a n a n a
// n a b a r b a n a
// n a n a b a r b a
// r b a n a n a b a
//                '-'

// Output: ("nnbbraaaa", 4)

// Of course we want to restore the original input, therefore you get the following hints:

// 1.The output contains the last matrix column.
// 2.The first column can be acquired by sorting the last column.
// 3.For every row of the table: Symbols in the first column follow on symbols in the last column, in the same way they do in the input string.
// 4.You don't need to reconstruct the whole table to get the input back.
// Goal
// The goal of this Kata is to write both, the encode and decode functions. Together they should work as the identity function on lists. (Note: For the empty input, the row number is ignored.)

// function encode(s) {
//   let arr1 = [];
//   for (let e of s) {
//     arr1.push(e);
//   }

//   let arr2 = [arr1];

//   for (let i = 0; i < arr1.length; i++) {
//     arr1.unshift(arr1[arr1.length - 1]);
//     arr1.pop();

//     let temp = [...arr1];
//     arr2.push(temp);
//     temp = [];
//   }

//   arr2.pop();
//   arr2.sort();
//   let result = [];
//   let temp = "";
//   arr2.forEach((e, i) => {
//     e.forEach((cE, i) => {
//       if (i === e.length - 1) temp += cE;
//     });
//     const joined = e.join("");
//     if (joined === s) {
//       result.push(i);
//     }
//   });
//   result.unshift(temp);
//   if (s !== "") return result;

//   return ["", -1];
// }

// function decode(s, i) {
//   let chippered = [];
//   for (let e of s) {
//     chippered.push(e);
//   }
//   let bigArray = [];

//   let chipperedSort = [...chippered].sort();

//   for (let j = 0; j < chippered.length; j++) {
//     let medArr = [];
//     medArr = [chippered[j], chipperedSort[j]];
//     bigArray.push(medArr);
//     medARr = [];
//   }
//   bigArray.sort();

//   for (let k = 0; k < chippered.length - 2; k++) {
//     bigArray.forEach((e, l) => e.unshift(chippered[l]));
//     bigArray.sort();
//   }

//   return bigArray[i].join("");
// }


function encode(s) {
  let result = ["",-1];
  let tableauDeTranslation = [];
  if(s.length > 0){
    // 1ère Étape : Construction Matrice
    let transitif = s;
    console.log("bahasa apa si")
    console.log(transitif)
    for(let i = 0; i < s.length; ++i){
      transitif = rotationDeChaine(transitif);
      tableauDeTranslation.push(transitif);
    }
    // 2ème Étape : Triage du tableau
    tableauDeTranslation = tableauDeTranslation.sort();
    console.log(tableauDeTranslation)
    // 3ème Étape : Construction du résultat de l'encodage
    let chaineFinale = "";
     for(let j = 0; j < tableauDeTranslation.length; ++j){ 
      chaineFinale += tableauDeTranslation[j][tableauDeTranslation.length - 1];
    }
 
    result.length = 0;
    result.push(chaineFinale, tableauDeTranslation.indexOf(s));
  }
  return result;
}
function rotationDeChaine(chaine){
  let result = "";
  for(let i = 0; i < chaine.length; ++i){
      if(i === 0){
        result += chaine[chaine.length - 1];
      } else {
        result += chaine[i - 1];
      }
    }
    
  return result;
}
console.log(encode("bananabar")); //["nnbbraaaa",4]
console.log(encode("Humble Bundle")); //[ "e emnllbduuHB", 2 ]
// console.log(encode("Mellow Yellow")); //[ "ww MYeelllloo", 1 ]

// console.log(decode("ww MYeelllloo", 1)); //"Mellow Yellow"
// console.log(decode("nnbbraaaa", 4)); //"bananabar"
// console.log(decode("e emnllbduuHB", 2)); //"Humble Bundle"



