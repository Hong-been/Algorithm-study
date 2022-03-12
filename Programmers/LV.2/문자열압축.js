/*
input: string/output: integer=압축한 문자열 길이
edge: s.len 0? return 0, s.len 1? return 1, s.len? return 2.

ab ca bc ab ca bc de de de de de de

1) s.len
2) ab ca bc ab ca bc 6de = 15
3) 4abc ded ede ded ede=16
4) abca bcab cabc 3dede=15
5) 불가능, len이 5의 배수가 아님
6) 2abcabc2dedede = 14

len의 약수들로 다 잘라본다.

ab ca bc ab ca bc "de de de de de de"="5de"
                              i
unit=2
2개로 다 자르고 while돌리기
같은갯수 =5
    while([i]===[i+1] && i+1<현재포문){
        같은갯수++
        i++
    }
    전체문자열-=unit*(갯수-1)+1

time O(N^3)-sliceS가 O(N^2)
space O(N)

*/
function solution(s) {
	// edge: s.len 0? return 0, s.len 1? return 1, s.len? return 2.
	if (s.length === 0) return 0;
	if (s.length === 1) return 1;
	if (s.length === 2) return 2;

	let min = s.length;

	for (let u = 1; u < s.length; u++) {
		const words = sliceS(s, u);

		let i = 0;
		let curMin = s.length;

		while (i < words.length) {
			let sameCnt = 1;
			while (words[i] === words[i + 1] && i + 1 < words.length) {
				sameCnt++;
				i++;
			}

			if (sameCnt >= 10) curMin = curMin - u * (sameCnt - 1) + 2;
			else if (sameCnt > 1) curMin = curMin - u * (sameCnt - 1) + 1;
			else i++;
		}
		min = Math.min(min, curMin);
	}
	return min;
}

function sliceS(s, unit) {
	const words = [];

	let i = 0;
	while (i < s.length) {
		if (i + unit >= s.length) words.push(s.slice(i));
		else words.push(s.slice(i, i + unit));
		i += unit;
	}

	return words;
}
