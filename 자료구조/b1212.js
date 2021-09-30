'use strict';
const fs=require('fs');
const filePath=process.platform==='linux'?'/dev/stdin':'input.txt';
const input=fs.readFileSync(filePath).toString().trim();
const nums=["000","001","010","011","100","101","110","111"];
let ans='';

ans+=Number(input[0]).toString(2);
for(let i=1;i<input.length;i++){
  const bi=input[i].toString(2);
  ans+=nums[bi-'0'];
}
console.log(ans);
