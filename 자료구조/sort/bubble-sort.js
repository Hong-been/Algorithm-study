/**
 버블정렬. Bubble sort.

 앞에꺼랑 비교하면서 큰애를 뒤로 교환, 제일 끝에가 확정된 자리가 된다.
 */
 const nums = [10,2,-3,2,8,99,0];

 // 버블정렬로 오름차순을 구현하시오
 const sort = (arr)=>{
   for(let last=arr.length; last>=0; last--){
     for(let i=1;i<last;i++){
       if(arr[i]<arr[i-1]){
         [arr[i],arr[i-1]]=[arr[i-1],arr[i]];
       }
     }
   }
   return arr;
 }
 
 console.log(sort(nums));