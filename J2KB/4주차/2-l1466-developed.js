/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 
 0 { [1,1], [4,-1] }
 1 { [0,-1], [3,1] }
 2 { [3,1] }
 3 { [1,-1],[2,-1] }
 4 { [0,1],[5,1] }
 5 { [4,-1] }
 
 [[0,1],[1,3],[2,3],[4,0],[4,5]]

 */
var minReorder = function (n, connections) {
	let result = 0;

	const map = new Map();

	//time: O(connections.length)
	// space : O(O + 2E)
	const createMap = (connections) => {
		for (let [start, end] of connections) {
			if (!map.has(start)) map.set(start, [end]);
			// 양수면 a가 도착지 -> 바꿔야 하는 값
			else map.get(start).push(end);

			if (!map.has(end)) map.set(end, [-start]);
			// 음수면 a가 출발지 -> 우리가 원하는 값
			else map.get(end).push(-start);
		}
	};
	createMap(connections);

	const queue = [...map.get(0)];
	//time: O(n)
	const visited = new Array(n).fill(false);
	visited[0] = true;
	// console.log(map);

	// O(N^2)
	while (queue.length > 0) {
		//O(n)
		let curCity = queue.shift();

		if (curCity > 0) result++;
		curCity = Math.abs(curCity);

		visited[curCity] = true;

		// queue에 추가한다.
		map.get(curCity).forEach((c) => {
			if (visited[Math.abs(c)] === false) queue.push(c);
		});
	}

	return result;
};

// Runtime: 584 ms, faster than 17.98% of JavaScript online submissions for Reorder Routes to Make All Paths Lead to the City Zero.
// Memory Usage: 80.4 MB, less than 37.08% of JavaScript online submissions for Reorder Routes to Make All Paths Lead to the City Zero.
