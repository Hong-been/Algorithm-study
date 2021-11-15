const solution = function (root) {
	if (!root) return 0;
	return bfs(root);
};

function bfs(root) {
	let good = 0;
	const queue = [[root, root.val]];

	while (queue.length) {
		const [curNode, max] = queue.shift();

		if (curNode.val >= max) {
			good++;
			if (curNode.left) queue.push([curNode.left, curNode.val]);
			if (curNode.right) queue.push([curNode.right, curNode.val]);
		} else {
			if (curNode.left) queue.push([curNode.left, max]);
			if (curNode.right) queue.push([curNode.right, max]);
		}
	}
	return good;
}

console.log(solution([3, 1, 4, 3, null, 1, 5]));
