"use strict";
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const n = Number(fs.readFileSync(filePath).toString().trim());

unitTesting((input) => solution(input), 1, "1+(2*3)/(2-1)");

function solution(input) {
	const st = [];
	let maxDepth = 0;
	let depth = 0;

	for (let i = 0; i < input.length; i++) {
		if (input[i] === "(") {
			st.push(input[i]);
		} else if (input[i] === ")") {
			depth = st.length;
			st.pop();
			maxDepth = maxDepth < depth ? depth : maxDepth;
		}
	}

	return maxDepth;
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
