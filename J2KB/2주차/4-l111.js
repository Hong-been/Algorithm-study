"use strict";

unitTesting((input) => solution(input), 5, [
	2,
	null,
	3,
	null,
	4,
	null,
	5,
	null,
	6,
]);

function solution(root) {
	if (!root) return 0;

	const queue = [[root, 1]];

	return bfs(queue);
}

// time: worst(unbalanced binary tree) O(n)
// good(balanced binary tree) O(logN)-bst
// space O(1)
function bfs(queue) {
	while (queue.length > 0) {
		const [curNode, depth] = queue.shift();
		if (curNode.left) queue.push([curNode.left, depth + 1]);
		if (curNode.right) queue.push([curNode.right, depth + 1]);
		if (!curNode.left && !curNode.right) return depth;
	}
}

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

function unitTesting(func, expected, input) {
	const result = func(input);
	if (JSON.stringify(result) === JSON.stringify(expected))
		console.log(
			`PASSED, the output of the function is ${result} === ${expected}`
		);
	else
		console.log(
			`FAILED, the output of the function is ${result} !== ${expected}`
		);
}
