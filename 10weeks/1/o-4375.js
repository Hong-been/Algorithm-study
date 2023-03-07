const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

// 2와 5로 나누어 떨어지지 않는 정수 n(1 ≤ n ≤ 10000)
// 1로만 이루어진 n의 배수
function solution(inputs) {
	const nums = inputs.map(Number);
	const ans = nums.map((n) => {
		let t = "1";
		let i = 1;
		while (true) {
			const st = t.repeat(i); //bigint
			if (BigInt(st) % BigInt(n)) {
				i++;
			} else {
				return st.toString().length;
			}
		}
	});

	return ans;
}

console.log(solution(inputs).join("\n"));
