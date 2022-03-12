// Runtime: 252 ms, faster than 89.90% of JavaScript online submissions for Reorder Routes to Make All Paths Lead to the City Zero.
// Memory Usage: 65.7 MB, less than 95.96% of JavaScript online submissions for Reorder Routes to Make All Paths Lead to the City Zero.

var minReorder = function (n, connections) {
	let result = 0;

	//   const map = new Map();

	//   const createMap = (connections)=>{
	//        for(let [start, end] of connections){

	//          if(!map.has(start)) map.set(start,[end]); // 양수면 a가 도착지 -> 바꿔야 하는 값
	//          else map.get(start).push(end);

	//         if(!map.has(end)) map.set(end,[-start]); // 음수면 a가 출발지 -> 우리가 원하는 값
	//         else map.get(end).push(-start);
	//     }
	//   }
	//   createMap(connections);
	const adjList = Array.from({ length: n }, () => []); //space: O(n)
	for (let i = 0; i < connections.length; i++) {
		//time: O(n-1)
		const n = connections[i][0];
		const e = connections[i][1];
		adjList[n].push(e);
		adjList[e].push(-n);
	}

	const queue = [...adjList[0]];

	const visited = new Array(n).fill(false);
	visited[0] = true;
	// console.log(map);

	while (queue.length > 0) {
		let curCity = queue.shift();

		if (curCity > 0) result++;
		curCity = Math.abs(curCity);

		visited[curCity] = true;

		// queue에 추가한다.
		adjList[curCity].forEach((c) => {
			if (visited[Math.abs(c)] === false) queue.push(c);
		});
	}

	return result;
};
