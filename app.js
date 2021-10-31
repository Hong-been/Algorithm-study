"use strict";
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const n = Number(fs.readFileSync(filePath).toString().trim());

unitTesting(
	(input) => solution(input),
	[5, 6, 6, 6, 7, -1, -1],
	[2, 5, -3, -4, 6, 7, 2]
);

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

function solution(input) {
	return result;
}
