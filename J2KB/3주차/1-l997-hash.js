/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 
 1 <-> 3 (x) 젓지는 누구를 믿을 수 없음, count-- 되면 바로 조건 아웃
 2 /
 
 
     3 (x) 젓지의 조건: 1.누구를 믿으면 안된다. 2. count가 (사람수-1) 이어야 한다.
     |
 1 - 2

*/

console.log(
	findJudge(4, [
		[1, 3],
		[1, 4],
		[2, 3],
		[2, 4],
		[4, 3],
	])
); // expected 3

/*
N: the number of nodes(= input n)
T : the number of Edges(= input trust.length)

time O(N) + O(T) + O(N) -> O(N+T)
space O(N)

Runtime: 108 ms, faster than 89.87% of JavaScript 
Memory Usage: 46.7 MB, less than 71.81% of JavaScript 
 */
var findJudge = function (n, trust) {
	if (trust.length === 0 && n === 1) {
		return n;
	}
	const count = new Array(n + 1).fill(0); //time O(N)

	for (let [person, potential] of trust) {
		//time O(T)
		count[person]--;
		count[potential]++;
	}

	for (let i = 1; i <= n; i++) {
		//time O(N)
		if (count[i] === n - 1) return i;
	}
	return -1;
};
