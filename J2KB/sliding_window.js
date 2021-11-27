/*



find the longest substring where there is no duplicate char in a single string


{
  a: t;
  c: t;
  b: t;
  s: t;
  J: t;
  d: t;
  l: t;
  ...
  w: t;
}
longest = 'cbsjdalrowhek'
*/

const word = "acbsjdalrowhekw";

console.log(slidingWindow(word));

function slidingWindow(string) {
	if (!string.length) return "";

	let left = 0;
	let right = 0;
	let lgs = [];
	const map = new Map();

	while (right < string.length) {
		const curChar = string[right];

		if (map.has(curChar)) {
			// sliding window starts
			lgs = getTheLongestLength(left, right, lgs);
			// move the left pointer
			while (string[left] !== string[right]) {
				map.delete(curChar);
				left++;
			}
			left++;
		} else {
			map.set(curChar, true);
		}

		right++;
		if (right == string.length) lgs = getTheLongestLength(left, right, lgs);
	}

	return string.substring(lgs[0], lgs[1]);
}

function getTheLongestLength(left, right, lgs) {
	let curLength = right - left;
	let longestLength = lgs[1] - lgs[0];
	if (longestLength < curLength) {
		return [left, right];
	}
	return lgs;
}
