/*

input: integer array, integer target
output: 타겟과 가장 가까운 triplet sum, 여러개라면 smallest sum.
edge: arr.length<3? return 0..(불가능)


-2 0 1 2, target=2
   i
     j
       k

- Brute
-1, gap=3
0, gap=2
1, gap=1 *
3, gap=1

gap이 더 작다면 sum을 정답으로 업데이트
gap이 같다면 sum이 더 작은 것으로 업데이트

N: arr.length
time O(N^3)
space O(1)

- Optimal

-2 0 1 2
   i
     l
       r

sorting

(i,l,r초기값으로 계산해서 셋팅)
cloestSum = 1 
cloestGap = 1
*gap은 항상 절대값으로 계산

for(i=0~i=arr.length-2)
[i]=-2
while(l<r)
  curTarget=4 > [l]+[r]=2, curSum=0,curGap=2,
    cloestGap과 같음, cloestSum과 비교해서 더 작은걸로 정답 업데이트, l++
  curTarget=4 > [l]+[r]=3, curSum=1,curGap=1
    cloestGap보다 작다. 정답 업데이트, l++

[i]=0
while(l<r)
  curTarget=-2 < [l]+[r]=3, curSum=3,curGap=1
    cloestGap과 같음, cloestSum과 비교해서 더 작은걸로 정답 업데이트, r--


time O(nLogN + N^2)
space O(1)
*/

const tripletSum = (nums, target) => {
	//edge: arr.length<3? return 0..(불가능)
	if (nums.length < 3) return 0;

	nums.sort((a, b) => a - b);

	// let i = 0;
	// let l = i + 1;
	// let r = nums.length - 1;
	let cloestSum = null;
	let cloestGap = null;

	for (let i = 0; i < nums.length - 2; i++) {
		let l = i + 1;
		let r = nums.length - 1;
		if (i === 0) {
			cloestSum = nums[i] + nums[l] + nums[r];
			cloestGap = Math.abs(target - cloestSum);
		}

		while (l < r) {
			let curTarget = target - nums[i];
			let curSum = nums[l] + nums[r] + nums[i];
			let curGap = Math.abs(target - curSum);

			if (cloestGap > curGap || (cloestGap === curGap && cloestSum > curSum)) {
				// 정답 업데이트
				cloestSum = curSum;
				cloestGap = curGap;
			}
			if (curTarget > nums[l] + nums[r]) l++;
			else r--;
		}
	}

	return cloestSum;
};

const test = (solution, input, expected) => {
	const returned = solution(...input);
	console.log(returned);
	return expected === returned;
};

const inputs = [
	[[-2, 0, 1, 2], 2, 1],
	[[-3, -1, 1, 2], 1, 0],
	[[1, 0, 1, 1], 100, 3],
];

for (let input of inputs) {
	console.log(input);
	console.log(test(tripletSum, [input[0], input[1]], input[2]));
}
