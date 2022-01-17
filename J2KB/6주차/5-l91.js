/**
 * @param {string} s
 * @return {number}
 
 2 2 6
 22 6
 2 26
 
 점화식을 찾아라..?
 
 0 1 2
 B A F

 root
 /  \ 
0   01
|\   \
1 12  2
|
2

1 1 1 0 6

             root
            /   \
           1     11
         / \     / \
        1   11   1  10
       /\   /\  /\   \
      1 10 0 06 0 06  6
     /\  \ 
    0 06  6
    
 1-1-1-0/06
 1-1-10-6 O
 1-11-X
 11-1-X
 11-10-6 O
 
 11106
 1110-6, 111-0-6,11-1-0-6
 111-06
 
     0 1 2 3 4
dp =[1,2,3,2,2]

dp[1]=1-1,11
dp[2]=1-1-1, 11-1, 1-11
dp[3]=본인이 not valid이면 dp[3-2]=dp[1], 1-1-10, 11-10
dp[4]=dp[3]=2, 바로전꺼랑 06합치면 not valid니까 dp[4-2]는 안됨.

 */
var numDecodings = function (s) {
	//edge case
	if (s.length <= 1) return isValid(s);

	const dp = new Array(s.length).fill(0);
	dp[0] += isValid(s[0]) ? 1 : 0;
	dp[1] += isValid(s[1]) ? dp[0] : 0;
	dp[1] += isValid(s[0] + s[1]) ? 1 : 0;

	for (let i = 2; i < s.length; i++) {
		if (isValid(s[i])) dp[i] += dp[i - 1];
		if (isValid(s[i - 1] + s[i])) dp[i] += dp[i - 2];
	}
	// console.log(dp);
	return dp[s.length - 1];
};

function isValid(input) {
	if (input[0] === "0") return false;
	input = Number(input);

	if (input >= 1 && input <= 26) return true;
	else return false;
}
// Runtime: 72 ms, faster than 95.48% of JavaScript online submissions for Decode Ways.
// Memory Usage: 39.9 MB, less than 92.76% of JavaScript online submissions for Decode Ways.
