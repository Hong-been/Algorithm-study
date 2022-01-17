var numSquares = function (n) {
	const dp = Array(n + 1).fill(Number.MAX_VALUE);
	for (let i = 0; i <= 3; i++) {
		dp[i] = i;
	}

	for (let i = 4; i <= n; i++) {
		let p = 1;
		while (p * p <= i) {
			dp[i] = Math.min(dp[i], dp[i - p * p] + 1);
			p++;
		}
	}
	// console.log(dp);

	return dp[n];
};
// Runtime: 180 ms, faster than 63.10% of JavaScript online submissions for Perfect Squares.
// Memory Usage: 44.2 MB, less than 58.95% of JavaScript online submissions for Perfect Squares.
