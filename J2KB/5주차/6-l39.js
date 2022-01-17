//1:17~
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Input: candidates = [2], target = 1
Output: []

Input: candidates = [2], target = 2 -> [[2]]

/*
 1<= target <=500
 1<= candidates[i] <=200
 1<= candidates.length <=30
 
 0 1 2 3
 2 1 3 4 -> 7 ??..ㅠㅠ..??
 ^
타깃보다 크면 return;
타깃과 같으면 정답에 추가하고 return;
타깃보다 작으면 recursion.

2 2 2 2(x) 2를 더하면 7보다 커지니까 return false, 2 2 2(6)
2 2 2 1(O) 1을 더하면 7! -> 정답에 추가 [2,2,2,1], return true;
2 2 2 3(x) 9가 7보다 크니까 return false;
2 2 2 4(x) 10이 크니까 return false;
2 2 2로 볼수있느 ㄴ조합은 다 본거니까 return ;-> 2 2
2 2 1 7보다 작아. recursion
	2 2 1 1 7보다 작아. recursion
  	2 2 1 1 1 (O)->[2,2,1,1,1]추가. return;
  	2 2 1 1 3 return;
    2 2 1 1 4 return;
  2 2 1 3
  2 2 1 4
  

...
3 3
3 4
4
----------볼수있는 조합 다 본거.

0 1 2 3
2 1 3 4 -> 7 ??..ㅠㅠ..??

2
2 2
2 2 2
2 2 2 2 7이상-> return
2 2 2 1 7!! -> 정답에 추가하고 리턴.
2 2 2 3 7이상 리턴
2 2 2 4 7이상 리턴
2 2 2 리턴.
2 2 1 7미만이니까 재귀
2 2 1 1 7미만이니까 재귀.
2 2 1 1 1 7!!! 정답에 추가하고 리턴.
2 2 1 1 3 7이상 리턴
2 2 1 1 4 7이상 리턴
2 2 1 1 리턴.
2 2 1리턴.
2 2 3
             2 
            /
           2,2
          /
         2,2,2
        /        \
      2,2,2,2(X) 2 2 2 1
*/

// [2 1 3 4], target=7
// C=candidates.length, T=target
// time O(C^T)
// space call stack으로 인한 O(T)
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) { 
  const result=[];
  if(candidates.length===1 && candidates[0]>target) return result;
  let c=0;
  
  const dfs = (c,sum,arr) =>{
      // 타깃보다 크면 return;
      // 타깃과 같으면 정답에 추가하고 return;
      // 타깃보다 작으면 recursion
    if(c>=candidates.length) return;
    
    if(sum>target) return;
      
    if(sum===target){
        result.push([...arr]);
        return;
      }
      
    //recursion
    for(let i=c; i < candidates.length ; i++){
        arr.push(candidates[i]); //[2,2,2,1]
        dfs(i,sum+candidates[i],arr); // dfs(c,2,[2])
        arr.pop();
    }	
  };
    
    dfs(c,0,[]);
  
    return result;
};
// Runtime: 84 ms, faster than 91.17% of JavaScript online submissions for Combination Sum.
// Memory Usage: 41.1 MB, less than 85.58% of JavaScript online submissions for Combination Sum. 

/*
수빈이코드. 타임,공간 똑같다.
var combinationSum = function(candidates, target) {
    const result = [];
    const list=[];
    backtracking(result, list, candidates, target, 0);
    return result;
  };
  
  // 2, 2, 2, 2
  function backtracking(result, tempList, nums, remain, start) {
    //console.log(nums);
    if (remain < 0) return;
    //else if (remain === 0) return result.push([...tempList]);
    else if (remain === 0) return result.push([...tempList]);
    console.log(tempList);
    for (let i=start; i<nums.length; i++) {
        tempList.push(nums[i]);
        backtracking(result, tempList, nums, remain-nums[i], i);
        tempList.pop();
    }
  }
  */