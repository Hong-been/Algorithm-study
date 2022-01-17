/**
 * @param {number} n
 * @return {string[]}
 ()()()
 
 ""
 -> "(" 재귀
 -> ")" 재귀
 
 언제 나오냐면? 
 "(" 개수가 input이면 더이상 재귀안함. 아니면 "(" 재귀.
 ")" 개수가 input이면 더이상 재귀안하고 정답에 추가하고 return. 아니면 ")" 재귀.
 
 엥? 30분만에 풀었다고? ,,엥?
 Runtime: 76 ms, faster than 69.36% of JavaScript online submissions for Generate Parentheses.
Memory Usage: 40.1 MB, less than 79.49% of JavaScript online submissions for Generate Parentheses.

time: O(2^(2n) * n)
space : call stack -> O(2n)

 */
var generateParenthesis = function (n) {
	const res = [];
	let numS = 0,
		numE = 0;

	const dfs = (st, numS, numE) => {
		if (numS < numE) return;
		if (numS > n) return;

		if (numE >= n) {
			res.push(st);
			return;
		}

		dfs(st + "(", numS + 1, numE);
		dfs(st + ")", numS, numE + 1);
	};

	dfs("", numS, numE);

	return res;
};
/*
var generateParenthesis = function(n) {
    const res = [];
    backtrack(res, "", 0, 0, n);
    return res;
};

function backtrack(res, curS, open, close, n){
    if(curS.length === n*2) res.push(curS);
    if(open<n) backtrack(res, curS+"(", open+1, close, n);
    if(close<open) backtrack(res, curS+")", open, close+1, n);
}
 */
