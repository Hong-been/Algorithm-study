const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
// inputs.forEach((input, i) => (inputs[i] = Number(input)));
// const nums = inputs[0].split(" ");

// 한 라인에서 더 쪼개야 할 때(2차원배열로 만들어진다.)
// inputs.forEach(
// 	(input, i) => (inputs[i] = input.split(" ").map((i) => Number(i)))
// );

function solution(st) {
	// 홀수인 경우: 양 끝에서 다가오면서 같은지 본다.
	// 0 1 2: 0이랑 2, 두 포인터가 둘다 1에서 만나면 끝. 같은거임. 중간에 다른거 나오면 바로 ㄴㄴ

	// 짝수인 경우
	// 0 1 2 3: 0이랑 3, 1이랑 2, 두 포인터가 엇갈리면 끝. 같은거임. 중간에 다른거 나오면 바로 ㄴㄴ

	let i = 0;
	let j = st.length - 1;

	while (i < j) {
		if (st[i] !== st[j]) return 0;

		i++;
		j--;
	}

	return 1;
}

console.log(solution(inputs[0]));
