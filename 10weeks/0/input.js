const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
inputs.forEach((input, i) => (inputs[i] = Number(input)));
// const nums = inputs[0].split(" ");

// 한 라인에서 더 쪼개야 할 때(2차원배열로 만들어진다.)
// inputs.forEach(
// 	(input, i) => (inputs[i] = input.split(" ").map((i) => Number(i)))
// );

function solution(nums) {
	let ans;

	return ans;
}

console.log(solution(inputs));
