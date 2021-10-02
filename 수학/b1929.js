'use strict';
const fs=require('fs');
const filePath=process.platform==='linux'?'/dev/stdin':'input.txt';
const input=fs.readFileSync(filePath).toString().trim().split(" ").map(x=>Number(x));
const m=input[0];
const n=input[1];
const nums=[n+1];
let ans='';

for(let i=2;i<=n;i++){
  nums[i]=i;
}
for(let i=2;i<=n;i++){
  if(nums[i]===0) continue;
  for(let j=i*2;j<=n;j+=i){
    nums[j]=0;
  }
}
for(let i=m;i<=n;i++){
  if(nums[i]>0)
    ans+=nums[i]+"\n";
}
console.log(ans);
