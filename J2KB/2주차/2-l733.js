"use strict";
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const n = Number(fs.readFileSync(filePath).toString().trim());

// unitTesting(
// 	(input) => solution(input),
// 	[1, 0],
// 	[2, null, 3, null, 4, null, 5, null, 6]
// );
solution(
	[
		[0, 0, 0],
		[0, 0, 0],
	],
	0,
	0,
	2
);
function solution(image, sr, sc, nColor) {
	const sColor = image[sr][sc]; // 1
	const height = image.length; //3
	const width = image[0].length; //3

	const grids = [
		[0, 1],
		[1, 0],
		[-1, 0],
		[0, -1],
	];

	const dfs = (sr, sc) => {
		if (
			sr < 0 ||
			sr >= width ||
			sc < 0 ||
			sc >= height ||
			image[sr][sc] !== sColor
		)
			return; // 1,1 -> pass

		image[sr][sc] = nColor;

		for (let i = 0; i < grids.length; i++) {
			const x = grids[i][0]; //0
			const y = grids[i][1]; //1

			dfs(sr + x, sc + y); //dfs(1,2)
		}
	};
	//[0,2,0]
	//[2,2,2]
	//[0,2,0]
	if (image[sr][sc] !== nColor) dfs(sr, sc);

	return image;
}

// function unitTesting(func, expected, input) {
// 	const result = func(input);
// 	if (JSON.stringify(result) === JSON.stringify(expected))
// 		console.log(
// 			`PASSED, the output of the function is ${result} === ${expected}`
// 		);
// 	else
// 		console.log(
// 			`FAILED, the output of the function is ${result} !== ${expected}`
// 		);
// }

// /**
