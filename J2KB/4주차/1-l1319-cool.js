var makeConnected = function (n, connections) {
	if (connections.length < n - 1) return -1;
	let parent = new Array(n);
	for (let i = 0; i < n; i++) parent[i] = i;

	let find = function (x) {
		if (x != parent[x]) {
			parent[x] = find(parent[x]);
		}
		return parent[x];
	};

	let res = n - 1;
	for (let it of connections) {
		let x = find(it[0]),
			y = find(it[1]);
		if (x != y) {
			parent[x] = y;
			res--;
		}
	}
	return res;
};
// Runtime: 98 ms, faster than 100.00% of JavaScript online submissions for Number of Operations to Make Network Connected.
// Memory Usage: 50.8 MB, less than 100.00% of JavaScript online submissions for Number of Operations to Make Network Connected.
