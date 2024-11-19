const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 
 */
function solution(inputs) {
    const [a,b] = inputs;
    const b100=Math.floor(b/100);
    const b10=Math.floor((b%100)/10);
    const b1=b%10;

    const ans1=a*b1;
    const ans2=a*b10;
    const ans3=a*b100;
    const ans = ans1+ans2*10+ans3*100;

    return [ans1,ans2,ans3,ans].join("\n");
}

console.log(solution(inputs));
