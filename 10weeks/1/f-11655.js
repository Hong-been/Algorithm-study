const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");
// inputs.forEach((input, i) => (inputs[i] = Number(input)));
// const nums = inputs[0].split(" ");

// 한 라인에서 더 쪼개야 할 때(2차원배열로 만들어진다.)
// inputs.forEach(
// 	(input, i) => (inputs[i] = input.split(" ").map((i) => Number(i)))
// );

function solution(st) {
	// 영어인지 확인하고, 영어면 13개 밀어
	// 아니면 넘어가
	const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
	const cap = alpha.map((ch) => ch.toUpperCase());

	const ans = st.split("").map((ch) => {
		if (ch.match(/[A-Z]/g)) {
			const rot13 = cap.findIndex((v) => v === ch) + 13;
			return rot13 <= 25 ? cap[rot13] : cap[rot13 - 26];
		}
		if (ch.match(/[a-z]/g)) {
			const rot13 = alpha.findIndex((v) => v === ch) + 13;
			return rot13 <= 25 ? alpha[rot13] : alpha[rot13 - 26];
		}
		return ch;
	});

	return ans.join("");
}

console.log(solution(inputs[0]));
