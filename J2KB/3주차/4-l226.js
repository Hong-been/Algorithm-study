/**
 * Definition for a binary tree node.
 
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 
Runtime: 80 ms, faster than 42.80% of JavaScript online submissions for Invert Binary Tree.
Memory Usage: 40.2 MB, less than 22.86% of JavaScript online submissions for Invert Binary Tree.
 */

invertTree([4, 2, 7, 1, 3, 6, 9]);

var invertTree = function (root) {
	if (!root) return root;

	const queue = [root];

	while (queue.length) {
		const curNode = queue.shift();

		if (curNode.left) queue.push(curNode.left);
		if (curNode.right) queue.push(curNode.right);

		[curNode.left, curNode.right] = [curNode.right, curNode.left];
	}

	return root;
};
