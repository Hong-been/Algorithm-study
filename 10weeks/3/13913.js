const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 
 */
function solution(inputs) {
    const [n, k] = inputs[0].split(" ").map(Number);
    if(n===k) return [0, n]
    
    const q = [[n,0, [n]]]
    const visited = Array.from({length: 100001}, () => 0);
    visited[n]=1;

    while(q.length>0){
      const [curN, curT, curP] = q.shift();

      const nextN = [curN*2, curN+1, curN-1];
      for(let i=0; i<nextN.length; i++){
        if(nextN[i]<0 || nextN[i]>100000) continue;
        if(nextN[i] === k) return [curT+1, [...curP, nextN[i]].join(' ')];

        if(visited[nextN[i]]) continue;
        visited[nextN[i]]=1;
        q.push([nextN[i], curT+1, [...curP,nextN[i]]]);
      }
    }
}

console.log(solution(inputs).join('\n'));
