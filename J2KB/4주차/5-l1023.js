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
	const result = [];

	for (let i = 0; i < queries.length; i++) {
		result.push(matchPattern(queries[i], pattern));
	}
	return result;
};
function matchPattern(query, pattern) {
	let q = 0,
		p = 0;

	while (p < pattern.length && q < query.length) {
		let pa = pattern[p];
		let qu = query[q];

		if (pa === qu) {
			p++;
			q++;
		} else if (isUpperCase(qu)) return false;
		else q++;
	}

	while (p < pattern.length) {
		if (isUpperCase(pattern[p])) {
			return false;
		}
		p++;
	}

	while (q < query.length) {
		if (isUpperCase(query[q])) {
			return false;
		}
		q++;
	}
	return true;
}

function isUpperCase(ch) {
	return ch === ch.toUpperCase();
}

// Runtime: 72 ms, faster than 95.16% of JavaScript online submissions for Camelcase Matching.
// Memory Usage: 38.9 MB, less than 56.45% of JavaScript online submissions for Camelcase Matching.
