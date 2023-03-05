const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

// 단어의 수 N이 주어진다. (1 ≤ N ≤ 100)
// 단어의 길이는 2와 100,000사이
// 모든 단어 길이의 합은 1,000,000을 넘지 않는다.
function solution(inputs) {
	const n = Number(inputs[0]);
	const words = inputs.slice(1);
	let ans = 0;
	for (let w of words) {
		if (w.length & 1) continue;

		let aCnt = 0;
		Array.from(w).forEach((v) => v === "A" && aCnt++);
		if (aCnt & 1) continue;

		const st = [];
		Array.from(w).forEach((v) => {
			if (!st.length) st.push(v);
			else if (st[st.length - 1] === v) {
				st.pop();
			} else {
				st.push(v);
			}
		});

		st.length === 0 && ans++;
	}

	return ans;
}

console.log(solution(inputs));
