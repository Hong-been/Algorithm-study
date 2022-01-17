var findCheapestPrice = function (n, flights, src, dst, k) {
	let prices = new Array(n).fill(Infinity);

	prices[src] = 0;

	while (k >= 0) {
		const tempPrices = [...prices];
		for (let [s, d, p] of flights) {
			if (prices[s] === Infinity) continue;
			if (prices[s] + p < tempPrices[d]) {
				tempPrices[d] = prices[s] + p;
			}
		}
		prices = tempPrices;
		k--;
	}

	return prices[dst] === Infinity ? -1 : prices[dst];
};
