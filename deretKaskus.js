// function deretKaskus(n) {
//   let arrTemp = [];
//   let result = [];

//   for (let i = 1; i <= n; i++) {
//     arrTemp.push(i * 3);
//   }
//   for (let i = 0; i < arrTemp.length; i++) {
//     if (arrTemp[i] % 6 === 0 && arrTemp[i] % 5 === 0) {
//       result.push("KASKUS");
//     } else if (arrTemp[i] % 5 === 0) {
//       result.push("KAS");
//     } else if (arrTemp[i] % 6 === 0) {
//       result.push("KUS");
//     } else {
//       result.push(arrTemp[i]);
//     }
//   }
//   return result;
// }

//secondWay
function deretKaskus(n) {
  let result = [];
  let length=n*3

  for (let i = 3; i <= length; i += 3) {
    if (i % 6 === 0 && i % 5 === 0) {
      result.push("KASKUS");
    } else if (i % 5 === 0) {
      result.push("KAS");
    } else if (i % 6 === 0) {
      result.push("KUS");
    } else {
      result.push(i);
    }
  }
  return result;
}
console.log(deretKaskus(10));
