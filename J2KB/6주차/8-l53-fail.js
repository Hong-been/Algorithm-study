/**
 * @param {number[]} nums
 * @return {number}
     
 
 dp[i]=0~i까지 모두 더한 값.
 
 nums[3]+[4]+[5]+[6] = dp[6] - dp[2]
 
 제일 큰값 - 제일 작은값@@@@ = 2 - -4  = 6 << 아님 ㅋㅎ
 
 max=4
 
 
 ...시간..초과........ㅠㅠ내일 30분 다시!
 
 [0,-3, 1, 1] -> 2
  0 -3 -2 -1
  
  max를 찾고,
  for(o~max): 더하면서 가장 큰값을 찾는다?

                m
-2, 1,-3,4,-1,2,1,-5,4 
-2 -1 -4 0 -1 1 2 -3 1

m-dp[0] = 4
m-dp[1] = 3
m-dp[2] = 6(tmpmax)


[3,-2,-3,-3,1, 3, 0]
 3  1 -2 -5 -4 -1 -1
-1 -4 -2  1  4  3  0
 
 -1 - -5 = 4
 
 
208 / 209 test cases passed.
 */
var maxSubArray = function (nums) {
	// edge case
	if (nums.length === 1) return nums[0];

	let result1 = nums[0];
	let result2 = nums[nums.length - 1];

	let max1 = nums[0] + nums[1];
	let maxIdx1 = 1;

	let max2 = nums[nums.length - 1] + nums[nums.length - 2];
	let maxIdx2 = nums.length - 2;

	const dp = Array(nums.length);
	dp[0] = nums[0];
	const dp2 = Array(nums.length);
	dp2[nums.length - 1] = nums[nums.length - 1];

	for (let i = 1; i < nums.length; i++) {
		result1 = result1 < nums[i] ? nums[i] : result1;

		dp[i] = dp[i - 1] + nums[i];
		if (max1 < dp[i]) {
			max1 = dp[i];
			maxIdx1 = i;
		}
	}

	for (let i = nums.length - 2; i >= 0; i--) {
		result2 = result2 < nums[i] ? nums[i] : result2;

		dp2[i] = dp2[i + 1] + nums[i];
		if (max2 < dp2[i]) {
			max2 = dp2[i];
			maxIdx2 = i;
		}
	}

	let tmpmax = max1;
	for (let i = 0; i < maxIdx1; i++) {
		if (tmpmax < max1 - dp[i]) {
			tmpmax = max1 - dp[i];
			console.log(i, tmpmax, dp[i]);
		}
	}
	max1 = tmpmax;

	result1 = result1 < max1 ? max1 : result1;

	tmpmax = max2;
	for (let i = nums.length - 1; i > maxIdx2; i--) {
		if (tmpmax < max2 - dp2[i]) {
			tmpmax = max2 - dp2[i];
		}
	}
	max2 = tmpmax;

	result2 = result2 < max2 ? max2 : result2;

	return result1 < result2 ? result2 : result1;
};
