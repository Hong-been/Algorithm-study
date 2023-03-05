const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

// 펠린드롬에서 놓친 것: 길이가 홀수든 짝수든 홀수개 알파벳이 2개이상이면 안됨...
// 즉, 홀수 알파벳이 2개 이상인지만 체크하면 된다. (<-- 짝수길이라면 홀수개가 등장할 떄, 무조건 2개이상에 걸리므로 여기서 끝난다.)
// 그리고 홀수개인 알파벳은 가운데에 끼어넣어주면 된다.

function solution(input) {
	const map = {};
	Array.from(input).forEach((v) => {
		if (map[v]) map[v]++;
		else map[v] = 1;
	});

	let mid = "";
	let ret = "";
	let flag = 0;
	const alphasR = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + 25 - i));

	// time O(26 * N/2) ===> O(N)... 와웅~~
	for (let al of alphasR) {
		if (!map[al]) continue;

		if (map[al] & 1) {
			if (++flag === 2) break;
			mid = al;
			map[al]--;
		}

		for (let j = 0; j < map[al]; j += 2) {
			ret = al + ret + al;
		}
	}

	if (flag === 2) return "I'm Sorry Hansoo";
	if (mid) ret = ret.slice(0, ret.length / 2) + mid + ret.slice(ret.length / 2);
	return ret;
}

console.log(solution(Array.from(inputs[0]).join("")) || "I'm Sorry Hansoo");
