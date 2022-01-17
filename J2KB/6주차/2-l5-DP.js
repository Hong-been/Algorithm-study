/*
abba

  a b b a
a 1 0 0 1
b 0 1 1 0
b 0 0 1 0
a 0 0 0 1

time O(n^2)
space O(n^2)

 */
var longestPalindrome = function (s) {
	let longestLen = 1;
	let longestIdx = [0, 0];
	const dp = Array.from({ length: s.length }, () => Array(s.length).fill(0));

	for (let i = s.length - 1; i >= 0; i--) {
		for (let j = i; j < s.length; j++) {
			if (j === i) {
				dp[i][j] = 1;
				continue;
			}

			if (s[i] === s[j]) {
				if (i + 1 === j || dp[i + 1][j - 1]) {
					dp[i][j] = 1;
					if (longestLen < j - i + 1) {
						longestLen = j - i + 1;
						longestIdx = [i, j];
					}
				}
			}
		}
	}

	// console.table(dp);
	console.log(longestIdx);
	return s.slice(longestIdx[0], longestIdx[1] + 1);
};

console.log(
	longestPalindrome(
		"iptmykvjanwiihepqhzupneckpzomgvzmyoybzfynybpfybngttozprjbupciuinpzryritfmyxyppxigitnemanreexcpwscvcwddnfjswgprabdggbgcillisyoskdodzlpbltefiz"
	)
);
// Runtime: 1200 ms, faster than 21.69% of JavaScript online submissions for Longest Palindromic Substring.
// Memory Usage: 68.9 MB, less than 8.85% of JavaScript online submissions for Longest Palindromic Substring.
