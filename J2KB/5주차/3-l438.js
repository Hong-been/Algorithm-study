/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 
 cbaebabacd
      i
       j
 res=[0]
 map={ a:0, b:1, c:1 }, cnt=2
 
 j가 해당되면 map[j]--, cnt--, j++
 j가 갯수가 모자라면 map[i]++, i++, cnt++
 j가 아예 p에 없으면 j++, i=j까지 올라오면서 map[i]++, cnt복구
 cnt=0이면 i추가, map[i]++, i++, cnt++
 
 P=p.length, S=s.length
 time O(P + 2S)
 space O(P + S)
 */
var findAnagrams = function (s, p) {
	const res = [];
	const map = {};
	let cnt = p.length;
	let i = 0,
		j = 0;

	for (let i = 0; i < p.length; i++) {
		if (map[p[i]]) map[p[i]]++;
		else map[p[i]] = 1;
	}

	while (j < s.length) {
		if (map[s[j]] > 0) {
			map[s[j]]--;
			cnt--;
			j++;
		} else if (map[s[j]] === 0) {
			map[s[i]]++;
			i++;
			cnt++;
		} else if (!map[s[j]]) {
			j++;
			cnt = p.length;
			while (i !== j) {
				map[s[i]]++;
				i++;
			}
		}
		if (cnt === 0) {
			res.push(i);
			map[s[i]]++;
			i++;
			cnt++;
		}
	}

	return res;
};
// Runtime: 116 ms, faster than 72.58% of JavaScript online submissions for Find All Anagrams in a String.
// Memory Usage: 43.6 MB, less than 64.30% of JavaScript online submissions for Find All Anagrams in a String.
