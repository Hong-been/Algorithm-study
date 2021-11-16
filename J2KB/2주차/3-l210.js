function topologicalSort(arr) {
	if (!arr.length) return [];

	const map = new Map();

	for (let i = 0; i < arr.length; i++) {
		let [to, from] = arr[i];

		if (map.has(from)) {
			map.set(from, { ...map.get(from), dest: [...map.get(from).dest, to] });
		} else {
			map.set(from, {
				incoming: 0,
				dest: [to],
			});
		}

		if (map.has(to)) {
			map.set(to, { ...map.get(to), incoming: map.get(to).incoming + 1 });
		} else {
			map.set(to, {
				incoming: 1,
				dest: [],
			});
		}
	}
	console.log(map);

	return BFS(map);
}

function BFS(map) {
	const result = [];
	const queue = findTheSource(map);

	while (queue.length) {
		const curKey = queue.shift();
		const { incoming, dest } = map.get(curKey);

		if (incoming === 0) result.push(curKey);

		for (let d = dest.length - 1; d >= 0; d--) {
			const child = dest[d];
			if (--map.get(child).incoming === 0) queue.push(child);
		}
	}

	return result;
}

function findTheSource(map) {
	for (let [key, value] of map) {
		if (value.incoming === 0) return [key];
	}
	return []; //cycled tree -> can not finish the course.
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
console.log(topologicalSort(arr));
