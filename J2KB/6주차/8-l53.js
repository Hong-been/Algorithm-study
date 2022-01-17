/*
DP 풀이법

var maxSubArray = function (nums) {
	const dp = [nums[0]];
	let curLargest = dp[0];

	for (let i = 1; i < nums.length; i++) {
		dp.push(Math.max(dp[i - 1] + nums[i], nums[i]));
		if (dp[i] > curLargest) curLargest = dp[i];
	}

	return curLargest;
};
// Runtime: 92 ms, faster than 83.36% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 52.9 MB, less than 5.57% of JavaScript online submissions for Maximum Subarray.
*/

// 어레이안쓰고 푸는 방식
var maxSubArray = function (nums) {
	//edge case
	if (nums.length === 1) return nums[0];

	let curr = nums[0];
	let max = nums[0];

	for (let i = 1; i < nums.length; i++) {
		curr = Math.max(curr + nums[i], nums[i]);
		max = Math.max(curr, max);
	}

	return max;
};
//Runtime: 88 ms, faster than 92.53% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 48.9 MB, less than 38.74% of JavaScript online submissions for Maximum Subarray.

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// curr			 -2  1  -2  4  3   5  6  1   5
// max			 -2  1  1   4  4   5  6  6   6
