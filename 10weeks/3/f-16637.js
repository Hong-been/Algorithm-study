const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 시간복잡도: O(2^((n-1)/2)) <= 2^9 = 512
 * 공간복잡도: O((n-1)/2) 재귀호출 최대 깊이, 즉 스택 공간 <= 9
 */
function solution(inputs) {
    const n = Number(inputs[0]) // 1이상 19이하
    const exp = inputs[1].split("");
    const calculate = (a,op,b) => {
      if (op === "+") return a+b;
      if (op === "-") return a-b;
      if (op === "*") return a*b;
    }

    const solve = (opIndex, curValue) => {
      if (opIndex >= exp.length){
        maxResult = Math.max(maxResult, curValue);
        return;
      }

      // 현재 연산
      const nextValue = calculate(curValue, exp[opIndex], +exp[opIndex+1]);
      solve(opIndex+2, nextValue);

      // 괄호 추가해서 계산
      if(opIndex+2 < exp.length){
        const bracketValue = calculate(+exp[opIndex+1], exp[opIndex+2], +exp[opIndex+3]);
        const combinedValue = calculate(curValue, exp[opIndex],bracketValue);
        solve(opIndex+4, combinedValue);
      }
    }

    let maxResult = -Infinity;
    solve(1, +exp[0])
    return maxResult
}

console.log(solution(inputs));
