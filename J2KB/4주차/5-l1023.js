/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 
time O(Q * (M + P)) Q = queries.length, M = Max(queries[i].length), P = pattern.length 
 space O(N)
 
 Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"],
 pattern = "FB"
Output: [true,false,true,true,false]


p-upper 일 때, q가 대문자이면서 일치하면 q++,p++, 아니면 false
            , q가 소문자이면 q++

p-lower 일 때, q가 대문자면 false, 
              q가 소문자이면서 일치하면 p++,q++, 소문자이면서 일치하지 않으면 p++

pattern이 끝났는데 queries가 아직 남아있으면
남은 queies를 보면서 대문자가 있으면 false, 없으면 true

ControlPanel
        q  

CooP
    p

 */
var camelMatch = function (queries, pattern) {
	const result = new Array(queries.length).fill(null);

	for (let i = 0; i < queries.length; i++) {
		let q = 0,
			p = 0;
		const query = queries[i];

		while (p < pattern.length && q < query.length && result[i] === null) {
			const pa = pattern[p];
			const qu = query[q];

			if (isUpperCase(pa) && isUpperCase(qu) && pa !== qu) result[i] = false;
			else if (isUpperCase(pa) && isUpperCase(qu) && pa === qu) {
				p++;
				q++;
			} else if (isUpperCase(pa) && !isUpperCase(qu)) q++;
			else if (!isUpperCase(pa) && isUpperCase(qu)) result[i] = false;
			else if (!isUpperCase(pa) && !isUpperCase(qu) && pa !== qu) q++;
			else if (!isUpperCase(pa) && !isUpperCase(qu) && pa === qu) {
				p++;
				q++;
			}
		}
		while (p < pattern.length && result[i] === null) {
			if (isUpperCase(pattern[p])) {
				result[i] = false;
				break;
			}
			p++;
		}

		while (q < query.length && result[i] === null) {
			if (isUpperCase(query[q])) {
				result[i] = false;
				break;
			}
			q++;
		}
		if (result[i] === null) result[i] = true;
	}
	return result;
};

function isUpperCase(ch) {
	return ch === ch.toUpperCase();
}
//Runtime: 76 ms, faster than 54.55% of JavaScript online submissions for Camelcase Matching.
// Memory Usage: 41.7 MB, less than 9.09% of JavaScript online submissions for Camelcase Matching.
