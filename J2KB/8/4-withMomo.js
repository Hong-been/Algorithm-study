function Node(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/*
in order traversing (left-mid-right)

새로 만들어진 트리에서
특정노드의 왼쪽 노드 = 특정노드를 루트로 하는 왼쪽 섭트리의 rightmost 노드
특정노드의 오른쪽 노드 = 특정노드를 루트로 하는 오른쪽 섭트리의 leftmost 노드

이 특징을 사용하기 위해,
dfs로 순회하고 return으로 나올 때 가장 왼쪽노드를 반환하게 한다.
반환된 노드

*/
var flattenBinaryTree = (tree) => {};

flattenBinaryTree(
	new Node(
		1,
		new Node(2, new Node(4), new Node(5, new Node(7), new Node(8))),
		new Node(3, new Node(6))
	)
);
