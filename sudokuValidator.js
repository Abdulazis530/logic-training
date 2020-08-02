//Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
//   ]); // => true

// validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 0, 3, 4, 8],
//     [1, 0, 0, 3, 4, 2, 5, 6, 0],
//     [8, 5, 9, 7, 6, 1, 0, 2, 0],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 0, 1, 5, 3, 7, 2, 1, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 0, 0, 4, 8, 1, 1, 7, 9]
//   ]); // => false

function validSolution(boards) {
  function isRowOk(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] || arr[i] === 0) {
          return "not ok";
        }
      }
    }
  }
  function isCollOk(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[j][i] === arr[k][i]) {
            return "not ok";
          }
        }
      }
    }
  }

  function boxes(arr) {
    const box1 = [
      ...arr[0].slice(0, 3),
      ...arr[1].slice(0, 3),
      ...arr[2].slice(0, 3),
    ];
    const box2 = [
      ...arr[0].slice(3, 6),
      ...arr[1].slice(3, 6),
      ...arr[2].slice(3, 6),
    ];
    const box3 = [...arr[0].slice(6), ...arr[1].slice(6), ...arr[2].slice(6)];

    const box4 = [
      ...arr[3].slice(0, 3),
      ...arr[4].slice(0, 3),
      ...arr[5].slice(0, 3),
    ];
    const box5 = [
      ...arr[3].slice(3, 6),
      ...arr[4].slice(3, 6),
      ...arr[5].slice(3, 6),
    ];
    const box6 = [...arr[3].slice(6), ...arr[4].slice(6), ...arr[5].slice(6)];

    const box7 = [
      ...arr[6].slice(0, 3),
      ...arr[7].slice(0, 3),
      ...arr[8].slice(0, 3),
    ];
    const box8 = [
      ...arr[6].slice(3, 6),
      ...arr[7].slice(3, 6),
      ...arr[8].slice(3, 6),
    ];
    const box9 = [...arr[6].slice(6), ...arr[7].slice(6), ...arr[8].slice(6)];
    const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    return boxes;
  }

  const boxesTobeChecked = boxes(boards);
  const isBoxOk = boxesTobeChecked.map(isRowOk);
  if (isBoxOk.some((e) => e === "not ok")) {
    console.log("box not ok here");
    return false;
  }

  const isRowValid = boards.map(isRowOk);
  if (isRowValid.some((e) => e === "not ok")) {
    return false;
  }

  const isCollValid = isCollOk(boards);
  console.log(isCollValid);
  if (isCollValid === "not ok") {
    console.log("its here");
    return false;
  }

  return true;
}

console.log(
  validSolution([
    [8, 2, 6, 3, 4, 7, 5, 9, 1],
    [7, 3, 5, 8, 1, 9, 6, 4, 2],
    [1, 9, 4, 2, 6, 5, 8, 7, 3],
    [3, 1, 7, 5, 8, 4, 2, 6, 9],
    [6, 5, 9, 1, 7, 2, 4, 3, 8],
    [4, 8, 2, 9, 3, 6, 7, 1, 5],
    [9, 4, 8, 7, 5, 1, 3, 2, 6],
    [5, 6, 1, 4, 2, 3, 9, 8, 7],
    [2, 7, 3, 6, 9, 8, 1, 5, 4],
  ])
);
