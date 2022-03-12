/*
https://leetcode.com/problems/find-median-from-data-stream/discuss/1679805/JS-min-max-heap-with-detailed-explanation


input insertNum(number), findMedian()
output insertNum return;, findMedian return median number;
edge ...

		// len절반에 해당하는 인덱스를 출력
		// 3개있으면 3/2=1.5...내림해서 [1]
		// 4개있으면 4/2=2... [1]과 [2]의 평균값

		time O(nLogn)
		space O(n)..

		sort를 nlogN보다 효율적으로?
		heap소트는 상위몇개만 정렬할때 유리하다?

		[3]
		[1,3]
		[1,3,5]
		[1,3,4,5]
*/
class NumberStream {
	constructor() {
		this.store = [];
	}

	insertNum(num) {
		this.store.push(num);
		this.store.sort((a, b) => a - b); // nLogn
	}

	findMedian() {
		if (this.store.length % 2 === 0) {
			const half = this.store.length / 2;
			console.log((this.store[half] + this.store[half - 1]) / 2);
		} else {
			const half = Math.floor(this.store.length / 2);
			console.log(this.store[half]);
		}
	}
}

const numberStream = new NumberStream();

numberStream.insertNum(3);
numberStream.insertNum(1);
numberStream.findMedian();
numberStream.insertNum(5);
numberStream.findMedian();
numberStream.insertNum(4);
numberStream.findMedian();
