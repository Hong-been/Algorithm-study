/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 
 0{
 nei : [1,2]
 }
 1{
 nei : [0,3]
 }
 3{
 nei : [1,2]
 }
 
 0->1->3
     /
    2
 
 [[0,1],[1,3],[2,3],[4,0],[4,5]]
 
 */
var minReorder = function (n, connections) {
	let result = 0;

	const map = new Map();
	const con = {};

	const queue = [];

	const createMap = (connections) => {
		for (let [c1, c2] of connections) {
			con[`${c1},${c2}`] = true;

			if (!map.has(c1)) map.set(c1, { nei: [c2] });
			else map.get(c1).nei.push(c2);

			if (!map.has(c2)) map.set(c2, { nei: [c1] });
			else map.get(c2).nei.push(c1);
		}
	};
	createMap(connections);

	let neis = map.get(0).nei;

	for (let i = 0; i < neis.length; i++) {
		queue.push([0, neis[i]]); // [[0,1],[0,2]]
	}

	const visited = new Array(n).fill(false);
	visited[0] = true;

	while (queue.length > 0) {
		const [startCity, curCity] = queue.shift();

		// curCity가 방문한지 아닌지를 확인한다.
		if (visited[curCity]) continue;

		visited[curCity] = true;

		// connections를 반복하며 있는지 일일이 확인한다.
		if (con[`${startCity},${curCity}`]) result++;

		// for(let i=0; i<connections.length;i++){
		//     if(connections[i][0]===startCity && connections[i][1]===curCity) result++;
		// }

		// queue에 nei를 추가한다.
		neis = map.get(curCity).nei;

		for (let i = 0; i < neis.length; i++) {
			queue.push([curCity, neis[i]]);
		}
	}

	return result;
};

// Runtime: 4688 ms, faster than 6.10% of JavaScript online submissions for Reorder Routes to Make All Paths Lead to the City Zero.
// Memory Usage: 75.7 MB, less than 45.12% of JavaScript online submissions for Reorder Routes to Make All Paths Lead to the City Zero.
