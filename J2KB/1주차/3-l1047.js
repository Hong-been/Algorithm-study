"use strict";
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const n = Number(fs.readFileSync(filePath).toString().trim());

unitTesting((input) => solution(input), "ca", "abbaca");

function solution(input) {
	const st = [];
	const st2 = [];
	let result = "";

	for (let i = 0; i < input.length; i++) {
		st.push(input[i]);
	}

	st2.push(st.pop());

	while (st.length > 0) {
		if (st[st.length - 1] === st2[st2.length - 1]) {
			st.pop();
			st2.pop();
		} else {
			st2.push(st.pop());
		}
	}

	while (st2.length > 0) {
		result = result.concat(st2.pop());
	}

	return result;
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
