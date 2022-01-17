var findCheapestPrice = function (n, flights, src, dst, K) {
	// 인접 리스트 생성
	const adj = new Map();
	for (let [frm, to, weight] of flights) {
		if (adj.has(frm)) adj.get(frm).push([to, weight]);
		else adj.set(frm, [[to, weight]]);
	}

	function dijkstra(start) {
		let q = [];
		let dist = new Array(n).fill(Infinity);

		q.push([start, 0, 0]);
		dist[start] = 0;

		while (q.length) {
			let [here, cost, move] = q.shift();

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

	let ans = dijkstra(src);
	return ans === Infinity ? -1 : ans;
};

// Runtime: 92 ms, faster than 86.63% of JavaScript online submissions for Cheapest Flights Within K Stops.
// Memory Usage: 44.1 MB, less than 58.36% of JavaScript online submissions for Cheapest Flights Within K Stops.
