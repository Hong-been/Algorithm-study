// Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
// Output: 3

var minReorder = function (n, connections) {
	var feeders = { 0: true };
	var visited = {};
	var numVisited = 0;
	var switched = 0;
	// (visited) visited{0:true, 1:true, 2:true, 3:true, 4:true}
	//           feeders = {0:true, 1:true, 2: true, 3:true, 4:true 5: true}
	while (numVisited < connections.length) {
		for (var i = 0; i < connections.length; i++) {
			if (visited[i]) {
				continue;
			}
			var [a, b] = connections[i]; // a=4, b=5
			if (feeders[b]) {
				visited[i] = true;
				numVisited++; //4
				feeders[a] = true;
			} else if (feeders[a]) {
				visited[i] = true;
				numVisited++; //5
				switched++; // 3
				feeders[b] = true;
			}
		}
	}
	return switched;
};
