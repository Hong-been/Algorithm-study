function Node(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

var flattenBinaryTree = (tree) => {
	//edge
	if (!tree) return tree;

	let head = null;
	let curr = head;

	const dfs = (curNode) => {
		if (!curNode.left && !curNode.right) {
			if (!head) {
				head = curNode;
				curr = head;
			} else {
				curr.right = curNode;
				curNode.left = curr;
				curr = curr.right;
			}

			return;
		}

		// 왼쪽노드로 들어갔는데, 리프노드면 현재노드를 right에 추가한다. return
		if (curNode.left) dfs(curNode.left);

		// left노드에서 return하면 부모노드로 돌아온다. 부모노드를 right에 추가한다.
		curr.right = curNode;
		curNode.left = curr;
		curr = curr.right;

		// 오른쪽노드로 들어갔는데, 리프노드면 현재노드를 right에 추가한다. return
		if (curNode.right) dfs(curNode.right);
	};

	dfs(tree);

	return head;
};

const leftMostNode = flattenBinaryTree(
	new Node(
		1,
		new Node(2, new Node(4), new Node(5, new Node(7), new Node(8))),
		new Node(3, new Node(6))
	)
);

let top = leftMostNode;
while (top) {
	console.log(top.val);
	if (top.right) top = top.right;
	else break;
}

let tail = top;
while (tail) {
	console.log(tail.val);
	tail = tail.left;
}

/*
dfs 사용
왼쪽으로 쭉쭉 들어간다. child nodes가 없는 4를 만나면 얘를 head로 사용한다.
return으로 부모노드로 돌아가서 얘를 curr.right로 넣는다. head포인터로 사용할 curr이 필요. curr = curr.right
오른쪽으로 쭉쭉 들어간다. 7을 만나면 curr.right에 넣는다.

*/
