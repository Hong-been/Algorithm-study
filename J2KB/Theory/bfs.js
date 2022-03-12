// 최단거리

class Node {
	constructor(data, childrenNodes = []) {
		this.data = data;
		this.children = childrenNodes;
	}
}

const nTree = new Node("A", [
	new Node("B", [new Node("E"), new Node("F")]),
	new Node("C", [new Node("G"), new Node("H")]),
	new Node("D", [new Node("I"), new Node("J")]),
]);

function shortestPath(tree, target) {
	if (!tree) return -1;

	const queue = [[tree, 0]]; //init [tree, depth]

	return bfs(queue, target);
}

function bfs(queue, target) {
	while (queue.length > 0) {
		const [curNode, level] = queue.shift();

		const children = curNode.children;

		for (let i = 0; i < children.length; i++) {
			if (children[i].data === target) return level + 1;
			queue.push([children[i], level + 1]);
		}
	}
	return -1;
}

// console.log(nTree);
console.log(shortestPath(nTree, "F"));
