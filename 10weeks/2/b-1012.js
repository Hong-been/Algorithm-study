const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

// 가로 M(1 ≤ M ≤ 50)과 세로길이 N(1 ≤ N ≤ 50)
// 배추가 심어져 있는 위치의 개수 K(1 ≤ K ≤ 2500)
// 배추의 위치 X(0 ≤ X ≤ M-1), Y(0 ≤ Y ≤ N-1)가 주어진다. 두 배추의 위치가 같은 경우는 없다.
function solution(inputs) {
	const t = inputs.shift();
	const mv = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];

	const ans = Array.from({length: t}).map(() => {
		const [n, m, k] = inputs.shift().split(" ").map(Number);
		let cnt = 0;
		let pos = [];
		for (let temp = 0; temp < k; temp++) {
			pos.push(inputs.shift());
		}
		pos = pos.map((v) => v.split(" ").map(Number));
		const mat = Array.from(Array(n), () => Array(m).fill(0));

		for (let i = 0; i < k; i++) {
			mat[pos[i][0]][pos[i][1]] = 1;
		}

		const dfs = (a, b) => {
			mat[a][b] = 0;
			if (a === n && b === m) return;

			for (let i of mv) {
				const nextA = a + i[0];
				const nextB = b + i[1];
				if (nextA < 0 || nextB < 0 || nextA > n - 1 || nextB > m - 1 || !mat[nextA][nextB]) continue;
				dfs(nextA, nextB);
			}
		};

		for (let i = 0; i < n; i++) {
			for (let j = 0; j < m; j++) {
				if (mat[i][j]) {
					cnt++;
					dfs(i, j);
				}
			}
		}

		return cnt;
	});

	return ans;
}

console.log(solution(inputs).join("\n"));
