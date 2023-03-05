const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

// 테스트케이스 n <= 100
// 0<= 의상 수 n <= 30
/* [ [
  hat headgear,
sunglasses eyewear,
turban headgear]
[
  mask face,
sunglasses face,
makeup face,
 ]
]
*/
function solution(cases) {
	const ans = cases.map((clothes) => {
		const map = {};

		clothes.forEach((c) => {
			const [name, kind] = c.split(" ");
			if (map[kind]) map[kind]++;
			else map[kind] = 1;
		});

		// 빈 배열이 주어질 떄, reduce는 초기값을 반환한다.
		return Object.values(map).reduce((comb, cur) => comb * (cur + 1), 1) - 1;
	});

	return ans;
}

const params = [];
inputs.forEach((v, i) => {
	if (i === 0 || isNaN(v)) return;

	params.push(inputs.slice(i + 1, i + Number(v) + 1));
});

console.log(solution(params).join("\n"));
