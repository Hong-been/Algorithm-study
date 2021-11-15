function topologicalSort(arr) {
	if (!arr.length) return [];
	// 1. make the tree structure

	const map = {};

	for (let i = 0; i < arr.length; i++) {
		let [to, from] = arr[i];

		to = `${to}`;
		from = `${from}`;

		if (map[from]) {
			map[from].dest.push(to);
		} else {
			map[from] = {
				incoming: 0,
				dest: [to],
			};
		}

		if (map[to]) {
			map[to].incoming++;
		} else {
			map[to] = {
				incoming: 1,
				dest: [],
			};
		}
	}

	return BFS(map);
}

function BFS(map) {
	const result = [];
	const queue = findTheSource(map);

	while (queue.length) {
		const curKey = queue.shift();
		const { incoming, dest } = map[curKey];

		//***
		if (incoming === 0) result.push(curKey);

		for (let d = dest.length - 1; d >= 0; d--) {
			const child = map[dest[d]];

			if (child.incoming > 0) child.incoming--;
			if (child.incoming === 0) queue.push(dest[d]);
		}
	}

	return result;
}

function findTheSource(map) {
	for (let [key, value] of Object.entries(map)) {
		if (value.incoming === 0) return [key];
	}
	return [];
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
];
console.log(topologicalSort(arr));
