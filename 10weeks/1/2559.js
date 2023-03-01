const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
// inputs.forEach((input, i) => (inputs[i] = Number(input)));
// const nums = inputs[0].split(" ");

// 한 라인에서 더 쪼개야 할 때(2차원배열로 만들어진다.)
// inputs.forEach(
// 	(input, i) => (inputs[i] = input.split(" ").map((i) => Number(i)))
// );
// 0 1 2 3 4 5 6 7  8  9 10
// 3 -2 -4 -9 0 3 7 13 8 -3
function solution(inputs) {
	const [n, k] = inputs[0].split(" ").map((v) => Number(v));
	const temp = inputs[1].split(" ").map((v) => Number(v));
	const sum = [];

	temp.reduce((acc, cur) => {
		sum.push(acc + cur);
		return acc + cur;
	}, 0);

	let ans = Number.MIN_SAFE_INTEGER; // −9007199254740991 (−(2^53 − 1))... 경 이상
	// 최저온도 -100도가 최대 k번(10만-1)만큼 반복되면 ans는 -1000만 정도가 최소값이다.
	// (-1000만 - 4) 로 ans초기값을 잡는게 더 정확하다.
	for (let i = 0; i <= temp.length - k; i++) {
		const cur = i > 0 ? sum[i + k - 1] - sum[i - 1] : sum[i + k - 1];
		ans = Math.max(ans, cur);
	}

	return ans;
}

console.log(solution(inputs));
