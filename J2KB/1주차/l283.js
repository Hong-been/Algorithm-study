"use strict";
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const n = Number(fs.readFileSync(filePath).toString().trim());

unitTesting((input) => solution(input), [1, 0], [1, 0]);

function solution(nums) {
	if (nums.length <= 1) return;

	if (nums.length <= 1) return;

	for (let i = 0, lastZeroIndex = null; i < nums.length; i++) {
		if (lastZeroIndex === null && nums[i] === 0) {
			lastZeroIndex = i;
		}
		if (lastZeroIndex !== null && nums[i] !== 0) {
			nums[lastZeroIndex] = nums[i];
			nums[i] = 0;
			lastZeroIndex++;
		}
	}
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
