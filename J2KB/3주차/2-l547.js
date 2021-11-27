/**
 * Runtime: 76 ms, faster than 92.93% of JavaScript online submissions for Number of Provinces.
Memory Usage: 41.3 MB, less than 54.85% of JavaScript online submissions for Number of Provinces.

time O(N^2 + N) => O(N^2)
space O(N+N) => O(N)
 */
findCircleNum([
	[1, 1, 0],
	[1, 1, 0],
	[0, 0, 1],
]);

var findCircleNum = function (isConnected) {
	let pros = 1;
	const n = isConnected.length;
	const visited = new Array(n).fill(0); //time O(N), space O(N)
	let result = n;

	if (n === 1) return 1;

	const dfs = (row) => {
		if (visited[row]) return;
		visited[row] = 1;

		for (let c = 0; c < n; c++) {
			if (row === c) continue;
			if (isConnected[row][c] === 1 && !visited[c]) {
				pros++;
				isConnected[row][c] = 0;
				isConnected[c][row] = 0;
				dfs(c);
			}
		}
	};

	for (let i = 0; i < n; i++) {
		// time O(N^2) space O(N)
		pros = 1;
		dfs(i);
		result = result - pros + 1;
	}
	return result;
};
