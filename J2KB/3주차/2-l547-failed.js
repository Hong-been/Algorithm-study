/**
 * @param {number[][]} isConnected
 * @return {number}
 

원래는 15개 도시가 있는데. 
1, 1 ,1 , 15-2-2-6=5

0-9 : 2개의 도시가 한덩이
4-12 2개의 도시가 한덩이
1-3,13-7,11-8 : 6개의 도시가 한덩이

원래 3개도시가 있을 때
3-2=1
0-1 : 2개도시가 한덩어리

 
 */
var findCircleNum = function (isConnected) {
	if (isConnected.length === 1) return 1;
	let result = isConnected.length;
	let count = 1;
	// 1. topological sort로 map을 만든다.
	const map = topologicalSort(isConnected);

	// 2. map을 순회하면서 connected에 있는 요소들로 타고 들어간다(?)
	console.log(map);

	const dfs = (v) => {
		if (map.get(v).connected.length) {
			//1 :{connected:[]} -> return
			// result--; //1

			while (map.get(v).connected.length) {
				count++; // 2
				const value = map.get(v).connected.shift(); //0 :{connected:[2]},
				dfs(value); // dfs(1)
			}
		}

		return;
	}; //0-1,2
	let provinces = 0;

	for (let [key, value] of map) {
		//0 :{connected:[1,2]}
		dfs(key); //count=1
		console.log(count);
		if (count > 1) {
			provinces++; //덩어리 3개
			result = result - count; //count 15-2=13, 13-6=7,7-2=5
		}
		count = 1;
	}
	return result + provinces;
};
function topologicalSort(arr) {
	const map = new Map();
	const row = arr.length; // n

	for (let i = 0; i < row; i++) {
		if (!map.has(i)) map.set(i, { connected: [] });
		for (let j = i + 1; j < row; j++) {
			if (arr[i][j] === 1) {
				map.get(i).connected.push(j);
			}
		}
	}
	return map;
}
