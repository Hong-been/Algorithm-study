/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 
 1 <-> 3 (x) 젓지는 누구를 믿을 수 없음, 사람들끼리는 서로 믿어도 됨.(cycle 허용, source없어도 허용)
 2 /
 
 
     3 (x) 젓지의 조건: 누구를 믿으면 안된다. incoming이 (사람수-1) 이어야 한다.
     |
 1 - 2
trust가 빈 어레이 && incoming이 (n-1) 이어야 젓지임.
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
E : the number of Edges(= input trust.length)

time O(E)+O(E) -> O(E)
space O(E)

Runtime: 136 ms, faster than 46.04% of JavaScript
Memory Usage: 48 MB, less than 25.33% of JavaScript
*/
var findJudge = function (n, trust) {
	if (trust.length === 0 && n === 1) {
		return n;
	}

	const map = topologicalSort(trust); // time : O(E)

	for (let [key, value] of map) {
		// time O(E)
		if (value.trust.length === 0 && value.incoming === n - 1) return key;
	}

	return -1;
};

function topologicalSort(arr) {
	const map = new Map();

	for (let [person, potential] of arr) {
		if (!map.has(person)) {
			map.set(person, { incoming: 0, trust: [potential] });
		} else map.get(person).trust.push(person);

		if (!map.has(potential)) {
			map.set(potential, { incoming: 1, trust: [] });
		} else map.get(potential).incoming++;
	}
	return map;
}
