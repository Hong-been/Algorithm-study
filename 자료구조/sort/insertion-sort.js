/**
 삽입정렬. Insertion Sort.

 현재 순회값보다 작은 애들을 비교하며 내가 들어갈 위치를 찾아서 끼어넣는다.
 앞에꺼보고 내가 더 작네? 교환.

 time O(N^2), 이미 정렬되어있으면 앞에꺼 안봐도되니까 O(N)
 */
const nums = [10,2,-3,2,8,99,0];

// 삽입정렬로 오름차순을 구현하시오
const sort = (arr)=>{
  for(let i=0; i<arr.length; i++){
    let cur = i;
    let j=i-1;
    
    while(j>=0){
      if(arr[j]>arr[cur]){
        [arr[j],arr[cur]]=[arr[cur],arr[j]];
        [cur,j]=[j,j-1];
      }else break;
    }
  }
  return arr;
}

console.log(sort(nums));