class PriorityQueue {
	constructor() {
		this.items = [];
	}

	insert(value, priority) {
		this.items.push({ value, priority });
		this.heapifyUp();
	}

	heapifyUp() {
		let index = this.items.length - 1;
		const lastInsertedItem = this.items[index];

		while (index > 0) {
			const parentIndex = this.getParent(index);

			//maxHeap이면
			//if(this.items[i].priority > this.items[parent].priority)
			if (this.items[parentIndex].priority < lastInsertedItem.priority) {
				this.items[index] = this.items[parentIndex];
				index = parentIndex;
			} else break;

			this.items[index] = lastInsertedItem;
		}
	}

	heapifyDown() {
		let index = 0;
		const count = this.items.length;
		const rootNode = this.items[index];

		//left child가 없다면 count이상일 것이다.
		while (this.getLeftChild(index) < count) {
			const leftChildIndex = this.getLeftChildIndex(index);
			const rightChildIndex = this.getRightChildIndex(index);

			const smallerChildIndex =
				rightChildIndex < count &&
				this.items[rightChildIndex].priority <
					this.items[leftChildIndex].priority
					? rightChildIndex
					: leftChildIndex;

			if (this.items[smallerChildIndex].priority < rootNode.priority) {
				this.items[index] = this.items[smallerChildIndex];
				index = smallerChildIndex;
			} else break;
		}

		this.items[index] = rootNode;
	}

	peek() {
		return this.items[0];
	}

	pop() {
		const count = this.items.length;
		const rootNode = this.items[0];

		if (count === 0) return undefined;
		else if (count === 1) this.items = [];
		else {
			this.items[0] = this.items.pop();
			this.heapifyDown();
		}

		return rootNode;
	}

	getParent(i) {
		return Math.ceil(i / 2) - 1;
	}

	getLeftChild(i) {
		return i * 2 + 1;
	}

	getRightChild(i) {
		return i * 2 + 2;
	}

	swap(i, j) {
		const temp = this.data[i];
		this.data[i] = this.data[j];
		this.data[j] = temp;
	}
}
