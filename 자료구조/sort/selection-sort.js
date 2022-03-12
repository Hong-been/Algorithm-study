/*
선택정렬. Selection Sort.
뭘선택하냐?
오름차순이면, 순회하면서 쫙 다 훑어서 가장 작은거를 선택->현재 순회값이랑 바꿈.
내림차순이면, 가장 큰거를 가져와서 현재 순회값이랑 바꿈.

time O(N^2)
space O(1)
*/
const nums = [10,2,-3,2,8,99,0];

// 선택정렬로 오름차순을 구현하시오.
const sort = (arr)=>{
  for(let i=0; i<arr.length; i++){
    const cur = arr[i];
    let min = cur;
    let minIdx = i;

    for(let j=i; j<arr.length; j++){
      if(min > arr[j]){
        min = arr[j];
        minIdx = j;
      }
    }
    [arr[i],arr[minIdx]] = [arr[minIdx],arr[i]];
  }
  return arr;
}

console.log(sort(nums));