import UnitTest from 'unitTest';
/*

input: integer arr, unsorted / integer K
output: integer arr, length K
edge: k===0? return []; arr empty? [1,2,,,,k]

작은 k개의 missing 양수를 찾아라..

3,-1,4,5,5

sort
-1 3 4 5 5
           i

2 3 4, k=3 [1,5,6]
      i

처음 양수발견, [i]보다 작은 양수를 차례로 정답에 추가, 추가하다가 k개가 되면 그만.
[i],[i-1]가 둘다 양수면서 1차이면 넘어가
같은것도 볼필요없음

다 돌았는데 k개안됐으면
제일큰수 다음부터 k개될때까지 채움

time O(nlogN + N)
space O(K)-ans

- Optimal
-1 3 4 5 5
l
     m
        r
3 -1 4 5 5

{
  3:true
}
max=5
set(1,2)

-2 -3 4,1,10,-2,6 k=2
                  i
 
둘다음수면 넘어가
양수는 키로 등록
{4:true, 1:true, 10:t}
두 숫자 사이를 등록, key에 있으면 등록안함, 등록하다가 k개되면 멈춤.
set={1,2}
3추가하고 힙소트? 가장작은 2개만 추린다.
2,3,,,,9추가하고 힙소트..
2,3,5,6,7,8추가하고 힙소트..

time O(NlogN)
space O(N + K-ans)

https://leetcode.com/problems/first-missing-positive/discuss/1700629/Java-Simple-O(n)-solution-with-O(1)-space
*/
const solution = (nums,k) => {
  //edge: k===0? return []; arr empty? [1,2,,,,k]
  if(k===0) return [];
  if(nums.length===0) Array(k).map((x,i)=>i+1);

  const ans=[];
  // sort
  nums.sort((a,b)=>a-b);
  
  for(let i=0;i<nums.length;i++){
    if(nums[i]<=0) continue;

    // 양수발견, [i]보다 작은 양수를 차례로 정답에 추가, 추가하다가 k개가 되면 그만.
    let small = null;
    if(ans.length===0) small=1;
    else if(nums[i]===nums[i-1]) small=nums[i];
    else small = nums[i-1]+1;

    while(small<nums[i] && ans.length < k){
      ans.push(small); //[1,2]
      small++; //3
    }
    if(ans.length===k) return ans;
  }

  let max = nums[nums.length-1];
  while(ans.length<k){
    max++;
    ans.push(max);
  }

  return ans;
};


const arguments = [
	{
		input: [
			[3, -1, 4, 5, 5],3
		],
		expected: [1,2,6],
	},
	{
		input: [
			[2, 3, 4],3
		],
		expected: [1,5,6],
	},
	{
		input: [
			[-2,-3,4],2
		],
		expected: [1,2],
	},
];

UnitTest.testSoution(solution, arguments);