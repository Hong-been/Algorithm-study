/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 
 b=cdabcdab
 abcd, cnt=1
 찾을 수 없다.
 이어 붙여서 abcdabcd cnt=2
 찾을 수 없다.
 이어붙여서 abcdabcdabcd cnt=3
 찾을 수 있다. -> return 3
 
 b=aa
 a,cnt=1
 찾을 수 없다.
 aa cnt=2
 찾을 수 있다. -> return 2
 
 b=a
 a,cnt=1
 찾을 수 있다. -> return 1
 
 b=aac
 aaac, cnt=1
 찾을 수 있다. -> return 1
  
 a길이:4  b길이:10 (d abcd abcd a)
 10은 4개짜리가 3번들어갈수있고,4번들어갈수있다. 4개 이어붙인 스트링에서 못찾으면 없는거.
 10 나누기 4 = 2...2 -> 몫 + 2 = 4 4번까지 들어갈수있다.
 
 a=abc, b=c abc abc abc
 10 나누기 3 = 3...1 -> 몫+2=5
 
 a=abcde(5) b=cde abcde a (9)
 2 가능, 3가능.
 9 나누기 5 = 1 ...4 -> 몫+2까지 이어붙여보고 없으면 못찾는거.
 */

// A = a.length , B = b.length
// time O(A * B / A)
// space O(A + B) ??
// Runtime: 76 ms, faster than 82.76% of JavaScript online submissions for Repeated String Match.
// Memory Usage: 40.5 MB, less than 36.21% of JavaScript online submissions for Repeated String Match.
var repeatedStringMatch = function (a, b) {
	const repeat = Math.floor(b.length / a.length) + 2; // repeat max 10^4
	let concat = a;
	let cnt = 1;

	for (let i = 0; i < repeat; i++) {
		// O(B / A)
		if (concat.indexOf(b) > -1) return cnt;
		concat += a; // O(A)
		cnt++;
	}
	return -1;
};
