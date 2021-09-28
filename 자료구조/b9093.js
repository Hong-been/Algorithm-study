const fs=require('fs');
const filePath=process.platform==='linux'?'/dev/stdin':'input.txt';
const input=fs.readFileSync(filePath).toString().split("\n");

class Stack{
  constructor(){
    this.data=[];
    this.top=0;
  }
  push(element){
    this.data[this.top]=element;
    this.top+=1;
  }
  _top(){
    if(!this.isEmpty()){
      return this.data[this.top -1];
    }
    return -1;
  }
  pop(){
    if(this.isEmpty()) return -1;
    this.top-=1;
    return this.data.splice(-1)[0];
  }
  isEmpty(){
    if(this.data.length===0) return true;
    else return false;
  }
}

answer='';
const stack=new Stack();
const num=input[0];

for(let i=1;i<=num;i++){
  input[i].split(" ").forEach(word => {
    for(let i=0;i<word.length;i++){
      stack.push(word.charAt(i));
    }
    for(let i=word.length;i>0;i--){
      answer+=stack.pop();
    }
    answer+=" ";
  });
  console.log(answer);
  answer='';
}


