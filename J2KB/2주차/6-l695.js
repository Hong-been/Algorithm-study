"use strict";

const solution = function (grid) {
	// m* n
	const m = grid.length;
	const n = grid[0].length;
	const movements = [
		[-1, 0],
		[1, 0],
		[0, 1],
		[0, -1],
	];
	let maxArea = 0;
	let area = 0;

	const dfs = (i, j) => {
		if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] !== 1) return;

		area++;
		grid[i][j] = -1;

		for (let m = 0; m < movements.length; m++) {
			const [row, col] = movements[m];
			dfs(i + row, j + col);
		}
		return area;
	};

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			// i=0,j=7
			if (grid[i][j] === 1) {
				area = 0;
				maxArea = Math.max(dfs(i, j), maxArea);
			}
		}
	}

	return maxArea;
};

console.log(
	solution([
		[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
		[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
	])
);
