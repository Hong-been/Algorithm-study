const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

//A, B, C는 모두 2,147,483,647 이하의 자연수
// time O(LogN) --> 절반으로 나누는 횟수
function solution(inputs) {
	let [a, b, c] = inputs[0].split(" ").map(Number);
	a = BigInt(a);
	c = BigInt(c);

	// 가장 중요한 점. BigInt는 BigInt끼리만 연산되므로,
	// return타입부터 res, a, c까지 모두 BigInt로 취급한다.
	const go = (a, b) => {
		if (b === 1) return a % c; // BigInt타입을 반환하기 위한 BigInt끼리 모듈러
		let res = go(a, Math.floor(b / 2));
		res = (res * res) % c;

		if (b % 2) res = (res * a) % c;
		return res;
	};

	return go(a, b);
}

console.log(solution(inputs).toString()); // BigInt타입을 출력하려면 이렇게해야 n이 제거됨.

//  a  b
// 10 11 res=10^5 -> return 10^11
// 	10 5 res=10^2 -> return 10^5
// 		10 2 res=10 -> return 10^2
// 			10 1 return 10
