/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = (head) => {
	//edge
	if (!head) return head;

	let pre = null,
		curr = head,
		next = null;

	// 1->2->3
	while (curr) {
		next = curr.next; // 3
		curr.next = pre; // 2 -> 1-> null
		pre = curr; // 2 -> 1-> null
		curr = next; // 3
	}

	return pre;
};
// Runtime: 76 ms, faster than 81.60% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 40.6 MB, less than 73.59% of JavaScript online submissions for Reverse Linked List.

/*
var mergeTwoLists = function(list1, list2) {
  let pre = new ListNode();
  let cur = pre;
	//edge case
  if(!list1 || !list2){
    if(!list1) return list2;
    if(!list2) return list1;
	}
  
  //처음헤드찾기..
  // list1 4
  // list2 4
  // cur 1->1->2->3->4->4
  while(list1 && list2){
  	if(list1.val<=list2.val){
      cur.next = new ListNode(list1.val);
      list1 = list1.next;
    }
  	else{
      cur.next = new ListNode(list2.val);
      list2 = list2.next;
  	}
    cur = cur.next; 
  }
  cur.next = list1 || list2;
  pre = pre.next;
  
  return pre;
};


*/
