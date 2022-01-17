/**
 * @param {number[]} nums
 * @return {boolean}
 
 N=nums.length
 time O(N)
 space O(1)
 
 */
var canJump = function (nums) {
	let lastReachableIdx = nums.length - 1;

	for (let i = nums.length - 2; i >= 0; i--) {
		if (i + nums[i] >= lastReachableIdx) lastReachableIdx = i;
	}

	return lastReachableIdx === 0;
};
// Runtime: 84 ms, faster than 86.74% of JavaScript online submissions for Jump Game.
// Memory Usage: 42.9 MB, less than 69.63% of JavaScript online submissions for Jump Game.
