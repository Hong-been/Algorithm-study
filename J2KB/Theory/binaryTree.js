class Node {
	constructor(data = null, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	//if root is null, binary tree doesn't exist.
	constructor(root = null) {
		this.root = root;
	}
}

function findTheTarget(root, target) {
	//edge case
	if (root === null) return false;
	return recursionHelper(root, target);
}

function recursionHelper(curRoot, target) {
	//when to stop, guard clause
	if (curRoot === null) {
		console.log("curRoot is null, return false");
		return false;
	}
	if (curRoot.data === target) {
		console.log("curRoot.data is target, return true");
		return true;
	}

	const left = recursionHelper(curRoot.left, target);
	const right = recursionHelper(curRoot.right, target);
	console.log(`curRoot.data:${curRoot.data} left:${left}, right:${right}`);

	return left || right;
}

const binaryTree = new BinaryTree(
	new Node(0, new Node(-1, new Node(-3), new Node(5)), new Node(2))
);

console.log(binaryTree);

console.log("findTheTarget: ", findTheTarget(binaryTree.root, 5));
