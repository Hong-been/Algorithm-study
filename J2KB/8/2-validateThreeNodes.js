function Node(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/*
bfs로 순회하면서 one or three를 먼저 찾아야 한다. 그 전에 two가 나온다면 바로 false.
one or three를 찾았다면 root로 저장한다.
q를 비우고, two가 root보다 작다면 왼쪽, 같거나 크다면 오른쪽노드로 bfs들어가기 위해 q에 root.left or root.right 넣어준다.

two보다 three를 먼저 찾으면 바로 false.
two를 찾았으면, 얘가 subRoot가 된다. 
subRoot보다 three가 작다면 왼쪽, 같거나 크다면 오른쪽노드로 bfs를 들어가며 three를 찾는다.
찾으면 true. 다 돌았는데 못찾으면 false.

*/
function ValidateThreeNodes(tree, one, two, three) {
	let q = [tree];
	let root = null,
		subRoot = null,
		descendant = null,
		isFoundDescendant = false;

	// time O(Depth)
	// space O(Depth)

	while (q.length) {
		const cur = q.shift();
		if (!cur) continue;

		// root는 못찾았는데, 그 자손을 먼저 찾은 경우
		if (!root && (subRoot || isFoundDescendant)) return false;

		// subRoot는 못찾았는데 자손을 먼저 찾은 경우
		if (!subRoot && isFoundDescendant) return false;

		// root를 찾아서 할당.
		if (!root && (cur.val === one || cur.val === three)) {
			if (cur.val === one) descendant = three;
			else descendant = one;

			root = cur;

			if (root.val > two) q = [root.left];
			else q = [root.right];
		}

		// subRoot를 찾아서 할당
		else if (root && cur.val === two) {
			subRoot = cur;

			if (subRoot.val > descendant) q = [subRoot.left];
			else q = [subRoot.right];
		}

		// descendant를 찾은 경우
		else if (subRoot && cur.val === descendant) {
			isFoundDescendant = true;
			return true;
		}

		// 찾는노드 중 아무것도 해당안되는 경우
		else {
			// val랑 비교해서 오른쪽 or 왼쪽만 넣어주기 추가한다면?
			q.push(cur.left);
			q.push(cur.right);
		}
	}

	if (!isFoundDescendant || !subRoot) return false;
}

const tree = new Node(
	5,
	new Node(2, new Node(1, new Node(0)), new Node(4, new Node(3))),
	new Node(7, new Node(6), new Node(8))
);

console.log(ValidateThreeNodes(tree, 5, 2, 8));
