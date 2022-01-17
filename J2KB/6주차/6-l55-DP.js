/**
 * @param {number[]} nums
 * @return {boolean}
 
 N=nums.length
 time O(N*N)
 space O(N)
 
 */
var canJump = function (nums) {
	//edge case
	if (!nums) return false;
	if (nums[0] === 1 && nums[1] === 0) return false;

	const dp = makeDP(nums);

	if (dp[nums.length - 1]) return true;
	return false;
};

function makeDP(nums) {
	const dp = Array(nums.length).fill(0); // space O(n)
	dp[0] = 1;

	for (let i = 0; i < nums.length - 1; i++) {
		// time O(n)
		if (dp[i]) {
			let jump = nums[i];
			while (jump > 0) {
				//time O(n)
				if (i + jump > nums.length - 1) jump = nums.length - 1 - i;
				dp[i + jump] = 1;
				jump--;
			}
		}
	}
	return dp;
}
// Runtime: 1052 ms, faster than 19.00% of JavaScript online submissions for Jump Game.
// Memory Usage: 43.8 MB, less than 38.57% of JavaScript online submissions for Jump Game.
