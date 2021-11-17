var isSameTree = function (p, q) {
	if (!p && !q) return true;
	const queue = [[p, q]];

	const bfs = () => {
		while (queue.length) {
			const [nodeP, nodeQ] = queue.shift();

			if (nodeP && nodeQ) {
				if (nodeP.val !== nodeQ.val) return false;
			} else if (!nodeP && !nodeQ) continue;
			else return false;

			queue.push([nodeP.left, nodeQ.left]);
			queue.push([nodeP.right, nodeQ.right]);
		}

		return true;
	};

	return bfs();
};

console.log(isSameTree([1, 2, 3], [1, 2, 3]));
