/*
 
 
 Problem Statement #
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

Example 1:

Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
one [1,5].

Example 2:

Intervals: [[6,7], [2,4], [5,9]]
Output: [[2,4], [5,9]]
Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].

Example 3:

Intervals: [[1,4], [2,6], [3,5]]
Output: [[1,6]]
Explanation: Since all the given intervals overlap, we merged them into one.


input 2d array, [integer,integer]
output 2d array, [integer,integer]
edge

1,4
2,5
7,9


brute
0 1 2 3 4 5 6 7 8 9 
0 1 1 1 1 1 0 1 1 1

time O(input length * input integer Max)
space O(input integer Max)


opimal
0 1 2 3 4 5 6 7 8 9 
0 1 1 1 1 1

1, 4
2는 이 사이에 존재하고 5는 밖에있음
-> 1(,2,4),5

7(둘 중 작은수)이 밖에 있음 합칠수없다
새로운 인터벌로 체크.
[1,5],[7,9]

hash map
{ 1: 5,  7:9 }
(시작점 기준으로 오름차순 정렬
[int,int]함께 정렬

key 중에 시작점보다 작은값이 있고, value가 끝점보다 작다면 value를 갱신.
시작점 중에 7보다 모두 작으면 새로 추가


[[1,4],[2,3],[7,9] ,[2,5]]
arr [[1,4],[2,3],[2,5],[7,9]]

[1,4] 첫번째꺼는 초기화로 추가시키고 시작.
map = {1:4}

[2,3] 흡수-
[2,5] 갱신-
[6,7] 추가-
[9,10] 추가-

추가? map에서 curStart보다 작은 키를 찾았는데, 그 끝점이 curStart보다 작을 때
멀지? map에서 curStart보다 작은 키를 찾았는데, 그 끝점이 curStart보다 크거나 같을때
*/

/*
N : input len
M : stack(정답) length
time O(NLogN + N)
space O(M)
*/

const ans = mergeIntervals([
	[1, 4],
	[2, 6],
	[3, 5],
]);
console.log(ans);

function mergeIntervals(arr) {
	const stack = [];

	arr.sort((a, b) => a[0] - b[0]);

	stack.push([arr[0][0], arr[0][1]]);

	for (let i = 1; i < arr.length; i++) {
		const [curStart, curEnd] = arr[i];
		// console.log(stack);

		const [s, e] = stack[stack.length - 1];

		// 추가? map에서 curStart보다 작은 키를 찾았는데, 그 끝점이 curStart보다 작을 때
		if (s < curStart && e < curStart) {
			stack.push([curStart, curEnd]);
			continue;
		}

		// 멀지? map에서 curStart보다 작거나 같은 키를 찾았는데, 그 끝점이 curEnd보다 크거나 같을때
		if (s <= curStart && e <= curEnd) {
			stack.pop();
			stack.push([s, curEnd]);
			continue;
		}
	}

	return stack;
}
