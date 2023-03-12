const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

// N은 2 이상 100 이하의 정수이다
// [ 6, 8, 2, 6, 2 ],
// [ 3, 2, 3, 4, 6 ],
// [ 6, 7, 3, 3, 2 ],
// [ 7, 2, 5, 3, 6 ],
// [ 8, 9, 5, 2, 7 ]

// [ 0, 0, 0, 0, 0 ],
// [ 0, 0, 0, 0, 0 ],
// [ 0, 0, 0, 0, 0 ],
// [ 0, 0, 0, 0, 0 ],
// [ 0, 0, 0, 0, 0 ],

function solution(inputs) {
	const n = Number(inputs[0]);
	const mv = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	let max = Number.MIN_SAFE_INTEGER;
	let min = Number.MAX_SAFE_INTEGER;

	const mat = inputs.slice(1).map((r) =>
		r.split(" ").map((v) => {
			min = Math.min(min, v);
			max = Math.max(max, v);
			return Number(v);
		})
	);
	let ans = 1; // 초기값 오답: 0으로 하면, 아무지역도 잠기지 않는 경우를 커버하지 못한다(문제노트에 있음)

	const dfs = (a, b, mat) => {
		mat[a][b] = 0;

		for (let i of mv) {
			const nextA = a + i[0];
			const nextB = b + i[1];
			if (nextA < 0 || nextB < 0 || nextA >= mat.length || nextB >= mat[0].length || !mat[nextA][nextB]) continue;
			dfs(nextA, nextB, mat);
		}
	};

	for (let i = min; i <= max; i++) {
		let res = 0;
		const curMat = mat.map((r) => r.map((v) => (v <= i ? 0 : 1))); //잠기면 0
		// 비가 내린 경우마다, 39lines 방문처리를 초기화해야하니까,
		// 무조건 curMat, visited 등 추가메모리가 필요하다.

		for (let n = 0; n < curMat.length; n++) {
			for (let m = 0; m < curMat[0].length; m++) {
				if (!curMat[n][m]) continue;

				res++;
				dfs(n, m, curMat);
			}
		}

		ans = Math.max(ans, res);
	}

	return ans;
}

console.log(solution(inputs));
