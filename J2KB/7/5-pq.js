class Node {
	constructor(value, weight, stops) {
		this.value = value;
		this.weight = weight;
		this.stops = stops;
	}
}

class PriorityQueue {
	constructor() {
		this.priQueue = [];
	}

	insert(value) {
		this.priQueue.push(value);

		if (this.priQueue.length > 1) this.bubbleUp(this.priQueue.length - 1);
	}

	bubbleUp(index) {
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);

			if (this.priQueue[parentIndex].weight < this.priQueue[index].weight)
				break;

			this.swapElements(parentIndex, index);

			index = parentIndex;
		}
	}

	swapElements(i, j) {
		[this.priQueue[i], this.priQueue[j]] = [this.priQueue[j], this.priQueue[i]];
	}

	extractMinWeight() {
		if (this.isEmpty()) return;

		let min = this.priQueue[0];
		let last = this.priQueue.pop();

		if (this.priQueue.length !== 0) {
			this.priQueue[0] = last;
			this.bubbleDown(0);
		}
		return min;
	}

	bubbleDown(index) {
		let left = 2 * index + 1;
		let right = 2 * index + 2;

		let smallest = index,
			priQueueLength = this.priQueue.length - 1;

		if (
			left <= priQueueLength &&
			this.priQueue[left].weight < this.priQueue[smallest].weight
		)
			smallest = left;

		if (
			right <= priQueueLength &&
			this.priQueue[right].weight < this.priQueue[smallest].weight
		)
			smallest = right;

		if (smallest !== index) {
			this.swapElements(smallest, index);
			this.bubbleDown(smallest);
		}
	}

	isEmpty() {
		return this.priQueue.length == 0;
	}
}

var findCheapestPrice = function (n, flights, src, dst, K) {
	let adjList = new Map();

	// All flights in Adjacancy List
	for (let [from, to, price] of flights) {
		if (!adjList.has(from)) adjList.set(from, []);

		adjList.get(from).push([to, price]);
	}

	let pQueue = new PriorityQueue();

	// Insert all the flights to the pQueue
	pQueue.insert(new Node(src, 0, K));

	if (!adjList.has(src)) return -1;

	while (pQueue.isEmpty() == false) {
		let minFlight = pQueue.extractMinWeight();
		let current = minFlight.value;
		let stops = minFlight.stops;
		let price = minFlight.weight;

		if (current == dst) return price;

		if (adjList.get(current) !== undefined && stops > -1) {
			for (let node of adjList.get(current)) {
				let newPrice = price + node[1];

				pQueue.insert(new Node(node[0], newPrice, stops - 1));
			}
		}
	}
	return -1;
};
