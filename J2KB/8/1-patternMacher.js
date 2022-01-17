/* "gogopowerrangergogopowerranger"
"xxyxxy" 에서 x,y갯수를 센다. 
x=4,y=2

x길이가 
1이라고 하면, y길이 = (30 - 1 * 4)/2 =13
2라고 하면, y길이 = 11
...
7이라고 하면 y길이 =1 

i=0) x, 길이 1이니까 x=g,
i=1) x, x=g이어야하는데 o임. 탈락!

i=0) x, 길이 2니까 x=go
i=1) x, x=go 일치
i=2) y, 길이 13이니까 y=powerranger
i=4) x, x=go 일치
i=5) x, x=go 일치
i=6) y, y=powerranger 일치
끝! 정답!



만약에 x=0, y=6개이면? 
즉, 둘 중 하나가 0개이면?
0개인 패턴은 ''가 되고,
0개가 아닌 패턴은 전체 스트링 길이를 6등분한다.


// time : O(P * 2S)=> O(PS) => O(S^2)
// space : slice함수 동작할 떄 O(S)

*/

var patternMatcher = (p, s) => {
	// [x,y]
	const nums = [0, 0];
	let ans = [null, null];

	[...p].forEach((c) => {
		if (c === "x") nums[0]++;
		else nums[1]++;
	});

	let startAt = 0;
	let [xLen, yLen] = calcXYLen(1, s, nums); //[1,13]
	// x가 없는 패턴이라면, xLen을 1로 가정하고 계산해도
	// x갯수가 0개이므로 길이가 0이라고 가정하는 결과와 같게 나온다.

	let i = 0;
	while (i < p.length) {
		if (p[i] === "x" && !ans[0]) {
			ans[0] = s.slice(startAt, startAt + xLen);
			startAt += xLen;
			i++;
			// console.log("1st if: ", ans);
		} else if (p[i] === "x") {
			if (ans[0] === s.slice(startAt, startAt + xLen)) {
				startAt += xLen;
				i++;
			} else {
				i = 0;
				ans = [null, null];
				startAt = 0;
				[xLen, yLen] = calcXYLen(xLen + 1, s, nums);
			}
			// console.log("2nd if: ", ans);
		} else if (p[i] === "y" && !ans[1]) {
			ans[1] = s.slice(startAt, startAt + yLen);
			startAt += yLen;
			i++;
			// console.log("3rd if: ", ans);
		} else if (p[i] === "y") {
			if (ans[1] === s.slice(startAt, startAt + yLen)) {
				startAt += yLen;
				i++;
			} else {
				i = 0;
				ans = [null, null];
				startAt = 0;
				[xLen, yLen] = calcXYLen(xLen + 1, s, nums);
			}
			// console.log("4th if: ", ans);
		}
	}

	ans.forEach((v, i) => {
		if (!v) ans[i] = "";
	});

	return ans;
};
function calcXYLen(xLen, s, nums) {
	if (!nums[0]) return [0, s.length / nums[1]];
	if (!nums[1]) return [s.length / nums[0], 0];
	return [xLen, (s.length - xLen * nums[0]) / nums[1]];
}

const ans = patternMatcher(
	"yxyyyxxy",
	"baddaddoombaddaddoomibaddaddoombaddaddoombaddaddoombaddaddoomibaddaddoomibaddaddoom"
);
// [ 'baddaddoomi', 'baddaddoom' ]
console.log(ans);
/*


*/
