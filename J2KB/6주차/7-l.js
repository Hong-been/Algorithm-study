/*
   "" e x e c u t i o n
""  0 1 2 3 4 5 6 7 8 9					      			
i   1 1 2 3 4 5 6 6 7 8  									
n   2 2 2 3 4 5 6 7 7 8                  								
t   3 3 3 3 4 5 5 6 7 8
e   4 3 4 ✨ 4 5 6 6 7 8
n   5 4 4 4 4 5 6 7 7 7
t   6 5 ✨
i   7
o   8
n   9

----> dp[0][0~n] ===> j

formular -> 

if(one[i-1] !== two[j-1]){ 
    dp[i][j] == Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) +1;
}
if(one[i-1]=== two[j-1]) { dp[i][j] = dp[i-1][j-1]};


(다를 때)
intent -> ex
dp[i-1][j]      "intent"에서 t를 지우고(delete) ex만든 경우 
dp[i][j-1]      "intent"에서 e를 만든 경우에서 x를 추가하기 (insert)
dp[i-1][j-1]    "intent"에서 t를 x로 교체해서(replace) "intenx"를 만들고, "inten"를 "e"로 만든 경우

(같을 때)
inte -> exe
마지막 char이 같으므로 그 전 substring을 같게 만들어주면 된다.
즉, int -> ex로 해주는 경우와 같다.

1. top: int->exe(3)인데, e를 delete하고 이전꺼처럼 진행하면 되니까 3+1=4
2. left: inte->ex(4)인데, left처럼 진행하고 e를 insert하면 되니까 4+1=5
3. dia: int->ex(3)인데, 마지막 e는 그대로 있는 상태에서 이전 str를 dia처럼 진행하면 되니까 그대로 3.



*/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
	const dp = Array.from({ length: word1.length + 1 }, () =>
		Array(word2.length + 1).fill(0)
	);

	for (let i = 0; i < dp.length; i++) {
		for (let j = 0; j < dp[0].length; j++) {
			if (i === 0) {
				dp[i][j] = j;
				continue;
			}

			if (j === 0) dp[i][j] = i;
			else {
				if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
				else
					dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
			}
		}
	}
	// console.table(dp);
	return dp[word1.length][word2.length];
};
// Runtime: 100 ms, faster than 88.40% of JavaScript online submissions for Edit Distance.
// Memory Usage: 43.8 MB, less than 68.27% of JavaScript online submissions for Edit Distance.
