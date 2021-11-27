/*
시작: 4:45 ~ 5:...?

199. Binary Tree Right Side View
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Input: root = []
Output: []

[1,]
curDepth=0

queue에 넣을때 right,left순서로 넣는다.
현재 답에 넣어야하는 뎁쓰가 1이니까, 1인 depth가 큐에서 처음 나오면 답에 추가한다.
그리고 넣어야하는 뎁쓰를 1증가시키고, 이 뎁쓰에 해당되지 않는 놈은 큐에서 빼서 버려.

time O(N)
space O(N)


     1(0)          <- 1
 2(1)     3(1)     <- 3
   5       (2)     <- 5 
     6     (3)     <- 6 
[1,3,5,6]
*/
function rightSideView(root) {
	if (!root) return [];
	let curDepth = 0;
	const result = [];
	const queue = [[root, 0]]; //[]

	const bfs = () => {
		while (queue.length) {
			const [curNode, depth] = queue.shift();
			if (!curNode) continue;

			if (depth === curDepth) {
				result.push(curNode.val);
				curDepth++;
			}
			queue.push([curNode.right, depth + 1]);
			queue.push([curNode.left, depth + 1]);
		}
		return result;
	};

	return bfs();
}
