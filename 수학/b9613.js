'use strict';
const fs=require('fs');
const filePath=process.platform==='linux'?'/dev/stdin':'input.txt';
const input=fs.readFileSync(filePath).toString().trim().split("\n");
const t=Number(input[0]);

for(let i=1;i<t;i++){
  const line=input[i].split(" ").map(x=>Number(x));
  let gcd=0;

  for(let j=1;j<=line[0];j++){
    for(let k=j+1;k<=n;k++){
      gcd+=GCD(line[j],line[k]);
    }
  }
  console.log(gcd);
}

function GCD(a,b){
  while(b>0){
    let r=a%b;
    a=b;
    b=r;
  }
  return a;
}