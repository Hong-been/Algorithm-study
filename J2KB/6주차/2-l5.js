/**
 * @param {string} s
 * @return {string}
 
 time O(N*2N)=> O(N^2)
 space O(1)
 */
var longestPalindrome = function (s) {
	// edge case
	if (s.length === 1) return s;

	if (s.length === 2) {
		if (s[0] === s[1]) return s;
		else return s[0];
	}

	let result = [0, 0];
	let maxLen = 0;

	for (let i = 0; i < s.length; i++) {
		const idx1 = expandFromMiddle(s, i, i); //b a b a d -> 이런 경우
		const idx2 = expandFromMiddle(s, i, i + 1); //c b b c -> 이런 경우
		const idx = idx1[1] - idx1[0] > idx2[1] - idx2[0] ? idx1 : idx2;
		const len = idx[1] - idx[0] + 1;

		if (maxLen < len) {
			maxLen = len;
			result = idx;
		}
	}
	return s.slice(result[0] + 1, result[1]);
};

function expandFromMiddle(s, l, r) {
	if (l < 0 || r >= s.length || s[l] !== s[r]) return [l, r];

	while (l >= 0 && r < s.length && s[l] === s[r]) {
		l--;
		r++;
	}

	return [l, r];
}

// Runtime: 100 ms, faster than 84.35% of JavaScript online submissions for Longest Palindromic Substring.
// Memory Usage: 45.3 MB, less than 41.55% of JavaScript online submissions for Longest Palindromic Substring.
