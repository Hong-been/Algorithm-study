/*
Input: s = "catsandog",
wordDict = ["cats","dog","sand","and","cat"]
Output: false

Input : s(empty X), wordDict(empty X) 둘다 모두 영어소문자만.
s<=300, wordDict.length<=1000, wordDict[i].length<=20

Output : Boolean

0 1 2 3 4 5 6 7 8
c a t s a n d o g
^
 012345678
 catsandog  
1001100100 dp[]

c
ca
cat,at,t(한번이라도 1이 나오면 바로 넘어감)
cats
catsa, atsa, tsa, sa,a
catsan
catsand > sand and
catsando > 
catsandog > og

 aaaaa   "aaa" "a"
111111

a aaa a
aaa a a
a a aaa
*/
var wordBreak = function (s, wordDict) {
	const dp = Array(s.length + 1).fill(0);
	dp[0] = 1;

	for (let i = 0; i <= s.length; i++) {
		let tmp = i;
		while (tmp-- >= 0) {
			if (dp[tmp] && wordDict.includes(s.slice(tmp, i))) {
				dp[i] = 1;
				break;
			}
		}
	}

	return dp[s.length] ? true : false;
};
// Runtime: 80 ms, faster than 74.53% of JavaScript online submissions for Word Break.
// Memory Usage: 40.9 MB, less than 39.28% of JavaScript online submissions for Word Break.
