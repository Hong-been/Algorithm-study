// 간단한 버전코드 (from Discuss)
// Runtime: 68 ms, faster than 96.55% of JavaScript online submissions for Repeated String Match.
// Memory Usage: 39 MB, less than 63.79% of JavaScript online submissions for Repeated String Match.

// A = a.length , B = b.length
// time O(A * B/A)
// space O(A+B)
const repeatedStringMatch = (A, B) => {
	const count = Math.ceil(B.length / A.length);
	const str = A.repeat(count);
	return str.includes(B) ? count : (str + A).includes(B) ? count + 1 : -1;
};
