"use strict";
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const n = Number(fs.readFileSync(filePath).toString().trim());

unitTesting((input) => solution(input), true, [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);

function solution(input) {
	input.sort((a, b) => {
		if (a > b) return 1;
		else return -1;
	});

	for (let i = 0; i < input.length; i++) {
		if (i + 1 < input.length && input[i] === input[i + 1]) {
			return true;
		}
	}
	return false;
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
