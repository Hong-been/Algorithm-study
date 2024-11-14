const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 
 */
function solution(inputs) {
    const n = Number(inputs[0]);
    
    return n*(n-1);
}

console.log(solution(inputs));
