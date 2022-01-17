/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 
 bfs+우선선위큐 ?
 
 0 1 2 3 4
 0 1 0 1 2 -> 이 중에서 k가 아닌데 0인게 있다면 return -1, 이 중 가장 큰 값 return
 [[2,1,1],[2,3,1],[3,4,1]]
 
 0에서 시작한다.
 이웃노드로 갈수있는 min값이 있다면 업데이트한다.
 큐에 넣는다.
 
 V :n, E: Edges
 time : O(E+V+EV)=O(EV)=O(V^3)
 space : O(E+V)
 */
var networkDelayTime = function (times, n, k) {
	let max = 0;
	const dp = Array(n + 1).fill(Infinity); // space O(V)
	const map = {}; // space O(E)
	const q = [];

	for (let [s, e, t] of times) {
		// time O(E)
		if (!map[s]) map[s] = [[e, t]];
		else map[s].push([e, t]);
	}
	// console.log(map);
	dp[0] = 0;
	dp[k] = 0;

	q.push([k, 0]);

	//time O(E*V)
	while (q.length) {
		const [here, cost] = q.shift();

		if (!map[here]) continue;

		for (let [next, nextCost] of map[here]) {
			if (dp[next] > cost + nextCost) {
				dp[next] = cost + nextCost;
				q.push([next, dp[next]]);
				// Visit nodes multiple times, if I found a better distance.
				// In worst case, visie nodes N times.
			}
		}
	}
	// console.log(dp);

	max = Math.max(...dp); // time O(N)
	return max === Infinity ? -1 : max;
};

// Runtime: 96 ms, faster than 96.46% of JavaScript online submissions for Network Delay Time.
// Memory Usage: 47.9 MB, less than 37.71% of JavaScript online submissions for Network Delay Time.

networkDelayTime(
	[
		[3, 5, 78],
		[2, 1, 1],
		[1, 3, 0],
		[4, 3, 59],
		[5, 3, 85],
		[5, 2, 22],
		[2, 4, 23],
		[1, 4, 43],
		[4, 5, 75],
		[5, 1, 15],
		[1, 5, 91],
		[4, 1, 16],
		[3, 2, 98],
		[3, 4, 22],
		[5, 4, 31],
		[1, 2, 0],
		[2, 5, 4],
		[4, 2, 51],
		[3, 1, 36],
		[2, 3, 59],
	],
	5,
	5
);
