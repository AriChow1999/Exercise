const board = new Array(8);

function isSafe(row, col) {

    for (let prevRow = 0; prevRow < row; prevRow++) {
        const prevCol = board[prevRow];


        const columnConflict = (prevCol === col);


        const diagonalConflict = Math.abs(prevCol - col) === Math.abs(prevRow - row);

        if (columnConflict || diagonalConflict) {
            return false;
        }
    }
    return true;
}

function solve(row) {
    if (row === 8) return true;

    for (let col = 0; col < 8; col++) {
        if (isSafe(row, col)) {
            board[row] = col;

            if (solve(row + 1)) return true;
        }
    }
    return false;
}


if (solve(0)) {
    console.log("Found Solution:", board);
}