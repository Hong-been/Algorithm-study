"use strict";

unitTesting(
	(input) => solution(input),
	[5, 6, 6, 6, 7, -1, -1],
	[2, 5, -3, -4, 6, 7, 2]
);

function solution(input) {
	const stack = [];
	const result = [];
	for (let i = 0; i < input.length; i++) {
		if (i === 0) {
			stack.push(i);
			continue;
		}
		while (stack.length > 0) {
			if (input[stack[stack.length - 1]] < input[i]) {
				result[stack.pop()] = input[i];
			} else {
				break;
			}
		}
		stack.push(i);
	}

	while (stack.length > 0) {
		const index = stack.pop();
		result[index] = -1;
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
