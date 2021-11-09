"use strict";

unitTesting(
	(input) => solution(input),
	[5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9],
	[5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]
);

function solution(root) {
	if (!root) return root;

	let dummyHead = new TreeNode(0, null, null);
	const returnHead = dummyHead;

	function dfs(curNode) {
		if (!curNode) return;

		dfs(curNode.left);

		dummyHead.right = new TreeNode(curNode.val, null, null);
		dummyHead = dummyHead.right;

		dfs(curNode.right);
	}

	dfs(root);

	return returnHead.right;
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
