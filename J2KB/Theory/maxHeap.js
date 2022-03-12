//주어진 어레이를 heap sort로 정렬하시오.

/*
1. max힙 구조로 만든다.

0 1 2 3 4 5 6 7 8
7,6,5,8,3,5,9,1,6

i=1부터 순회
	while(i가 0보다 클 때)
		자기 부모랑 비교해서 부모가 더 작으면 교환하고,
		i=부모인덱스

2. 히피파이를 진행하며 정렬한다.
[0]값을 가장뒤 인덱스와 교환한다.
가장 뒤 인덱스를 제외하고, 트리를 쭉 돌면서 [0]의 자리를 찾는다.

남은 트리길이가 1이 되면 정렬완료

size = 8
[0],[1]비교 교환 7,6,8
[0],[2]비교 교환 8,6,7
*/

const arr = [7, 6, 5, 8, 3, 5, 9, 1, 6];
heapSort(arr);

function heapSort(arr) {
	// 1. 최대힙구조 생성: time O(N*logN)
	for (let i = 1; i < arr.length; i++) {
		let c = i;

		// 각 요소들의 부모로 끝까지 올라가면서 교환을 진행한다.
		while (c > 0) {
			const p = Math.floor((c - 1) / 2);
			if (arr[p] < arr[c]) [arr[p], arr[c]] = [arr[c], arr[p]];

			c = p;
		}
	}

	// 2. 크기를 줄여가며 반복적으로 힙을 재구성: time O(N*logN)
	for (let i = arr.length - 1; i >= 0; i--) {
		[arr[0], arr[i]] = [arr[i], arr[0]];

		let p = 0;

		// 0부터 자식 중 큰 쪽을 골라 교환하고 그 노드로 쭉쭉 내려가며 교환을 진행한다.
		while (true) {
			let c = 2 * p + 1;
			if (c >= i) break;

			if (arr[c] < arr[c + 1] && c + 1 < i) c++;

			if (arr[p] < arr[c]) [arr[p], arr[c]] = [arr[c], arr[p]];

			p = c;
		}
	}

	console.log(arr);
	return arr;
}
