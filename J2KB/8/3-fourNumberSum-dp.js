// 10~55분까지
/*

//

array = [7,6,4,-1,1,2]
targetSum = 16

array안의 네 숫자 조합으로 targetSum이 되면, 그 조합을 return.
[[7,6,4,-1] [7,6,1,2]]

6C4 = 6C2 = 가능한 모든 15개 조합을 더해본다. 16이 만들어지는 조합을 답으로 push한다.

0 1 2  3 4 5
7 6 4 -1 1 2


7,6,4,-1
      1
      2
7,6,-1,1
       2
7,6,1,2

6,4,-1,1
       2
 
브루트 : 4중 for문...
옵티멀:      v.  v v v.    
1+1+1+1  1 2 3 4 5 6 7 4 1 3 5
1+2+1
2+2
3+1



   7  6   4  -1 1  2
7  7 13 17 16 17  19  [0,1] [2,3] => 
6    6  10 9  10  12 [1,3] => [0,1,2,3]
4       4  3   4   6
-1         -1  0   2
1              1   3
2                  2


  7  6  4 -1 1 2  i.j    dp[j+1][~]
7   13 11  6 8 9 [0,1]-> 2 row부터
6      10  5 7 8
4          3 5 6 [2,3]=>[0,1,2,3]
-1           0 1
1              3 [4,5]=>[0,1,4,5]
2              

for(i)
	for(j)
  	for(j+1)
    ....
    

i=0 j=1

7 9 0 -> 4개...(7,_,_,0)
(7+0) 9(_+_) -> (7,0,_,_)

7,6 4 -1
7,6 1 2

time O(n^4) in practice, spend less time.
space O(N^2)
*/
function solution(arr, target) {
	const dp = Array.from({ length: arr.length }, () => Array(arr.length)); // space O(n^2)
	const res = [];

	// time O(N^2)
	for (let i = 0; i < dp.length; i++) {
		for (let j = i + 1; j < dp[0].length; j++) {
			dp[i][j] = arr[i] + arr[j];
		}
	}

	// time O(N^2)
	for (let i = 0; i < dp.length; i++) {
		for (let j = i + 1; j < dp[0].length; j++) {
			const need = target - dp[i][j];

			for (let a = j + 1; a < dp.length; a++) {
				for (let b = a + 1; b < dp[0].length; b++) {
					if (dp[a][b] === need) {
						res.push([arr[i], arr[j], arr[a], arr[b]]);
					}
				}
			}
		}
	}

	return res;
}
