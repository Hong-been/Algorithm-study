const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
// inputs.forEach((input, i) => (inputs[i] = Number(input)));
// const nums = inputs[0].split(" ");

const createMap = () => {
	const map = {};

	for (let i = 0; i < 26; i++) {
		map[String.fromCharCode(i + "a".charCodeAt(0))] = 0;
	}

	return map;
};

function solution(input) {
	const alpha = createMap();

	for (let ch of input) {
		alpha[ch] = alpha[ch] + 1;
	}

	return Object.values(alpha).join(" ");
}

console.log(solution(inputs[0]));
