const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputs) {
	const n = Number(inputs[0]);
	const strings = inputs.slice(1);
	const ans = [];
	strings.forEach((st) => {
		const nums = st.match(/[0-9]+/g).map(Number);
		ans.push(...nums);
	});

	return ans.sort((a, b) => a - b);
}

console.log(solution(inputs).join("\n"));
