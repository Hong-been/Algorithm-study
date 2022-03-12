/*

input: 2d array, a pair of integer
output: boolean
edge: empty? true.

1,4
2,5
7,9

한 쌍내에서 오름차순 솔트
[0]기준으로 솔트

cur=[2,5]는 이전 미팅을 봤을 때 , pre[1]<cur[0]-> false

N : arr.length
time O(N+NlogN + N) => O(NlogN + N)
space O(1)

- Optimal(34min rested)

7,9
4,1
5,2

스택에 저장 [7,9],[1,4]
[4,1]
  정렬, [1,4]
  [0]끼리 비교, 1<7
  [1]끼리 비교, 4<9
  각각 부등호가 같으므로 안겹침. 스택에 추가

[5,2]
  정렬, [2,5]
  스택에 있는 애들이랑 다 비교해야함
    [7,9]랑 안겹침
    [1,4]랑 겹침. return false;

time O(N*N)
space O(N)... brute가 옵티멀


*/

const solution = (aps) => {
	// edge: empty? true.
	if (!aps.length) return true;

	// 쌍내에서 오름차순 솔트
	aps.forEach((ap) => {
		ap.sort((a, b) => a - b);
	});
	// [0]기준으로 솔트
	aps.sort((a, b) => a[0] - b[0]);

	for (let i = 1; i < aps.length; i++) {
		const cur = aps[i];
		const pre = aps[i - 1];
		// cur=[2,5]는 이전 미팅을 봤을 때 , pre[1]>cur[0]-> false
		if (pre[1] > cur[0]) return false;
	}

	return true;
};

const test = (solution, input, expected) => {
	const returned = solution(...input);
	console.log("return :", returned);
	return expected === returned;
};

const argus = [
	{
		input: [
			[
				[1, 4],
				[2, 5],
				[7, 9],
			],
		],
		expected: false,
	},
	{
		input: [
			[
				[6, 7],
				[2, 4],
				[8, 12],
			],
		],
		expected: true,
	},
	{
		input: [
			[
				[4, 5],
				[2, 3],
				[3, 6],
			],
		],
		expected: false,
	},
];

for (let argu of argus) {
	console.log(...argu.input);
	if (!test(solution, argu.input, argu.expected)) {
		console.log("Test Failed");
		continue;
	}
	console.log("Test Passed");
}
