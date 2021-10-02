'use strict';
const fs=require('fs');
const filePath=process.platform==='linux'?'/dev/stdin':'input.txt';
const input=fs.readFileSync(filePath).toString().trim().split("\n");
const n=Number(input[0]);
const str=input[1];
const stack=[];
const alpha=[]; alpha.length=n;
const nums=[]; nums.length=n;

for(let i=0;i<n;i++) {
  nums[i]=Number(input[i+2]);
}

let cnt=0;
for(let i=0;i<str.length;i++){
  if(str[i].charCodeAt()>=65){
    const alphaIndex=Number(str[i].charCodeAt()-65);
    if(!alpha[alphaIndex]){
      alpha[alphaIndex]=nums[cnt++];
    }
    stack.push(alpha[alphaIndex]);
    continue;
  }
  const operator=str[i];
  const y=stack.pop();
  const x=stack.pop();
  switch (operator){
    case '+':
      stack.push(x+y);
      break;
    case '-':
      stack.push(x-y);
      break;  
    case '*':
      stack.push(x*y);
      break;
    case '/':
      stack.push(x/y);
  }
}
console.log(stack.pop().toFixed(2));