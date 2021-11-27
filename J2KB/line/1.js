// 정답이 2,000,000,000 이하인 경우만 입력으로 주어집니다.
//P'는 구매를, 'S'는 판매
// ["P 300 6", "P 500 3", "S 1000 4", "P 600 2", "S 1200 1"]
// [1500, 2400]
/*
선입
p가 나오면? 그 인덱스를 저장해 놓는다. [0,1]
s가 나오면? 그 갯수만큼 앞의 저장해둔 p에서 가져온다. 
    -> 인덱스 0을 찾아가서 하나씩 같이 뺌(결과에 300*4추가, 6-4=2로 업데이트, 0개되면 인덱스shift)
    -> while돌면서 아직 남아있으면 다음 인덱스 "1" 가져와서 또 뻄
while나왔으면 다음 p보고 추가[0,1,3]
다음 s보고 p 인덱스에서 while.
*/

function solution(record) {
	const pre = calcPre(record);
	const post = calcPost(record);

	return [pre, post];
}

function calcPre(record) {
	const p = [];
	let result = 0;

	for (let i = 0; i < record.length; i++) {
		const str = record[i].split(" ");
		const P_S = str[0];
		let price = parseInt(str[1]),
			n = parseInt(str[2]);
		if (P_S === "P") {
			p.push(i);
			continue;
		}
		while (n-- > 0) {
			const curP = p.shift();
			while (record[curP].n-- > 0) result += record[curP].price;
		}
	}
	return result;
}
function calcPost(record) {
	const p = [];
	let result = 0;

	for (let i = 0; i < record.length; i++) {
		const str = record[i].split(" ");
		const P_S = str[0];
		let price = parseInt(str[1]),
			n = parseInt(str[2]);
		if (P_S === "P") {
			p.push(i);
			continue;
		}
		while (n-- > 0) {
			const curP = p.pop();
			while (record[curP].n-- > 0) result += record[curP].price;
		}
	}
	return result;
}
