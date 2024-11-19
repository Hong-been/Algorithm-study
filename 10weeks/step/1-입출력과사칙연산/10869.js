const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 
 */
function solution(inputs) {
    const [a,b] = inputs[0].split(" ").map(Number);
    return [a+b,a-b,a*b,Math.floor(a/b), a%b].join("\n");
    
}

console.log(solution(inputs));
