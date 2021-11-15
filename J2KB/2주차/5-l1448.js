const solution = function (grid) {
	if (!root.val) return 0;

	let good = 1;
	const queue = [[root, []]];
	const bfs = (curNode) => {
		while (queue.length > 0) {
			const [parent, path] = queue.shift();
			if (!parent) continue;
			const curPath = [...path, parent.val];

			if (parent.left) {
				const leftVal = parent.left.val;
				let isGood = true;

				for (let i = 0; i < curPath.length; i++) {
					if (curPath[i] > leftVal) {
						isGood = false;
						break;
					}
				}
				if (isGood) good++;
			}

			if (parent.right) {
				const rightVal = parent.right.val;
				isGood = true;
				for (let i = 0; i < curPath.length; i++) {
					if (curPath[i] > rightVal) {
						isGood = false;
						break;
					}
				}
				if (isGood) good++;
			}
			queue.push([parent.left, curPath]);
			queue.push([parent.right, curPath]);
		}

		return good;
	};
	return bfs(root);
};

console.log(solution([3, 1, 4, 3, null, 1, 5]));
