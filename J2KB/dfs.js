"use strict";
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const n = Number(fs.readFileSync(filePath).toString().trim());

unitTesting((input) => solution(input), 5, [
	["1", "1", "1", "1", "0"],
	["1", "1", "0", "0", "0"],
	["1", "0", "0", "0", "0"],
	["0", "0", "1", "1", "0"],
	["0", "0", "0", "0", "0"],
	["0", "1", "0", "0", "0"],
	["0", "0", "0", "1", "1"],
	["1", "0", "0", "1", "1"],
	["1", "0", "0", "0", "0"],
	["1", "1", "0", "0", "0"],
]);

function solution(input) {
	let numOfIsland = 0;

	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input[0].length; j++) {
			if (grid[i][j] === "1") {
				dfs(input, i, j);
				numOfIsland++;
			}
		}
	}

	return numOfIsland;
}

function dfs(grid, i, j) {
	let sum = 0;
	const direction = [
		[-1, 0],
		[0, 1],
		[1, 0],
		[0, -1],
	]; //위, 오른쪽, 아래, 왼쪽

	if (
		i < 0 ||
		i >= grid.length ||
		j < 0 ||
		j >= grid[0].length ||
		grid[i][j] === 0
	)
		return; //return 0; 안해도됨

	grid[i][j] = "0";

	for (let d = 0; d < direction.length; d++) {
		const newI = direction[d][0] + i;
		const newJ = direction[d][1] + j;
		dfs(grid, newI, newJ);
	}

	return;
}

function unitTesting(func, expected, input) {
	const result = func(input);
	if (JSON.stringify(result) === JSON.stringify(expected))
		console.log(
			`PASSED, the output of the function is ${result} === ${expected}`
		);
	else
		console.log(
			`FAILED, the output of the function is ${result} !== ${expected}`
		);
}
