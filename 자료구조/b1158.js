'use strict';
const fs=require('fs');
const filePath=process.platform==='linux'?'/dev/stdin':'input.txt';
const input=fs.readFileSync(filePath).toString().split(" ");
const n=Number(input[0]);
const k=Number(input[1]);

class Node{
  constructor(data,next=null){
    this.data=data;
    this.next=next;
  }
}
class CircularLinkedList{
  constructor(){
    this.tail=null;
    this.size=0;
  }

  insertTail(data){
    const newNode=new Node(data);

    if(this.tail === null){
      this.tail=newNode;
      this.tail.next=newNode;
    }else{
      newNode.next=this.tail.next;
      this.tail.next=newNode;
      this.tail=newNode;
    }
    this.size+=1;
    
    return;
  }

  removeInFrontOfTail(k){
    let previousNode,removedNode=this.tail;
    let removedData;

    for(let i=0;i<k;i++){
      previousNode=removedNode;
      removedNode=removedNode.next;
    }
    removedData=removedNode.data;
    previousNode.next=removedNode.next;
    this.tail=removedNode;
    this.size-=1;

    return removedData;
  }
}

const cLinkedList=new CircularLinkedList();
let answer='';
for(let i=1;i<=n;i++){
  cLinkedList.insertTail(i);
}
while(cLinkedList.size>0){
  answer+=cLinkedList.removeInFrontOfTail(k)+', ';
}
console.log(`<${answer.slice(0,-2)}>`);
