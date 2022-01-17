/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, K) {
	// 인접 리스트 생성
	const adj = new Map();
	for (let [from, to, weight] of flights) {
		if (adj.has(from)) adj.get(from).push([to, weight]);
		else adj.set(from, [[to, weight]]);
	}

	function bfs(start) {
		let q = [];
		let dist = new Array(n).fill(Infinity);

		q.push([start, 0, 0]);
		dist[start] = 0;

		// q=[ [2,5,1], [3,3,1] ]
		// dist=[1,2,5,3]
		while (q.length) {
			let [here, cost, move] = q.shift(); // 1,2,1

			if (move > K || !adj.get(here)) continue;

			for (let [there, weight] of adj.get(here)) {
				let nextDist = cost + weight;
				if (dist[there] > nextDist) {
					dist[there] = nextDist;
					// console.log(here,there,cost, weight);
					q.push([there, nextDist, move + 1]);
				}
			}
		}

		return dist[dst];
	}

	let ans = bfs(src);
	return ans === Infinity ? -1 : ans;
};

// Runtime: 123 ms, faster than 53.19% of JavaScript online submissions for Cheapest Flights Within K Stops.
// Memory Usage: 43.7 MB, less than 60.79% of JavaScript online submissions for Cheapest Flights Within K Stops.
