/**
 * @param {string} s
 * @return {number}
 */
// time O(s.length), space O(1)
var countBinarySubstrings = function (s) {
	s += "#";
	let curr = 1,
		prev = 0,
		count = 0;

	for (let i = 0; i < s.length - 1; i++) {
		if (s[i + 1] === s[i]) curr++;
		else {
			count += Math.min(prev, curr);
			prev = curr;
			curr = 1;
		}
	}
	return count;
};

var countBinarySubstrings = function (s) {
	let pre = 0,
		n = 0,
		res = 0;
	s = "#" + s;

	for (let i = 1; i < s.length + 1; i++) {
		if (s[i] !== s[i - 1]) {
			res += Math.min(pre, n);
			pre = n;
			n = 1;
		} else n++;
	}

	return res;
};
// Runtime: 96 ms, faster than 48.25% of JavaScript online submissions for Count Binary Substrings.
// Memory Usage: 42.1 MB, less than 84.16% of JavaScript online submissions for Count Binary Substrings.
