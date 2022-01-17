function optimalFlattenTree(root) {
	if (!root) return root;
	//come back
	const [leftMost, rightMost] = recursionHelper(root);
	return leftMost;
}
function recursionHelper(curNode) {
	//base case
	let leftMost;
	let rightMost;

	if (!curNode.left) {
		leftMost = curNode;
	} else {
		const [leftSubtreeLeftMost, leftSubtreeRightMost] = recursionHelper(
			curNode.left
		);

		linkingConnection(leftSubtreeRightMost, curNode);
		leftMost = leftSubtreeLeftMost;
	}

	if (!curNode.right) {
		rightMost = curNode;
	} else {
		const [rightSubtreeLeftMost, rightSubtreeRightMost] = recursionHelper(
			curNode.right
		);
		linkingConnection(curNode, rightSubtreeLeftMost);
		rightMost = rightSubtreeRightMost;
	}

	return [leftMost, rightMost];
}

function linkingConnection(left, right) {
	left.right = right;
	right.left = left;
}

function Node(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

const tree = new Node(
	1,
	new Node(2, new Node(4), new Node(5, new Node(7), new Node(8))),
	new Node(3, new Node(6))
);

let leftMost = optimalFlattenTree(tree);

let tmp = leftMost;
while (tmp) {
	console.log(tmp.val);
	tmp = tmp.right;
}

//console.log(optimalFlattenTree(tree))
