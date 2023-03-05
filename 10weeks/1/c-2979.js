const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
inputs.forEach(
	(input, i) => (inputs[i] = input.split(" ").map((i) => Number(i)))
);

const createArray = (...trucks) => {
	const arr = Array(100).fill(0);

	for (let i = 0; i < 3; i++) {
		const [st, end] = trucks[i];
		for (let j = st; j < end; j++) arr[j] += 1;
	}

	return arr;
};

function solution(nums) {
	const [A, B, C] = nums[0];
	const arr = createArray(nums[1], nums[2], nums[3]);

	return arr.reduce((ans, cnt) => {
		if (cnt == 1) return (ans += cnt * A);
		if (cnt == 2) return (ans += cnt * B);
		if (cnt == 3) return (ans += cnt * C);
		return ans;
	}, 0);
}

console.log(solution(inputs));
