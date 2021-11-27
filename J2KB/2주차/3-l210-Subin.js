/*수비니 코드*/
// time: O(N^2)
// space: O(N^2)
var findOrder = function (numCourses, prerequisites) {
	//edge case : prerequisites=[]
	if (!prerequisites.length) {
		const result = [];
		for (let i = 0; i < numCourses; i++) result.push(i);
		return result;
	}
	const map = topologicalSort(prerequisites);
	//console.log(map);
	return BFS(map, numCourses);
};

const topologicalSort = (prerequisites) => {
	const map = new Map(); // space: O(n*n-1)=>O(N^2)
	for (let [to, from] of prerequisites) {
		// time: O(prerequisites.length)
		if (!map.has(from)) {
			map.set(from, { inComing: 0, dest: [to] });
		} else {
			map.get(from).dest.push(to);
		}

		if (!map.has(to)) {
			map.set(to, { inComing: 1, dest: [] });
		} else {
			map.get(to).inComing++;
		}
	}
	//console.log(map);
	return map;
};

//time: O(N^2)
//space: O
const BFS = (map, numCourses) => {
	let result = [];
	//console.log(findSource(map));
	const queue = findSource(map); //space: O(numCourses)
	//console.log(queue)
	const courses = new Array(numCourses).fill(0); // time: O(numCourses), space: O(numCourse)

	//console.log(queue);
	//queue []
	//result [0]
	while (queue.length) {
		//time: O(numCourses^2)
		const curKey = queue.shift();
		const { inComing, dest } = map.get(curKey);
		//console.log(curKey)
		if (inComing === 0) {
			result.push(curKey); //space: O(numCourses)
			courses[curKey] = 1;
		}

		for (let d = 0; d < dest.length; d++) {
			//time: O(numCourses^2)
			const child = map.get(dest[d]);
			if (child.inComing > 0) child.inComing--;
			if (child.inComing === 0) queue.push(dest[d]);
		}
	}
	//console.log(map);
	//edge case: 선수과목이 이상한 경우(?말이 안되는 경우) [] return
	for (let [key, value] of map) {
		//time: O(numCourses)
		if (value.inComing !== 0) return [];
	}

	//edge case: 선수과목 필요없는 과목 있을때 result에 추가
	/*
  if(result.length !== numCourses) {
      for(let i=0; i<numCourses; i++){
          console.log(result);
          i=`${i}`;
          if(!result.includes(i)) result.push(i);
      }
  }
  */
	for (let c = 0; c < numCourses; c++) {
		//time: O(numCourses)
		if (courses[c] === 0) result.push(c);
	}
	return result;
};

function findSource(map) {
	//time: O(numCourses)
	const queue = [];
	for (let [key, value] of map) {
		if (value.inComing === 0) queue.push(key);
	}
	if (!queue.length) return [];
	else return queue;
}
