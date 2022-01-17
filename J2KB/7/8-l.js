/**
 * @param {string} s
 * @return {string}
 
 hash map으로 빈도수를 저장한다.
 가장 많은 char을 찾는다.
 가장 많은 char이 절반+1 보다 많으면 만들수없다.
 
 가장많은 char을 먼저 0,3,5,,,에 배치하고 나머지를 쮹 배치한다.
 length가 끝나면 2,4,6,,,으로 배치한다.

 N = s.length
 A = alphabet 종류
 
 time O(nlogN)
 space O(n + A)
*/
var reorganizeString = function (s) {
	let map = new Map(); // space O(A)
	let index = 0;
	const result = []; // space O(N)

	// time O(N), space O(N)
	s.split("").forEach((c) => map.set(c, (map.get(c) || 0) + 1));
	/*
	String Method "split" with a empty delimiter works like below.
	
	const result = Array(s.length)
	for (i = 0; i < s.length; i++) {
    result[i] = s[i];
	}
	 */

	// Since V8 v7.0 and Chrome 70 Timsort algorithm is used.
	//O(n log(n)) : timsort has average time complexity O(n log(n))
	map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

	// 1. The entries() method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order.
	// 2. deconstructing 후 어레이로 만들어 [['a',3]]형식의 2d array로 만든다.
	// 3. array타입은 sort메소드를 사용가능하다.
	// 4. sort된 2d array를 새로운 맵으로 할당한다. 'a'가 key, 3이 value가 된다.

	if (map.values().next().value > (s.length + 1) / 2) return "";

	// time O(N)
	for (let [char, freq] of map) {
		while (freq--) {
			if (index >= s.length) index = 1;

			result[index] = char;
			index += 2;
		}
	}
	// join.. space O(n), time O(n)
	return result.join("");
};
// Runtime: 80 ms, faster than 80.15% of JavaScript online submissions for Reorganize String.
// Memory Usage: 40.1 MB, less than 97.00% of JavaScript online submissions for Reorganize String.
