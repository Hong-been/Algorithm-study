function Node(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
/*
head 2 secondTail 10 tail 12
next는 head.next를 저장
head 다음꺼에 tail연결 : 2->12
tail다음꺼는 next : 12->4
secondTail 다음꺼 끊어버려

이제 next를 head로 보면
head 4 secondTail 8 tail 10
next는 head.next저장
head 다음꺼에 tail연결 : 4->10
tail다음꺼는 next : 10->6
secondTail 다음끊어버려

head 6 secondTail 6 tail 8
next는 head.next저장
head 다음꺼에 tail연결 : 6->8
tail다음꺼는 next, 헤드포함 길이가 3미만이면 null : 8->null, 끝!
secondTail 다음끊어버려

*/
function rearrangeList(list) {
	if (!list) return list;

	const ans = list;
	let next = null,
		cur = list;

	while (true) {
		let [sndTail, tail, count] = getTails(cur);
		// console.log(count);
		sndTail.next = null;
		next = cur.next;
		cur.next = tail;
		tail.next = next;

		cur = next;

		if (count <= 3) break;
	}

	return ans;
}

function getTails(head) {
	let cur = head,
		sndTail = null,
		tail = null,
		count = 0;

	while (cur) {
		count++;
		if (cur.next) sndTail = cur;
		else tail = cur;
		cur = cur.next;
	}
	return [sndTail, tail, count];
}

const ans = rearrangeList(
	new Node(
		2,
		new Node(
			4,
			new Node(6, new Node(8, new Node(10, new Node(12, new Node(14)))))
		)
	)
); //2 14 4 12 6 10 8

// const ans = rearrangeList(
// 	new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
// );
// const ans = rearrangeList(new Node(1, new Node(2)));

let tmp = ans;
while (tmp) {
	console.log(tmp.val);
	tmp = tmp.next;
}
