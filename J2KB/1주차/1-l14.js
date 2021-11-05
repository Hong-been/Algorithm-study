"use strict";
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const n = Number(fs.readFileSync(filePath).toString().trim());

unitTesting((input) => solution(input), true, [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);

function solution(input) {
	let commonPrefix = input[0];
	if (input.length === 1) {
		return commonPrefix;
	}

	for (let i = 1; i < input.length; i++) {
		let idx = 0;
		while (commonPrefix.length > 0 && idx < commonPrefix.length) {
			if (commonPrefix[idx] !== input[i][idx]) {
				commonPrefix = commonPrefix.slice(0, idx);
			}
			idx++;
		}
	}
	return commonPrefix;
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
