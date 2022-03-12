/*
input: bac, ab
output: [0];

input:  string 두개, (string-길이0일수있음, pattern-길이1이상)
output: integer array, 시작인덱스를 저장함
edge : string.len=0 , p.len>0일때 return [ ], pattern길이가 string보다 길 때는 Return [ ]

input: bacb, abc
output: [0,1]

abbcabc
abc
pattern - 재료. 
abc => {a :1, b:1, c:1}

baccb  {a :1, b:0, c:0}
l
r

012345
isMatched = 0

abfefcabc {a :0, b:0, c:0}
   l
      r

time O(P+S)
space O(P)

<sliding window>
ans = [2,3,4];

while(r인덱스가 string범위 내에 있을때)
 string[r]가 map있고 갯수도 0보다 크다 
 -> map[r] 1감소
 -> 정답이다! p.len 3과 r-l+1이 같으면 정답에 left를  추가,map[l]를 1증가, l++, r++
 -> r++

map[r]이 있지만, 갯수가 0개일 때
 map[l]++, l++

아예 map에 없을때
while(l가 r과 같아질때까지)
 map[l]++, l++;
 r++, l++;

// brute force === optimal
// abfcabc, abc
*/

function solution(s, p) {
	// edge : string.len=0 , p.len>0일때 return [ ], pattern길이가 string보다 길 때는 Return [ ]
	if (s.length === 0 || s.length < p.length) return [];

	const ans = [];
	const map = new Map();
	let l = 0;
	let r = 0;

	for (let i = 0; i < p.length; i++) {
		if (map.has(p[i])) map.set(p[i], map.get(p[i]) + 1);
		else map.set(p[i], 1);
	}
	// map = { a:0, b:0 c:0 } , ans=[3,4]
	// abfcabc
	//            l
	//                r
	// let left = 0;
	// momo: while대신 for을 사용하면 out of index걱정 ㄴㄴ, left포인터만 옮겨주면 된다.
	// for (let right = 0; right < s.length; right++) {}

	while (r < s.length) {
		if (!map.has(s[r])) {
			while (l < r) {
				map.set(s[l], map.get(s[l]) + 1);
				l++;
			}
			r++;
			l++;
			continue;
		}
		if (map.get(s[r]) === 0) {
			//  map[l]++, l++
			map.set(s[l], map.get(s[l] + 1));
			l++;
		} else {
			map.set(s[r], map.get(s[r]) - 1);
			if (p.length === r - l + 1) {
				ans.push(l);
				map.set(s[l], map.get(s[l]) + 1);
				l++;
				r++;
			} else r++;
		}
	}
	return ans;
}
