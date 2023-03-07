const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

// 정수 N, M(2 ≤ N, M ≤ 100)
// 1:01~1:20
function solution(inputs) {
	const [n, m] = inputs[0].split(" ").map((v) => Number(v - 1)); // 4,6이 들어오면 [3,5]를 의미한다.
	const mat = inputs.slice(1).map((row) => row.split("").map(Number));

	const mv = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];

	const q = [[0, 0, 1]];

	while (q.length) {
		const [a, b, cnt] = q.shift();
		if (a === n && b === m) return cnt;

		for (let i of mv) {
			const nextA = a + i[0];
			const nextB = b + i[1];
			if (nextA < 0 || nextB < 0 || nextA > n || nextB > m || !mat[nextA][nextB]) continue;
			mat[nextA][nextB] = 0;

			q.push([nextA, nextB, cnt + 1]);
		}
	}
}

console.log(solution(inputs));
