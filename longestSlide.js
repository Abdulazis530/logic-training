// function longestSlideDown(pyramid) {

//   let newArray = [];
//   for (let i = pyramid.length - 2; i >= 0; i--) {
//     for (let j = 0; j <= i; j++) {
//       function euleur(arr) {
       
//         return arr[i + 1][j] > arr[i + 1][j + 1]
//           ? arr[i + 1][j] + arr[i][j]
//           : arr[i + 1][j + 1] + arr[i][j];
//       }

//       newArray.push(euleur(pyramid));
  
//     }
//     pyramid.pop();
//     pyramid.pop();
//     pyramid.push(newArray);
//     newArray=[]
    
    
   
//   }
//  return pyramid[0][0]
// }

function longestSlideDown (pyramid) {
  return pyramid.reduceRight((last,current)=>current.map(
    (v,i)=>v+Math.max(last[i],last[i+1])
  ))[0];
}
console.log(
  longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]])
);


//------------this is how its work
//----Definition of MAP: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//----Definition of Reduce : The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.


// each iteration start from the one element before last element, not from last element in the array.
//last element in this schema act like acumulator

//this how it's work

//callback              accumulaor(last)            currentValue                  index             returnValue

//first Call              [8,5,9,3]                   [2,4,6]                       2                 [10,13,15]
//second Call             [10,13,15]                  [7,4]                         1                 [20,19]
//thrid Call              [20,19]                      [3]                           0                 [23]


//in the end it will return an array with single value which is 23 that's why in the end line you need [0] to return only 23. 
//amazing isn't it
//this why so underated yet cool


//----Another test
// console.log(
//   longestSlideDown([
//     [75],
//     [95, 64],
//     [17, 47, 82],
//     [18, 35, 87, 10],
//     [20, 4, 82, 47, 65],
//     [19, 1, 23, 75, 3, 34],
//     [88, 2, 77, 73, 7, 63, 67],
//     [99, 65, 4, 28, 6, 16, 70, 92],
//     [41, 41, 26, 56, 83, 40, 80, 70, 33],
//     [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
//     [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
//     [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
//     [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
//     [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
//     [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
//   ])
// );





//-------------I found similar to my job
// function longestSlideDown (pyramid) {
//   for (var i = pyramid.length - 2; i > -1; i--) {
//     for (var j = 0; j < pyramid[i].length; j++) {
//       pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
//     }
      //I forgot that instead make new array,its realy simplfy if we directly change the current value element by using Math.max
//   }
//   return pyramid[0][0];
// }