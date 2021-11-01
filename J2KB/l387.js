"use strict";
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const n = Number(fs.readFileSync(filePath).toString().trim());

unitTesting((input) => solution(input), 0, "a");

/*
for문 돌면서 map형식으로 저장 {데이터 : boolean}
한번이면 true, 두번이상이면 false
캐릭터가 map에 있는지 확인하고
	없으면 true로 생성
	있으면 false로 들어가
l -> 한번 {l: true}
e -> 한번 {e: true}
e -> 두번 {e: false}
t -> 한번 {t: true}
c -> 한번 {c: true}
o -> 한번 {o: true}
d -> 한번 {d: true}
e -> 한번 {e: false}
---------for문 끝

for문 한번 더 돌면서 map에 저장된 values를 살펴본다.
	values가 true인 데이터가 있으면? return 해당 인덱스;

values가 true인 데이터가 없으면 return -1;
 */

function solution(input) {
	const map = new Map();

	for (let i = 0; i < input.length; i++) {
		if (map.has(input[i])) {
			map.set(input[i], false);
		} else {
			map.set(input[i], true);
		}
	}
	for (let i = 0; i < input.length; i++) {
		if (map.get(input[i]) === true) {
			return i;
		}
	}
	return -1;
}

function unitTesting(func, expected, input) {
	const result = func(input);
	if (JSON.stringify(result) === JSON.stringify(expected))
		console.log(
			`PASSED, the output of the function is ${result} === ${expected}`
		);
	else
		console.log(
			`FAILED, the output of the function is ${result} !== ${expected}`
		);
}
