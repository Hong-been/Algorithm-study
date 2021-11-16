var findOrder = function (numCourses, pre) {
	if (pre.length === 0) {
		const result = [];
		for (let c = 0; c < numCourses; c++) result.push(c);
		return result;
	}

	const map = topologicalSort(pre);
	if (map === -1) return [];

	const sources = findSource(map);
	if (sources === -1) return [];

	return bfs(map, sources, numCourses);
};

function bfs(map, sources, num) {
	const queue = [...sources];
	const result = [];
	const courses = new Array(num).fill(0);

	while (queue.length > 0) {
		const curKey = queue.shift();
		const { incoming, next } = map.get(curKey);

		if (incoming === 0) {
			result.push(curKey);
			courses[curKey] = 1;
		}

		for (let n of next) {
			if (map.get(n).incoming === 0) return [];
			if (--map.get(n).incoming === 0) queue.push(n);
		}
	}

	for (let [key, value] of map) {
		if (value.incoming > 0) return [];
	}

	for (let c = 0; c < num; c++) {
		if (courses[c] === 0) {
			result.push(c);
		}
	}

	return result;
}
function findSource(map) {
	const sourses = [];

	for (let [key, value] of map) {
		if (value.incoming === 0) {
			sourses.push(key);
		}
	}
	if (sourses.length > 0) return sourses;
	// if no incoming with value 0, false;
	return -1;
}

function topologicalSort(pre) {
	const map = new Map();

	for (let [to, from] of pre) {
		if (to === from) return -1;

		if (!map.has(to)) {
			map.set(to, {
				incoming: 1,
				next: [],
			}); // 3
		} else {
			map.get(to).incoming++;
		}

		if (!map.has(from)) {
			map.set(from, {
				incoming: 0,
				next: [to],
			});
		} else {
			map.get(from).next.push(to);
		}
	}

	return map;
}

const arr = [
	[5, 4],
	[5, 2],
	[4, 2],
	[4, 3],
	[6, 4],
	[6, 3],
	[3, 1],
	[2, 1],
	[1, 2],
];
console.log(findOrder(arr));
