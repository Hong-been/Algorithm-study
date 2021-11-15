"use strict";
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const n = Number(fs.readFileSync(filePath).toString().trim());

// unitTesting(
// 	(input) => solution(input),
// 	[1, 0],
// 	[2, null, 3, null, 4, null, 5, null, 6]
// );
/**
 * @param {number[][]} grid
 * @return {number}
 
 
 4:27/4/
 
Input: grid = [

[0,1,0,0],
[1,1,1,0],
[0,1,0,0],
[1,1,0,0]]

Output: 16
 
 1 <= row, col <= 100
 grid[i][j] = 0 or 1
 There is exactly "one island" in grid.
 
 let result = 4;
 for loop in [0][0]~[row][col]:
    when grid[i][j]===1 : 
        return dfs(gird,i,j);
        
        
function dfs(gird,i,j){
    when out of range: return;
    when grid[i][j]===0 : result++; return;
    
    for loop up, down, right, left:
        dfs(grid,i+up,j+up);  
    
    return result;
}

time : O(N)
space : O(1)
 
 */
const solution = function (grid) {
	let result = 0;
	const row = grid.length;
	const col = grid[0].length;

	const dfs = (i, j) => {
		if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === 0) {
			result++;
			return;
		}
		if (grid[i][j] === 2) {
			return;
		}

		grid[i][j] = 2;

		const movements = [
			[-1, 0],
			[1, 0],
			[0, 1],
			[0, -1],
		];

		for (let m = 0; m < movements.length; m++) {
			const [y, x] = movements[m];
			dfs(i + y, j + x);
		}
		return result;
	};

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (grid[i][j] === 1) return dfs(i, j);
		}
	}
};

console.log(
	solution([
		[0, 1, 0, 0],
		[1, 1, 1, 0],
		[0, 1, 0, 0],
		[1, 1, 0, 0],
	])
);
