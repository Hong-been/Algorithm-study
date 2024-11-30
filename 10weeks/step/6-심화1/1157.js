const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 단어길이 최대 백만
 * 소팅: O(N logN) ->
 */
function solution(inputs) {
    const w = inputs[0].toLowerCase().split("");
    const map = {};
    w.forEach((item)=>{
      if(map[item]) map[item]++;
      else map[item]=1;
    })

    let ans = 0;
    let maxAns = "";
    let isMaxDuplicated = false;
    for (let [key, value] of Object.entries(map)){
      if(ans === value) {
        isMaxDuplicated = true;
        ans=value;
        maxAns=key;
        continue;
      }
      if(ans < value) {
        isMaxDuplicated = false;
        ans=value;
        maxAns=key;
        continue;
      }
    }
    
    return isMaxDuplicated ? "?" : maxAns.toUpperCase();
}

console.log(solution(inputs));
