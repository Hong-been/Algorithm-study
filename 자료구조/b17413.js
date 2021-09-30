'use strict';
const fs=require('fs');
const filePath=process.platform==='linux'?'/dev/stdin':'input.txt';
const input=fs.readFileSync(filePath).toString().trim();

// stack 추가할지 isValid로 판단한다.
// 추가안하는 경우: <가 나오고 아직 >가 나오기 전인 경우.
// 추가하는 경우: <가 안나왔거나 >가 나온경우
// stack을 pop하는 경우: 문자열이 끝났거나, 띄어쓰기가 나왔거나, <가 나온 경우
const stack=[];
let answer='';
let isValid=true;

for(let i=0;i<input.length;i++){
  const char=input[i];

  if(char==='<') isValid=false;
  
  if(isValid){
    if(char===" "){
      answer+=popAll(stack)+" ";
      continue;
    }
    stack.push(char); 
  }else {
    console.log(stack);
    answer+=popAll(stack)+char;
  }
  
  if(char==='>') isValid=true;
}
answer+=popAll(stack);
console.log(answer);

function popAll(stack){
  let string='';
  while(stack.length>0){
    string+=stack.pop();
  }
  return string;
}