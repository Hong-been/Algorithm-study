const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/*
M, N, K는 모두 100 이하의 자연수
*/

function solution(inputs) {
	const [n, m, k] = inputs[0].split(" ").map(Number);
	const pos = inputs.slice(1).map((r) => r.split(" ").map(Number));
	const mat = Array.from({length: m}).map(() => Array(n).fill(1));

	const area = [];

	pos.forEach((p) => {
		for (let i = p[0]; i < p[2]; i++) {
			for (let j = p[1]; j < p[3]; j++) {
				mat[i][j] = 0;
			}
		}
	});

	for (let i = 0; i < mat.length; i++) {
		for (let j = 0; j < mat[0].length; j++) {
			if (!mat[i][j]) continue;

			let cnt = 1;
			const q = [[i, j]];
			mat[i][j] = 0;

			while (q.length) {
				const [a, b] = q.shift();

				for (let i of [
					[0, 1],
					[0, -1],
					[1, 0],
					[-1, 0],
				]) {
					const nextA = a + i[0];
					const nextB = b + i[1];
					if (nextA < 0 || nextB < 0 || nextA >= mat.length || nextB >= mat[0].length || !mat[nextA][nextB]) continue;

					mat[nextA][nextB] = 0;
					cnt++;
					q.push([nextA, nextB]);
				}
			}
			area.push(cnt);
		}
	}

	return [area.length, area.sort((a, b) => a - b).join(" ")];
}

console.log(solution(inputs).join("\n"));
