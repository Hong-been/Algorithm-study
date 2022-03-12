/*
There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. 
Each task can have some prerequisite tasks 
which need to be completed before it can be scheduled. 
Given the number of tasks and a list of 
prerequisite pairs, find out if it is possible to schedule all the tasks.

Example 1:

Input: Tasks=3, Prerequisites=[0, 1], [1, 2]
Output: true
Explanation: To execute task '1', task '0' needs to finish first. Similarly, task '1' needs 
to finish before '2' can be scheduled. One possible scheduling of tasks is: [0, 1, 2] 
Example 2:

Input: Tasks=3, Prerequisites=[0, 1], [1, 2], [2, 0]
Output: false
Explanation: The tasks have a cyclic dependency, therefore they cannot be scheduled.
Example 3:

Input: Tasks=6, Prerequisites=[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]
Output: true
Explanation: A possible scheduling of tasks is: [0 1 4 3 2 5] 


input integer, 2d array [먼저, 나중]
output boolean
edge task=0 return true;

Tasks=3, Prerequisites=[0, 1], [0, 2]// [먼저, 나중]
{
0 : [1,2]
}
[[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]]

0,5
0,4
1,4
1,3
2,5
3,2



Tasks=6, Prerequisites=[[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]]
{
0: {next:  5,4}
2 : {next :5, before:3}
5 : {before : 2,0}
4 : { before : 1}
3 : {next : 2, before:1 }
1 : {next 3}
}

0 1 2 3 4 5
1 1 1 1 1 1

Tasks=3, Prerequisites=[0, 1], [1, 2], [2, 0]
{
0: {n: 1, b:2}
1: {b: 0, n:2}
2: {b: 1, n:0}
}

0 1 2
0 0 0

0은 2를 먼저 [0]
-> 2는 1을 먼저 [0,2]
-> 1은 비포로 0을 먼저 [0,2,1]-path에 있는 과목이 비포니까 false;


map순회한다면?
0은 비포가 없으니까 가능

2의 비포 가능 [2]
-> 3의비포 가능 [2,3]
-> 1.1은 비포가 없으니까 가능. [2,3,1]

5는 [0],[2]이 둘다 1이니까 가능

// time O(VE)
// space O(V)
*/
var canFinish = function (numCourses, Prerequisites) {
	const map = new Map();
	const arr = new Array(numCourses).fill(0);

	for (let [first, next] of Prerequisites) {
		if (map.has(next)) map.get(next).push(first);
		else map.set(next, [first]);
	}

	console.log(map);
	// time O(N)
	for (let start of map.keys()) {
		const dfs = (path, curClass) => {
			if (!map.has(curClass)) return true;

			//curClass의 비포목록들로 포문
			for (let c of map.get(curClass)) {
				if (path.indexOf(c) > -1) return false;

				// 가능하다고 판단된거면 더이상 안봐도됨
				if (arr[c]) continue;

				if (!dfs([...path, c], c)) return false;
			}

			path.forEach((p) => (arr[curClass] = 1));
			console.log(path);

			return true;
		};

		if (!dfs([start], start)) return false; // O()
	}

	return true;
};
// https://leetcode.com/problems/course-schedule/
