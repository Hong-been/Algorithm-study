class Node{
  constructor(data,next=null){
    this.data=data;
    this.next=next;
  }
}
class LinkedList{
  constructor(){
    this.head=null;
    this.size=0;
  }
  insertFirst(data){
    const newNode=new Node(data,this.head);
    this.head=newNode;
    this.size+=1;
  }

  insertLast(data){
    const newNode=new Node(data);
    let lastNode;

    if(this.head === null){
      this.head=newNode;
    }else{
      lastNode=this.head;
      while(lastNode.next !== null){
        lastNode=lastNode.next;
      }
      lastNode.next=newNode;
    }
    this.size+1;
  }

  insertAt(data,index){
    const newNode=new Node(data);
    let previousNode, nextNode=this.head, count=0;

    if(index<0 || index>=this.size) return;
    if(index===0) {
      insertFirst(data); 
      return;
    }
    if(index===this.size){
      insertLast(data); 
      return;
    }

    while(count<index){
      count+=1;
      previousNode=nextNode;
      nextNode=nextNode.next;
    }
    previousNode.next=newNode;
    newNode.next=nextNode;

    this.size+=1;
  }
  removeAt(index){
    if(index<0 || index>=this.size) return;
    let previousNode, removedNode=this.head, count=0;

    if(index===0){
      this.head=removedNode.next;
      // 그럼 인덱스0은.. 메모리 둥둥?..
    }else{
      while(count<index){
        count+=1;
        previousNode=removedNode;
        removedNode=removedNode.next;
      }
      previousNode.next=removedNode.next;
    }
    this.size+=1;
  }
}