const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
// 9996에서 trim뺏더니 틀림 ;;

// 1<= n <=100,000
// 1<= m <=100,000
// pockets: 첫글자만 대문자인 영어, 마지막문자만 대문자일 수 있따.
// 2 <= 길이 <= 20
// 문제가 알파벳으로 들어오면 포켓몬 번호가 답
// 숫자로 들어오면 포켓몬 번호에 해당하는 문자가 답
// 1 <= 문제 숫자 <= n, 도감에 있는 이름만

// 시간초과: 최대길이 십만 * 문제갯수 최대 십만 * (20 * 20) = 약 백억 이상..
// return pockets.findIndex((pocket) => pocket === prob) + 1;
function solution(inputs) {
	const [n, m] = inputs[0].split(" ").map((v) => Number(v));
	const pockets = inputs.slice(1, n + 1); // n개 몬스터
	const probs = inputs.slice(n + 1); // m개 문제

	const pMap = {};
	pockets.forEach((p, i) => {
		pMap[p] = i;
	});

	return probs.map((prob) =>
		Number(prob) ? pockets[prob - 1] : pMap[prob] + 1
	);
}

console.log(solution(inputs).join("\n"));
