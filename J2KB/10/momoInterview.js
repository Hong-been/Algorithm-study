const solution = (b, sArr) => {
	const trie = {};

	for (const smallStr of sArr) {
		let curNode = trie;
		for (let c = 0; c < smallStr.length; c++) {
			let char = smallStr[c];
			if (!curNode[char]) curNode[char] = {};
			curNode = curNode[char];
		}
		curNode["*"] = smallStr;
	}

	console.log(JSON.stringify(trie));
	const result = {};

	// time - O(NS + B);
	// space - O(N * S);

	for (let i = 0; i < b.length; i++) {
		let initialChar = b[i];
		let curIdx = i + 1;

		if (trie[initialChar]) {
			let curNode = trie[initialChar];

			while (curNode) {
				if ("*" in curNode) result[curNode["*"]] = true;

				let nextChar = b[curIdx];
				curNode = curNode[nextChar];
				curIdx++;
			}
		}
	}

	return sArr.map((str) => (result[str] ? true : false));
};

function test(sol, input, expect) {
	const results = sol(...input);
	let returned = true;
	results.forEach((item, idx) => {
		if (item !== expect[idx]) returned = false;
	});
	return returned;
}
console.log(
	test(
		solution,
		[
			"abcdefghijklmnopqrstuvwxyz",
			["abc", "cdef", "mnopqr", "wyz", "no", "e", "tuuv"],
		],
		[true, true, true, false, true, true, false]
	)
);

{
	"a":{"b":{"c":{"*":"abc"}}},
	"c":{"d":{"e":{"f":{"*":"cdef"}}}}
	"m":{"n":{"o":{"p":{"q":{"r":{"*":"mnopqr"}}}}}},
	"w":{"y":{"z":{"*":"wyz"}}},
	"n":{"o":{"*":"no"}},
	"e":{"*":"e"},
	"t":{"u":{"u":{"v":{"*":"tuuv"}}}}
}
