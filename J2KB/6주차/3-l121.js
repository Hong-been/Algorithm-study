/**
 * @param {number[]} prices
 * @return {number}
 
 min찾고, 그 이후 인덱스중에 
 
 투포인터 아니면 슬라이딩윈도우?
 
 7,1,5,3,6,4
 i
   j
 7은 이후에 더 큰수가 없어서 이득이 0임.
 1은 5를 만나면 이득 4, 현재 판매가 5로 업데이트, 이것보다 이득이 비싸면 판매가 바꾼다.
 1은 6를 만나면 이득 "5", 현재 판매가 6
 5는 6만나서 이득 1.
 3은 6만나서 이득 3. -> 이중for문으로 해결. O(N^2). 현재 39분 남음. 10분만 옵티멀 고민해보고 코드짠다.
 
 이중포문이면 해볼수있는 모든 조합을 해보는거..
 
 7,1,5,3,6,4
       b
           s
 
 b보다 가격이 폭락하면, 그 후에 상한가가 나오더라도 최대이익 얻지못함. b++, s++
 b보다 가격이 오르면, 이익계산하고 s++.
 
 5,6,1,3,4
     b
       s

가격이 내려가면 b=s, s++
 
 profit=1
 
 time: O(N)
 space: O(1)
 */
var maxProfit = function (prices) {
	// edge case : 물건이 1개이면 0
	if (prices.length === 1) return 0;

	let profit = 0;
	let b = 0,
		s = 1;

	while (b < prices.length) {
		if (s >= prices.length) {
			b++;
			s = b + 1;
		}
		let tmpProfit = prices[s] - prices[b];
		if (tmpProfit > 0) {
			//3
			profit = Math.max(profit, tmpProfit);
			s++;
		} else {
			b = s;
			s++;
		}
	}

	return profit;
};
// Runtime: 88 ms, faster than 94.05% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 49 MB, less than 36.84% of JavaScript online submissions for Best Time to Buy and Sell Stock.
