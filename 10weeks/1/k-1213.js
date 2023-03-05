const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
	// 1. set up map
	const map = {};
	Array.from(input).forEach((v) => {
		if (map[v]) map[v]++;
		else map[v] = 1;
	});

	// 2-for even length
	if (!(input.length & 1)) {
		const ans = Array(input.length);
		let i = 0;
		while (i < ans.length / 2) {
			for (let [ch, cnt] of Object.entries(map)) {
				if (cnt % 2 === 1) return false;

				while (map[ch] > 1) {
					ans[i] = ch;
					ans[ans.length - i - 1] = ch;
					map[ch] -= 2;
					i++;
				}
			}
		}

		return ans.join("");
	}

	// 2-for odd length
	let i = 0;
	const ans = Array(input.length);
	while (i < (ans.length - 1) / 2) {
		let j = i;
		for (let ch of Object.keys(map)) {
			while (map[ch] > 1) {
				ans[i] = ch;
				ans[ans.length - i - 1] = ch;
				map[ch] -= 2;
				i++;
			}
		}
		if (j === i) return false;
	}

	// map에 1개이상인 것들이 딱 한개면 가운데에 넣고 끝.
	const rest = Object.entries(map).filter(([ch, cnt]) => cnt >= 1);
	if (rest.length > 1) return false;
	ans[i] = rest[0][0];

	return ans.join("");
}

console.log(solution(Array.from(inputs[0]).sort().join("")) || "I'm Sorry Hansoo");
