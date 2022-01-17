//time: O(N^2*K) (K<N)
//K: value의 최대 Length, N미만일 것이다.

//space: O(N^2+R)
//R: max length of result array
var fourNumberSum = (array, targetSum) => {
	const map = new Map();
	const result = [];
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			let tempSum = array[i] + array[j];
			let findSum = targetSum - tempSum;
			let n1 = array[i];
			let n2 = array[j];
			if (map.has(findSum)) {
				let value = map.get(findSum);
				//time: O(N^2*K) (K<N)
				//K: value의 최대 Length, N미만일 것이다.
				for (let l = 0; l < value.length; l++) {
					let compSum = [];
					compSum.push(n1);
					compSum.push(n2);
					let n3 = value[l][0];
					let n4 = value[l][1];
					compSum.push(n3);
					compSum.push(n4);
					result.push(compSum);
				}
			}
		}
		//time: O(N^2)
		for (let k = 0; k < i; k++) {
			tempSum = array[k] + array[i];
			//console.log(tempSum)
			if (map.has(tempSum)) {
				map.get(tempSum).push([array[k], array[i]]);
			} else {
				map.set(tempSum, [[array[k], array[i]]]);
			}
		}
		//console.log(map)
	}
	return result;
};
