/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 
 
 */
var diameterOfBinaryTree = function (root) {
	let longestPathLen = 0;

	//return "height"
	const dfs = (curNode) => {
		if (!curNode) return -1;

		const leftHeight = dfs(curNode.left); // 1's left : 1 / -1
		const rightHeight = dfs(curNode.right); // 1's right / -1

		longestPathLen = Math.max(longestPathLen, 2 + leftHeight + rightHeight); //2

		return 1 + Math.max(leftHeight, rightHeight); //1
	};

	dfs(root);

	return longestPathLen;
};
