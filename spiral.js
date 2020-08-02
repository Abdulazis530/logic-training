
function spiral(param1) {
    let spiralArr = [];
    
    let count = 0;
    let startCol = 0;
    let endCol = param1 - 1;
    let startRow = 0;
    let endRow = param1 - 1;
    
  
    //making subarray to be filled inside the result
    for (let i = 0; i < param1; i++) {
      spiralArr.push([]);
    }
  
    while (startRow <= endRow && startCol <= endCol) {
      //result,after first while pass sR=1,eC=3,eR=3,sC=1
      //top row
      for (let i = startCol; i <= endCol; i++) {
        spiralArr[startRow][i] = count;
        count++;
      }
      startRow++; //1
  
      //right col
      for (let i = startRow; i <= endRow; i++) {
        //startRow=1
        spiralArr[i][endCol] = count;
        count++;
      }
      endCol--;
      //bottom row
      for (let i = endCol; i >= startCol; i--) {
        //i:3,2,1,0
        spiralArr[endRow][i] = count; //endrow:4
        count++;
      }
      endRow--;
  
      //left row
      for (let i = endRow; i >= startRow; i--) {
        //i:3,2,1,0
        spiralArr[i][startCol] = count; //endrow:3
        count++;
      }
      startCol++;
    }
    return spiralArr
   
  }
  console.log(spiral(5));
//   console.log(spiral(6));

  