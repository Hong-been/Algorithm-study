/*


input string
output string array
edge string.len===0? return [""];

"a" ["a","1"]
"ab" [ab,a1,1b,2]
"bat"
bat
1로 대체할 수 있는 섭스트링
ba,bt,at
a

 0 1 2
[b,a,t]
 0 0 0 0이 연속3개니까 "3"
 0 0 1 0이 연속2개니까 2, 1인 값은 그대로 t=2t
 0 1 0 a 0이 연속1개 1, a, 1=1a1
 0 1 1 at 0이 연속1개 1,at=1at
 1 0 0 b b,0이 연속2개 = b2
 1 0 1 bt =b1t
 1 1 0 ba =ba1
 1 1 1 bat =bat

for(i=0 ~ i= 2^word.length){
	i를 2진법 수로 바꿔
  3자리가 안되면 앞에 0을 붙여서 3자리로 만들어
	001을 어레이에 집어넣어 [0,0,1]

	curAns=""
	for([0,0,1]순회){
		let cnt=0;

		while([cur]===0){
			cnt++; //cnt 2
			i++; // i 2
		}
    
		if(cnt>0) curAns+=cnt+word[i];
		else curAns+=word[i];
	}

	정답.push(curAns);
}

N: word length
time O(2^N * N)
spcae O(2^N)-result

*/
function generateAbb(word) {
	//edge
	// string.len===0? return [""];
	if (word.length === 0) return [""];

	const result = [];

	for (let i = 0; i < 2 ** word.length; i++) {
		// i를 2진법 수로 바꾸고
		// 3자리가 안되면 앞에 0을 붙여서 3자리로 만들거 스트링으로
		const bi = i.toString(2).padStart(word.length, "0"); // time O(N)..
		// '1'
		// 문제가있다! 구형브라우저 지원안함......ㅠㅜㅠ

		let curAns = "";

		for (let c = 0; c < bi.length; c++) {
			let cnt = 0;
			while (bi[c] === "0") {
				cnt++; //cnt 2
				c++; // i 2
			}
			if (cnt > 0) {
				curAns += cnt;
				c--;
			} else curAns += word[c];
		}

		result.push(curAns);
	}

	console.log(result);
	return result;
}

generateAbb("ab");
// BAT
// code
