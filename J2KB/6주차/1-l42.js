/** 2:50-3:52
 * @param {number[]} height
 * @return {number}
 
 시작점과 
 같은 높이,높은 높이를 만나면 탱크가 생성됨. 그리고 새로운 탱크가 시작될 수 있음.
 낮은 높이는 얼마나 찰수있는지
 
       
 0,1,0,2,1,0,1,3,2,1,2,1



 
 */
var trap = function (h) {
	//edge case : height길이가 1,2이면 항상 0
	// height[0]=0이면 의미없음.. 넘어가

	let result = 0;
	const dp = Array(h.length).fill(0);
	let max = Math.max(h[0], h[1]);
	let maxIdx = h[0] > h[1] ? 0 : 1;

	for (let i = 2; i < h.length; i++) {
		if (h[i] <= h[i - 1]) continue;

		let tankH = Math.min(max, h[i]);

		for (let j = maxIdx + 1; j < i; j++) {
			let water = tankH - h[j];

			if (dp[j] < water && h[j] < tankH) {
				result -= dp[j];
				dp[j] = water;
				result += dp[j];
			}
		}

		if (max <= h[i]) {
			max = h[i];
			maxIdx = i;
		}
	}
	// console.log(dp);

	return result;
};
// Runtime: 84 ms, faster than 65.02% of JavaScript online submissions for Trapping Rain Water.
// Memory Usage: 40.4 MB, less than 90.77% of JavaScript online submissions for Trapping Rain Water.
