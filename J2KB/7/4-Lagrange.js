/**
 * @param {number} n
 * @return {number}
 
 12
 11+1
 10+2
 9+3
 8+4
 7+5
 6+6
 
   v     v         v
 0 1 2 3 4 5 6 7 8 9 10 11 12 13
 0 1 2 3 4 2 3 4 2 3  2  3  3  2
 
 5= 4+1
 6= 4+1+1
 7= 4+1+1+1
 8= 4+4
 9= 4+4+1
 10=9+1
 11=9+1+1
 12=9+1+1+1+1 4+4+4
 13=9+4
 
 */
var numSquares = function (n) {
	const perfectS = []; // 1,4,9
	let min = Infinity;

	let i = 1;
	while (i * i <= n) {
		perfectS.push(i * i);
		i++;
	}
	// console.log(perfectS);

	const dfs = (curN, cnt) => {
		if (curN < 0) return;
		if (curN === 0) {
			min = Math.min(min, cnt);
			return;
		}

		for (let x = perfectS.length - 1; x >= 0; x--) {
			if (curN - perfectS[x] >= 0 && min > cnt + 1) {
				// console.log(curN-perfectS[x],cnt+1);
				dfs(curN - perfectS[x], cnt + 1);
			}
		}
	};

	dfs(n, 0);

	return min;
};
// Runtime: 496 ms, faster than 17.25% of JavaScript online submissions for Perfect Squares.
// Memory Usage: 40.7 MB, less than 94.54% of JavaScript online submissions for Perfect Squares.
