const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

// 재료의 개수 N(1 ≤ N ≤ 15,000)
// 갑옷을 만드는데 필요한 수 M(1 ≤ M ≤ 10,000,000)
// N개의 재료들이 가진 고유한 번호들(100,000보다 작거나 같은 자연수)

function solution(inputs) {
	const n = Number(inputs[0]);
	const m = Number(inputs[1]);
	numbers = inputs[2].split(" ").map((v) => Number(v));
	numbers.sort((a, b) => a - b);

	let ans = 0;

	let i = 0;
	let j = numbers.length - 1;
	while (i < j) {
		const sum = numbers[i] + numbers[j];
		if (sum < m) {
			i++;
		} else if (sum > m) {
			j--;
		} else {
			ans++;
			i++;
			j--;
		}
	}

	return ans;
}

console.log(solution(inputs));
