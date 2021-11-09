"use strict";
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const n = Number(fs.readFileSync(filePath).toString().trim());

unitTesting((input) => solution(input), false, ["!eelpAppp", "App le!"]);

function solution(characters, document) {
	// time complexity = O(N + M);
	// space complexity = O(N);

	const map = new Map();

	const charArr = characters.split(""); // ['b', 'a', ] O(N)

	// time complexity = O(N)
	for (let c = 0; c < charArr.length; c++) {
		const char = charArr[c];
		if (map.has(char)) map.set(char, map.get(char) + 1);
		//O(1)
		else map.set(char, 1); // O(1)
	}

	// time complexity = O(M)
	for (let c = 0; c < document.length; c++) {
		const char = document[c];
		if (!map.has(char)) return false; /// guard clause

		map.set(char, map.get(char) - 1); ///O(1)
		if (map.get(char) < 0) return false; // guard clause
	}
	return true;
}

function unitTesting(func, expected, input) {
	const result = func(input[0], input[1]);
	if (JSON.stringify(result) === JSON.stringify(expected))
		console.log(
			`PASSED, the output of the function is ${result} === ${expected}`
		);
	else
		console.log(
			`FAILED, the output of the function is ${result} !== ${expected}`
		);
}
