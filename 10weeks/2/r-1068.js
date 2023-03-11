const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
/*
 N은 50보다 작거나 같은 자연수
  0번 노드부터 N-1번 노드까지, 각 노드의 부모가 주어진다. 만약 부모가 없다면 (루트) -1이 주어진다.
*/
function solution(inputs) {
	const n = Number(inputs[0]);
	const p = inputs[1].split(" ").map(Number);
	const removal = Number(inputs[2]);

	const map = {};
	p.forEach((v, i) => (map[i] = []));

	for (let i = 0; i < p.length; i++) {
		if (p[i] === -1) continue;
		map[p[i]].push(i);
	}

	// 부모한테서 제거할노드를 삭제한다.
	const parent = p[removal];
	if (parent !== -1) {
		const i = map[parent].findIndex((v) => v === removal);
		map[parent].splice(i, 1);
	}

	// 지울 노드의 map을 보면서 쭉 타고내려가면서 map에서 지운다
	const q = [removal];
	while (q.length) {
		const cur = q.shift();

		const children = map[cur];
		q.push(...children);
		delete map[cur];
		// console.log(map);
	}
	// console.log(map);
	return Object.values(map).filter((v) => v.length === 0).length;
}

console.log(solution(inputs));
