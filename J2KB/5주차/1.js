/*
b a c d c f
        ^
루트에 먼저 만들고, 그 값을 참조한다면? 
노노 그러러면 이 전 노드값을 찾아다녀야 함. 현재노드주소 하나에 통합해서 업데이트하고 나머지가 연동되도록 하는게 효율적 & 직관적.

루트주소를 타고들어가면서 나랑 같은걸 발견했다? 그러면 그것도 이제 루트안에 루트가 되어야 함.
< solution >
일단 현재주소(루트주소의 맨 끝)에다가 추가한다.
루트가 그 값(c)을 키로 가지고 있지않다면, 그 주소값을 루트에 추가한다.

지금 값이 중복이라면,(map에 밸류로 주소를 등록해놓는다.) 
중복인 곳의 주소가 또다른 루트주소로서 역할을 해야한다. 

햔제주소 어레이에 밸류로 등록된 주소를 추가.
기존에 있던 c의 밸류에 현재주소1에 추가되는 객체가 같이 추가될수있도록 한다.

{
	b:{
		*a : {
			*c :{
				*d :{
					*c :{ 
						<- *현재 주소 1
					} 
				}
				**현재 주소 1
			} <- 현재 주소 2(루트주소를 쓱 보는데 이미 있는 거다? 그러면 이 주소도 현재주소에 추가함.)
		}
	}	<- 루트 주소
	**a : { *c :{ *d :{*c :{*f:{}}} }}
	**c :{ *d :{*c :{*f:{}}} }
	**d :{ *c :{*f:{}}}
	**f:{}
}
*/
// N:string길이 (char의 개수)
// time : O(N)
// space : O(N * N)
const populateSuffixTrieFrom = (string) => {
	const trie = {};
	const store = {};
	let curRef = [trie];

	for (let s = 0; s < string.length; s++) {
		const c = string[s];
		const tmp = [];

		for (let i = 0; i < curRef.length; i++) {
			if (s === string.length - 1) curRef[i][c] = { "*": true };
			else curRef[i][c] = {};
			curRef[i] = curRef[i][c];

			if (!trie[c]) trie[c] = curRef[i];
			// console.log(curRef);

			if (store[c]) tmp.push(store[c]);
			else store[c] = curRef[i];
		}
		curRef.push(tmp);
	}
	return trie;
};

console.dir(JSON.stringify(populateSuffixTrieFrom("aaaaabbbbbb")));
// console.dir(populateSuffixTrieFrom("aaaa"));

/*
수빈이꺼. 타임 O(N^2)
class SuffixTrie {
	constructor() {
		this.root = {};
	}

	populateSuffixTrieFrom(string) {
		for (let i = 0; i < string.length; i++) {
			let trie = this.root;
			for (let j = i; j < string.length; j++) {
				const curChar = string[j]; //
				if (!trie[curChar]) trie[curChar] = {};
				trie = trie[curChar]; //
			}
			trie["*"] = true;
		}
	}
}
let string = "aaa";
const suffixTrie = new SuffixTrie();

suffixTrie.populateSuffixTrieFrom(string);
console.log(JSON.stringify(suffixTrie.root));

*/
