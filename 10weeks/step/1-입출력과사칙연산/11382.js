const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 
 */
function solution(inputs) {
    const [a,b, c] = inputs[0].split(" ").map(Number);
    return a+b+c;
}

console.log(solution(inputs));
