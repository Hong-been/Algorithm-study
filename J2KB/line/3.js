/* 그러면 n^2번마다 매번 n^2..돌아가 600만..
가장 가까운 좌석 찾기 [1,1],[5,5],[5,1] 

0. 2~k 까지 for문, max초기화.
    1. [1,n] ~ [n,1] 까지 for loop, matrix[1][1]===0 이면 continue;
        2. 가장 가까운 좌석을 찾고,
        3. 그 좌석간의 거리를 재고 max업데이트하면서 돈다. [2,1]은 거리 "1". max값이 k값이므로 max업데이트.
    4. for loop끝나면 max인덱스를 k로 업데이트한다. 이 답을 matrix에 0으로 올리고 
        정답 array에 추가시킨다.
*/
function solution(n, k) {
	//5, 12 -> [4,4]
	var answer = [];
	const matrix = new Array(n + 1).fill(new Array(n + 1));
	const used = [[1, 1]];

	if (k === 1) return [1, 1];

	for (let i = 2; i <= k; i++) {
		let max = 0;
		let maxIdx;
		for (let c = n; c >= 1; c--) {
			for (let r = n; r >= 1; r--) {
				//3. 그 좌석간의 거리를 재고 max업데이트하면서 돈다. [2,1]은 거리 "1". max값이 k값이므로 max업데이트.
				if (matrix[r][c] === 0) continue;

				const [a, b] = findCloest(used, r, c, n);

				if (max <= Math.abs(a - r) + Math.abs(b - c)) {
					max = Math.abs(a - r) + Math.abs(b - c);
					maxIdx = [r, c];
				}
			}
		}
		answer = maxIdx;
		matrix[(maxIdx[0], maxIdx[1])] = 0;
		used.push(maxIdx);
	}
	return answer;
}

function findCloest(used, r, c, n) {
	let dis = n * 2;
	let cloest;

	for (let [a, b] of used) {
		if (dis > Math.abs(a - r) + Math.abs(b - c)) {
			cloest = [a, b];
			dis = Math.abs(a - r) + Math.abs(b - c);
		}
	}
	return cloest;
}
