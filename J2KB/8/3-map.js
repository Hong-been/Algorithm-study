/*
array = [7,6,4,-1,1,2]
targetSum = 16

array안의 네 숫자 조합으로 targetSum이 되면, 그 조합을 return.
[[7,6,4,-1] [7,6,1,2]]

6C4 = 6C2 = 가능한 모든 15개 조합을 더해본다. 16이 만들어지는 조합을 답으로 push한다.

0 1 2  3 4 5
7 6 4 -1 1 2

sort한다.
 0 1 2 3 4 5
-1 1 2 4 6 7
 i     j
           l
				   r
 
i+j=3 , 13 더 필요함.
l+r=11, 부족하니까 l++ 
l+r=13, 부족하지만 l이 끝에서 두번째로 오면 종료, j++
l+r=13!! 타겟이니까 정답에 추가 [i,j,l,r], 종료 j++

r이 범위를 넘어감. l++하고 r=l+1
l이 끝에서 두번째로 오면 종료, i++ j++

l===r이 되면 종료

*/
//time O(dp key갯수 * K^2) (K<N, K는 순서쌍 최대갯수)
//space: O(N^2+R)
//R: max length of result array

function fourNumberSum(arr, target) {
	const dp = new Map();
	const res = [];

	// time O(N^2)
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			const sum = arr[i] + arr[j];

			if (dp.has(sum)) {
				arr[i] < arr[j]
					? dp.get(sum).push([arr[j], arr[i]])
					: dp.get(sum).push([arr[i], arr[j]]);
			} else {
				arr[i] < arr[j]
					? dp.set(sum, [[arr[j], arr[i]]])
					: dp.set(sum, [[arr[i], arr[j]]]);
			}
		}
	}
	// console.log(dp);

	// time O(dp key갯수 * K^2) (K<N, K는 순서쌍 최대갯수)
	for (let [sum, values] of dp) {
		const need = target - sum;

		if (dp.has(need)) {
			for (let [p1, p2] of values) {
				for (let [n1, n2] of dp.get(need)) {
					if (p2 < n1) continue;
					if (p1 === n1 || p1 === n2 || p2 === n1 || p2 === n2) continue;
					res.push([p1, p2, n1, n2]);
				}
			}
		}
	}

	return res;
}

const ans = fourNumberSum([-2, 0, -1, 1, 2, 3, -3], 0);

console.log(ans);
