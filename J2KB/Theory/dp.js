/*
items[ val, weight ]
{
  "capacity": 200,
  "items": [
    [465, 100],
    [400, 85],
    [255, 55],
    [350, 45],
    [650, 130],
    [1000, 190],
    [455, 100], 
    [100, 25], //7
    [1200, 190],
    [320, 65],
    [750, 100],
    [50, 45], 
    [550, 65], //12
    [100, 50],
    [600, 70],// 14
    [255, 40] //15
  ]
}
{
	capacity: 10,
	items: [
		[1, 2],
		[4, 3],
		[5, 6],
		[6, 7],
	],
}

output
[1505, [7, 12, 14, 15]]

1. (w[i] <= j ) dp[i][j] = max(v[i] + dp[i-1][j - w[i]], dp[i-1][j]
  max(지금물건을 일단넣는 경우 최적답 or 지금물건안넣고 이전물건까지 넣은 경우 최적답)
  즉, 지금물건을 넣는게 베스트냐 안넣는게 베스트냐 를 고르는 것.
2. (w[i] > j) dp[i][j] = dp[i-1][j]
  가방용량이 딸리면 못넣으니까 이전물건까지 넣은 경우의 답을 가져온다.
*/
function dynamicProgramming(input) {
	const cap = input.capacity;
	const items = input.items;
	const dp = Array.from({ length: items.length + 1 }, () =>
		Array(cap + 1).fill(0)
	);

	for (let i = 1; i < dp.length; i++) {
		for (let j = 1; j < dp[0].length; j++) {
			if (items[i - 1][1] > j) {
				dp[i][j] = dp[i - 1][j];
			} else {
				dp[i][j] = Math.max(
					items[i - 1][0] + dp[i - 1][j - items[i - 1][1]],
					dp[i - 1][j]
				);
			}
		}
	}
	const res = keepTracking(dp, items, items.length, cap);
	return [dp[items.length][cap], res.reverse()];
}
function keepTracking(dp, items, i, j) {
	const res = [];

	while (dp[i][j] > 0) {
		if (dp[i - 1][j] !== dp[i][j]) {
			// res.push(items[i - 1]);
			res.push(i - 1);
			j = j - items[i - 1][1];
			i--;
		} else {
			i--;
		}
	}
	return res;
}

const input = {
	capacity: 200,
	items: [
		[465, 100],
		[400, 85],
		[255, 55],
		[350, 45],
		[650, 130],
		[1000, 190],
		[455, 100], //7
		[100, 25],
		[1200, 190],
		[320, 65],
		[750, 100],
		[50, 45], //12
		[550, 65],
		[100, 50], // 14
		[600, 70], // 15
		[255, 40],
	],
};
console.log(dynamicProgramming(input));
