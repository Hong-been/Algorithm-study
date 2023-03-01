const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
// inputs.forEach((input, i) => (inputs[i] = Number(input)));
// const nums = inputs[0].split(" ");

// 한 라인에서 더 쪼개야 할 때(2차원배열로 만들어진다.)
// inputs.forEach(
// 	(input, i) => (inputs[i] = input.split(" ").map((i) => Number(i)))
// );

function solution(n, names) {
	const ans = [];
	const map = {};

	// 돌면서 첫글자만 map으로 만들면서 카운팅
	// 카운팅하고 5개이상인것만 출력
	// 5개가 안되면 기권

	names.forEach((name) => {
		const first = name[0];
		if (map[first]) map[first] += 1;
		else map[first] = 1;
	});

	Object.entries(map).forEach((entry) => {
		if (entry[1] >= 5) ans.push(entry[0]);
	});

	return ans.length ? ans.sort().join("") : "PREDAJA";
}

console.log(solution(inputs[0], inputs.slice(1)));
