const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let stack = [];
let answer='';
const num = input[0];

for (let i = 1; i <= num; i++) {
	if (input[i].indexOf("push")>=0) {
		let x = input[i].split(' ');
		stack.push(x[1]);
		continue;
	} else {
		switch (input[i]) {
			case "pop":
				if (stack.length) answer+=stack.pop()+'\n';
				else answer+="-1"+'\n';
				break;
			case "size":
				answer+=stack.length+'\n'
				break;
			case "empty":
				if (stack.length) answer+="0"+'\n';
				else answer+="1"+'\n';
				break;
			case "top":
				if (stack.length) answer+=Number(stack.slice(-1))+'\n';
				else answer+="-1"+'\n';
				break;
		}
	}
}
console.log(answer);
