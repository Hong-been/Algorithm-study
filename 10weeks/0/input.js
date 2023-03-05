const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputs) {
	const [n, m] = inputs[0].split(" ").map((v) => Number(v));

	const ans = [];

	return ans;
}

console.log(solution(inputs).join("\n"));
