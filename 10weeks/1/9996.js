const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
// inputs.forEach((input, i) => (inputs[i] = Number(input)));
// const nums = inputs[0].split(" ");

// 한 라인에서 더 쪼개야 할 때(2차원배열로 만들어진다.)
// inputs.forEach(
// 	(input, i) => (inputs[i] = input.split(" ").map((i) => Number(i)))
// );
// a*d

// 0 1 2 3 4 5 6 7 8 9 10 11
// a d
// i
//   j
// 별 기준 왼쪽문자열과
// [0, 왼쪽문자열 길이 -1] 가 같아야함
// 별 기준 오른쪽문자열과
// [전체문자열길이-1 - 오른쪽문자열길이-1, 전체문자열길이 -1] 가 같아야함

function solution(inputs) {
	const [n, pattern, ...files] = inputs;
	const [prefix, suffix] = pattern.split("*");

	const ans = files.map((file) => {
		if (pattern.length - 1 > file.length) return "NE";

		if (
			file.substring(0, prefix.length) === prefix &&
			file.substring(file.length - suffix.length) === suffix
		)
			return "DA";
		return "NE";
	});

	return ans;
}

console.log(solution(inputs).join("\n"));
