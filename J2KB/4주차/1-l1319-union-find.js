/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
2:26 - 45 - 3:10(actually 3:20)


0-1
|
2-3-4 -> already OK. return 0

0-1-2-3-4-5
connections.length : at least (n-1)

사이클을 이루고있으면 불필요한 커넥션이 있는 것.
불필요한 커넥션을 뺴고 한쪽을 연결안된 애랑 이어버려? 일단 [1,4] . [1,3] 수집
어레이를 다 봤는데 visited되지 않은 애가 2개 있다.
나는 지금 두개 커넥션을 수집했다. 할 수 있겠따!! -> 정답 2!

혹은 3개를 수집했는데 두개가 연결되지않음. 
이럴 떄는 둘중에 더 작은 것이 정답. 2!!

총 5대에서

0-1

2-3-4
\__/

*/
var makeConnected = function (n, connections) {
	if (connections.length < n - 1) return -1;

	let redundancy = 0;
	let disconnected = 0;
	const parent = new Array(n);
	for (let i = 0; i < n; i++) {
		parent[i] = i;
	}
	const size = new Array(n).fill(1);
	const connected = new Array(n).fill(0);
	const roots = new Array(n).fill(0);
	const findParent = (n) => {
		let p = parent[n];

		while (p !== n) {
			n = p;
			p = parent[p];
		}
		return p;
	};

	for (let [n1, n2] of connections) {
		connected[n1] = 1;
		connected[n2] = 1;

		const p1 = findParent(n1);
		const p2 = findParent(n2);

		if (p1 === p2) redundancy++;
		else if (size[p1] >= size[p2]) {
			size[p1] += size[p2];
			parent[p2] = p1;
			roots[p1] = 1;
			roots[p2] = 0;
		} else if (size[p1] < size[p2]) {
			size[p2] += size[p1];
			parent[p1] = p2;
			roots[p2] = 1;
			roots[p1] = 0;
		}
	}
	let countRoots = -1;
	for (let i = 0; i < n; i++) {
		if (connected[i] === 0) disconnected++;
		if (connected[i] === 1 && roots[i] === 1) countRoots++;
	}
	disconnected += countRoots;

	if (disconnected > redundancy) return -1;
	else if (disconnected < redundancy) return disconnected;
	else return redundancy;
};

// Runtime: 128 ms, faster than 88.68% of JavaScript online submissions for Number of Operations to Make Network Connected.
// Memory Usage: 55.2 MB, less than 72.64% of JavaScript online submissions for Number of Operations to Make Network Connected.
