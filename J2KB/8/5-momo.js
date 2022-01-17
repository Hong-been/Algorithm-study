// time: O(nlogn + (n * m ^ 2))
// space: O()
function longestStringChain(strArr) {
	const hashMap = new Map();
	//sorting
	//[ae, abc, abd, ade, abde, abcde, labde, abcdef]

	// time: O(nlogn)
	const newStrArr = strArr.sort((a, b) => a.length - b.length);
	// time: O(N)
	newStrArr.forEach((str) =>
		hashMap.set(str, { chain: [str], lengthOfChain: 1 })
	);
	/* 
	 ae : {chain : [ae], lengthOfChain: 1}
   abc : {chain : [abc], lengthOfChain: 1}
  */
	let maxLength = -Infinity;
	let resultArr = [];
	// time: O(N * M ^ 2)
	for (let i = 0; i < newStrArr.length; i++) {
		let curStr = newStrArr[i];
		// time: O(M ^ 2)
		for (let j = 0; j < curStr.length; j++) {
			//ade
			let deleteOneChar =
				curStr.substring(0, j) + curStr.substring(j + 1, curStr.length);
			if (hashMap.has(deleteOneChar)) {
				const curChildObject = hashMap.get(curStr); //ade : {chain : [ade], lengthOfChain: 1}
				const previousChildObject = hashMap.get(deleteOneChar); //ae : {chain : [ae], lengthOfChain: 1}
				if (
					previousChildObject.lengthOfChain + 1 >
					curChildObject.lengthOfChain
				) {
					//copy value of map
					curChildObject.chain = [curStr, ...previousChildObject.chain];
					curChildObject.lengthOfChain = previousChildObject.lengthOfChain + 1;

					if (curChildObject.lengthOfChain > maxLength) {
						maxLength = curChildObject.lengthOfChain;
						resultArr = curChildObject.chain;
					}
				}
			}
		}
	}
	console.log(hashMap);
	return resultArr;
}
console.log(longestStringChain(strings));
