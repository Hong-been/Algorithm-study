/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 
 I : 오름차순으로 정렬된 리스트 2개
 O : 2개를 합치고 헤드노드를 리턴.
 E : list1이 비었다면 list2리턴, list2가 비었다면 list1리턴
 
 time O(list1.length + list2.length)
 space O(list1.length + list2.length)

 Runtime: 80 ms, faster than 84.78% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 40.6 MB, less than 34.04% of JavaScript online submissions for Merge Two Sorted Lists.
 
 */
var mergeTwoLists = function (l1, l2) {
	//edge case
	if (!l1) return l2;
	if (!l2) return l1;

	const head = new ListNode();
	let curr = head;

	while (l1 && l2) {
		if (l1.val >= l2.val) {
			curr.val = l2.val;
			l2 = l2.next;
		} else {
			curr.val = l1.val;
			l1 = l1.next;
		}

		curr.next = new ListNode();
		curr = curr.next;
	}

	if (l1) {
		curr.val = l1.val;
		curr.next = l1.next;
	} else {
		curr.val = l2.val;
		curr.next = l2.next;
	}

	return head;
};
