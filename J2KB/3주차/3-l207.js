"use strict";

console.log(
	canFinish(7, [
		[1, 0],
		[0, 3],
		[0, 2],
		[3, 2],
		[2, 5],
		[4, 5],
		[5, 6],
		[2, 4],
	])
);
function canFinish(numCourses, pre) {
	if (pre.length === 0) return true;

	const map = topologicalSort(pre);
	if (map === -1) return false;

	const sources = findSource(map);
	if (sources === -1) return false;

	return bfs(map, sources);
}

function bfs(map, sources) {
	const queue = [...sources];

	while (queue.length > 0) {
		const curKey = queue.shift();
		const { incoming, next } = map.get(curKey);

		for (let n of next) {
			if (map.get(n).incoming === 0) return false;
			if (--map.get(n).incoming === 0) queue.push(n);
		}
	}

	for (let [key, value] of map) {
		if (value.incoming > 0) return false;
	}
	return true;
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
