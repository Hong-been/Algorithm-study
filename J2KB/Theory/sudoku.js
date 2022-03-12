/*
1. row = 1 - 9 unique
2. col = 1 - 9 unique
3. 3 x 3 = 1 - 9 unique
*/
// backtracking
const matrix = [
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function solveSudoku(matrix) {
	recursionWithBacktracking(matrix);
	console.table(matrix);
}

solveSudoku(matrix);
/*
[248]

[531.7....] 
[53127....]
[5312783..] 9(x) 3 6
[5312783..]
*/

// time complexity - O(1)
// space complexity - O(1)
// time complexity - O(N ^ N);
// space complexity - O(N ^ N);

function recursionWithBacktracking(grid) {
	// guard statement ==> end clause ==> infinity ==> maximum call stack

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (grid[i][j] === ".") {
				for (let posNum = 1; posNum <= 9; posNum++) {
					if (validation(grid, posNum, i, j)) {
						grid[i][j] = posNum; // --> 1
						if (recursionWithBacktracking(grid)) return true;
						else grid[i][j] = "."; // backtracking ---> false
					}
				}
				return false;
			}
		}
	}
	return true;
}

// time complexity - O(1);

function validation(grid, num, row, col) {
	// row checking

	for (let j = 0; j < 9; j++) {
		if (+grid[row][j] == num) return false;
	}

	// col checking
	for (let i = 0; i < 9; i++) {
		if (+grid[i][col] == num) return false;
	}
	// 3 x 3 checking

	let searchRow = Math.floor(row / 3) * 3;
	let searchCol = Math.floor(col / 3) * 3;

	for (let r = searchRow; r < searchRow + 3; r++) {
		for (let c = searchCol; c < searchCol + 3; c++) {
			if (grid[r][c] == num) return false;
		}
	}

	return true;
}
