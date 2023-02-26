const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
inputs.forEach((input, i) => (inputs[i] = Number(input)));

inputs.sort((a, b) => a - b);
const sum = inputs.reduce((acc, cur) => (acc += cur), 0);
const removed = [0, 0];

for (let i = 0; i < 9; i++) {
	for (let j = i + 1; j < 9; j++) {
		const curSum = inputs[i] + inputs[j];

		if (sum - curSum === 100) {
			removed[0] = i;
			removed[1] = j;
			break;
		}
	}
}

const ans = inputs.filter((v, i) => i !== removed[0] && i !== removed[1]);
console.log(ans.join("\n"));

/**
 시간복잡도 O(9 C 2)
 왜냐면 9개 중에 2개를 고르는 조합이니까

 내 코드의 시간복잡도는 
 
 이중반복문으로
 
 [i,j]
 [0,1] ~ [0,8] => 8
 [1,2] ~ [1,8] => 7
 ...
 [7,8] => 1
 
 8+7+...+1 
 = 9 * 8/2 
 = 9C2

 */
