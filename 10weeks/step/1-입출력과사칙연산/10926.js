const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 
 */
function solution(inputs) {
    const name = inputs[0];
    return name+"??!";
}

console.log(solution(inputs));
