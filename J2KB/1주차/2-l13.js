"use strict";
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const n = Number(fs.readFileSync(filePath).toString().trim());

unitTesting((input) => solution(input), 1994, "MCMXCIV");

/*


 */

function solution(input) {
	const subtractionMap = new Map();
	const romanMap = new Map();
	subtractionMap.set("IV", 4);
	subtractionMap.set("IX", 9);
	subtractionMap.set("XL", 40);
	subtractionMap.set("XC", 90);
	subtractionMap.set("CD", 400);
	subtractionMap.set("CM", 900);

	romanMap.set("I", 1);
	romanMap.set("V", 5);
	romanMap.set("X", 10);
	romanMap.set("L", 50);
	romanMap.set("C", 100);
	romanMap.set("D", 500);
	romanMap.set("M", 1000);

	let sum = 0;

	for (let i = 0; i < input.length; i++) {
		if (
			i + 1 < input.length &&
			subtractionMap.get(input[i].concat(input[i + 1]))
		) {
			sum += subtractionMap.get(input[i].concat(input[i + 1]));
			i++;
		} else {
			sum += romanMap.get(input[i]);
		}
		console.log(sum);
	}

	return sum;
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
