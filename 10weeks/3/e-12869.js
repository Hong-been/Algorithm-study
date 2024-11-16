const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 총 노드 수 61*61*61=226981(22만)
 * 총 간선의 수 61^3*6(각 노드마다 6개가 있음) = 1361886(136만)
 * 
 * BFS O(V+E) = 22만 + 136만 = 158만
 */
function solution(inputs) {
    const n = Number(inputs[0]);
    const initSvcs = inputs[1].split(" ").map(Number);
    const svcs = [initSvcs[0] || 0, initSvcs[1] || 0, initSvcs[2] || 0];
    const visited = Array.from({length: 61}, () => Array.from({length: 61}, () => Array.from({length: 61}).fill(0)));
    
    const attacks = [
      [9,3,1],
      [9,1,3],
      [1,3,9],
      [1,9,3],
      [3,1,9],
      [3,9,1]
    ];

    const q = [];
    q.push([...svcs, 0]); // a,b,c, count
    visited[svcs[0]][svcs[1]][svcs[2]]=1;

    while(q.length>0){
      const [a,b,c, count] = q.shift();
      if(a<=0 && b<=0 && c<=0) {
        return count;
      }

      for(const [da,db,dc] of attacks){
        const na= Math.max(0, a-da);
        const nb= Math.max(0, b-db);
        const nc= Math.max(0, c-dc);

        if(!visited[na][nb][nc]){
          visited[na][nb][nc]=1;
          q.push([na,nb,nc,count+1]);
        }
      }

    }
    
    return -1;
}

console.log(solution(inputs));
