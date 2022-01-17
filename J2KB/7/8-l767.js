var reorganizeString = function (s) {
	//edge case
	if (s.length === 1) return s;

	// "baaba" -> "ababa"
	// "babaa"
	// Alternate placing the most common letters. aabbbcccc acacbcbcb acbcababa
	// ababa

	// s.sort();

	const st = [];
	const map = {};
	let max = 0;
	let maxChar;
	for (let i = 0; i < s.length; i++) {
		st.push(s[i]);
		if (!map[s[i]]) map[s[i]] = 1;
		else map[s[i]]++;

		if (max < map[s[i]]) {
			max = map[s[i]];
			maxChar = s[i];
		}
	}
	const tmp = Array(st.length);
	if (max > (s.length + 1) / 2) return "";

	let idx = 0;
	for (; idx < st.length; idx += 2) {
		if (map[maxChar] > 0) {
			tmp[idx] = maxChar;
			map[maxChar]--;
		} else break;
	}

	// console.log(idx);
	for (let m of Object.keys(map)) {
		let cnt = map[m];
		while (cnt > 0) {
			if (idx >= st.length) idx = 1;
			// console.log(idx);
			tmp[idx] = m;
			idx += 2;
			cnt--;
		}
	}
	return tmp.join("");
};
