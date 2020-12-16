// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


/**
 * @param {character[][]} board
 * @return {boolean}
 */


//check in the column if current postion value same with next column value return false
const checkCol = (arr) => {
    console.log("check col")
    for (let col = 0; col < arr.length; col++) {
        for (row = 0; row < arr.length; row++) {
            for (nextRow = row + 1; nextRow < arr.length; nextRow++) {
                if (arr[row][col] !== "." && arr[row][col] === arr[nextRow][col]) return false
            }
        }

    }
    return true

}


//check in the row if current position vallue same with next row value return false
const checkRow = (arr) => {
    console.log("cjck row")
    for (let row = 0; row < arr.length; row++) {
        let col = 0
        for (col = 0; col < arr.length; col++) {
            for (nextCol = col + 1; nextCol < arr.length; nextCol++) {
                if (arr[row][col] !== "." && arr[row][col] === arr[row][nextCol]) return false

            }
        }

    }
    return true
}

const checkMiniBox = (arr) => {
    console.log("here")

    for (let row = 0; row < arr.length; row++) {

        for (let col = 0; col < arr.length; col++) {
            let miniBox = []

            if (row % 3 === 0 && col % 3 === 0) {
                for (miniRow = row; miniRow < row + 3; miniRow++) {
                    for (miniCol = col; miniCol < col + 3; miniCol++) {
                        miniBox.push(arr[miniRow][miniCol])
                    }
                }
                console.log(miniBox)
                for (let i = 0; i < miniBox.length; i++) {
                    for (let j = i + 1; j < miniBox.length; j++) {
                        if (miniBox[i] !== "." && miniBox[i] === miniBox[j]) return false
                    }
                }
            }

        }

    }
    return true
}

var isValidSudoku = function (board) {
    if ((!checkCol(board) || !checkRow(board)) || !checkMiniBox(board)) return false
    return true
};