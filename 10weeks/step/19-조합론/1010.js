const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 30*30 상수시간만큼 시간,메모리르 사용
 * DP를 위해 직접 표그려서 정확히 예시 이해하기
 */
function solution(inputs) {
    const t = Number(inputs[0]);
    const cases = [];
    const ans = [];

    for(let i=1; i<=t; i++){
      cases.push(inputs[i].split(" ").map(Number));
    }

    //최대 29*29 초기화
    const dp = Array.from({length: 30}, () => Array.from({length: 30}));
    for(let i=0; i<30; i++){
      for(let j=0; j<30; j++){
        if(i===0 || j===0 || j<i) {
          dp[i][j]=0;
          continue;
        }

        if(i===1) {
          dp[i][j]=j;
          continue;
        }

        if(i===j) {
          dp[i][j]=1;
          continue;
        }

        dp[i][j] = dp[i][j-1]+dp[i-1][j-1];
      }
    }
    
    for(let i=0; i<cases.length; i++){
      const [n,m] = cases[i];
      ans.push(dp[n][m]);
    }
    return ans;
}

console.log(solution(inputs).join("\n"))
