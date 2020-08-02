// function indexPrime(param1) {
//   let templateArr = new Array(1000000);
//   let result = [];

//   for (let i = 0; i < templateArr.length; i++) {
//     if (i >= 2) {
//       let sqrtnum = Math.floor(Math.sqrt(i));
//       let prime = true;
//       for (let j = 2; j < sqrtnum + 1; j++) {
//         if (i % j === 0) {
//           prime = false;
//           break;
//         }
//       }
//       if (prime === true) {
//         result.push(i);
//       }
//     }
//   }

//   return result[param1 - 1];
// }

// console.log(indexPrime(4));
// console.log(indexPrime(500));
// console.log(indexPrime(37786));

// function checkPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

function indexPrime(urutan) {
  let testCase = 2; //3 //4//5//6//7//8
  let counter = 0; //1//2//3//4

  while (counter < urutan) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(testCase); i++) {
      if (testCase % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      counter++;
    }
    testCase++;
  }
  return testCase - 1;
}

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));