/*
 
 
 1. 
 
 arr[n][m]
  0 1 2 3 4
 [1,2,3,4,5]   5 + 6 - |4 - 3| + 
 [7,6,4,3,5]
 [8,7,5,1,9]
 [3,4,5,7,8]
 
 m * m^n-1 = m^n
 m * 
                  m         m
 (0..  0)->(1 ... 0)->(2....0)
                    ->(2....1)
                    ->      2,3,4
         ->(1 ... 1)
         ->(1 ... 2)
                  3
                  4




 --> maximum Cap
 
 1-7-8-3,4,5,7,8
 1-7-7-3,4,5,7,8
 1-7-5-3,4,5,7,8
 1-7-1-3,4,5,7,8
 
 max = 0;
 
 for(arr[0]을 순회)
 	recursion(0,arr,arr[0][i],i);
 return max;
 
 
 
 
 function recursion(현재줄, arr, curSum , 이전인덱스){
 	if(현재줄이 arr에서 마지막줄이면)
 		max = Math.max(max, curSum);
  	return;
 
 	for(현재줄에 해당하는 1차원 배열){
  	let gap = Math.abs(이전인덱스 - 현인덱스);
  	recursion(현재줄+1,arr,curSum+1차원배열[현인덱스]-gap, 현인덱스);
	}
	return;
}
 
 */

/* 

subset & permutation
(n!, 2^N)

[1,2,3,4] --> O(2^N)
['', [1],[2],[3],[4],[1,2]...]

*/
