const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
	let map = {};

	input.split("").forEach((v) => {
		if (map[v]) map[v]++;
		else map[v] = 1;
	});
	map = Object.keys(map)
		.sort()
		.reduce((acc, key) => {
			acc[key] = map[key];
			return acc;
		}, {});

	let ans = Array(input.length);
	if (input.length % 2 === 0) {
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

	// 홀수
	let i = 0;
	ans = Array(input.length);
	// 5짜리면 i는 1에서 나온다.
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

console.log(
	solution(inputs[0].split("").sort().join("")) || "I'm Sorry Hansoo"
);
