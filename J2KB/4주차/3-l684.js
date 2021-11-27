var findRedundantConnection = function (edges) {
	const n = edges.length;
	const size = new Array(n + 1).fill(1);
	const parent = new Array(n + 1);
	for (let i = 0; i <= n; i++) {
		parent[i] = i;
	}

	let result = [];

	const findParent = (n) => {
		let p = parent[n];
		while (p !== n) {
			n = p;
			p = parent[p];
		}
		return p;
	};

	for (let i = 0; i < n; i++) {
		// time O(N)
		const [n1, n2] = edges[i];

		const p1 = findParent(n1); //worst O(N)
		const p2 = findParent(n2); //worst O(N)

		if (p1 === p2) result = [n1, n2];
		else {
			if (size[p1] >= size[p2]) {
				parent[p2] = p1;
				size[p1] += size[p2];
			} else {
				parent[p1] = p2;
				size[p2] += size[p1];
			}
		}
	}
	return result;
};

findRedundantConnection([
	[1, 2],
	[2, 3],
	[3, 4],
	[1, 4],
	[1, 5],
]);

// Runtime: 73 ms, faster than 95.12% of JavaScript online submissions for Redundant Connection.
// Memory Usage: 41.1 MB, less than 71.34% of JavaScript online submissions for Redundant Connection.
