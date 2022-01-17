/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
    
 abbccd
    i
 
 ab*c*. 
    j  
 
 [j+1]이 *이면? j+2와 i가 같다면 j+2, 아니라면 i++
 [j+1]이 *가 아니라면? 문자그대로 비교. i++, j++
 
 
 E : .* 가 나오면 무조건 true
 
 [j]가 .이면 i++, j++
 [j]가 *이면 
 둘이 다르면 j++
 
 aa|b a*|b
 
 
 */
var isMatch = function (s, p) {
	s = "#" + s;
	p = "#" + p;

	const dp = Array.from({ length: s.length }, () => Array(p.length));

	dp[0][0] = true;
	for (let i = 1; i < p.length; i++) {
		if (p[i] === "*") dp[0][i] = dp[0][i - 2];
		else dp[0][i] = false;
	}

	for (let i = 1; i < s.length; i++) {
		dp[i][0] = false;
	}
	/* a a*, _ a*

	    "" a *
	""  1  0 1
	a   0  1 1
  a   0  0 1
	*/
	for (let i = 1; i < s.length; i++) {
		for (let j = 1; j < p.length; j++) {
			// s[i]와 p[j]가 같으므로, 이미 p는 s의 패턴으로 가능하다.
			if (s[i] === p[j] || p[j] === ".") dp[i][j] = dp[i - 1][j - 1];
			else if (p[j] === "*") {
				// zero에 해당하는지 확인하는 경우
				dp[i][j] = dp[i][j - 2];

				// p[j-1]와 s[i]가 같으므로, 이미 p는 s의 패턴으로 가능하다.
				// 즉, s[i]가 되기전 s[i-1]일 때 가능하다면, more than zero일 때 가능한 경우이다.
				if (!dp[i][j] && (p[j - 1] === s[i] || p[j - 1] === "."))
					dp[i][j] = dp[i - 1][j];
			} else dp[i][j] = false;
		}
	}
	// console.log(dp);

	return dp[s.length - 1][p.length - 1];
};
// Runtime: 88 ms, faster than 87.98% of JavaScript online submissions for Regular Expression Matching.
// Memory Usage: 42.2 MB, less than 42.89% of JavaScript online submissions for Regular Expression Matching.
