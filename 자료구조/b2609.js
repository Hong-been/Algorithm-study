'use strict';
const fs=require('fs');
const filePath=process.platform==='linux'?'/dev/stdin':'input.txt';
const input=fs.readFileSync(filePath).toString().split(" ");
const a=Number(input[0]);
const b=Number(input[1]);

console.log(GCD(a,b));
console.log(LCM(a,b));

function GCD(a,b){
  while(b){
    let r=a%b;
    a=b;
    b=r;
  }
  return a;
}
function LCM(a,b){
  const gcd=GCD(a,b);
  // 아래도 가능하지만 a*b가 매우 커질 수 있으므로 미리 나눈다.
  // return (a*b)/gcd;
  return (a/gcd)*(b/gcd)*gcd;
}

