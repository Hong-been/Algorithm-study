const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * L 육지
 * W 바다
 */
function solution(inputs) {
    const [n, m] = inputs[0].split(" ").map(Number);
    const mat = Array.from({length: n}).map(() => Array.from({length: m}))
    for(let i=0; i<n; i++){
      for(let j=0; j<m; j++){
        mat[i][j] = inputs[i+1][j];
      }
    }
    
    const movements = [
      [0,1],
      [0,-1],
      [1,0],
      [-1,0]
    ]

    const q = [];
    let visited = Array.from({length: n}).map(()=>Array.from({length: m}, () => 0));
    
    let maxLength = 0;
    for(let i=0; i<n; i++){
      for(let j=0; j<m; j++){
        if(!visited[i][j] && mat[i][j]==="L"){
          q.push([i,j,0]); // 시작점, 길이
          visited[i][j]=1;

          while(q.length > 0){
            const [ci,cj, depth] = q.shift();
            maxLength = Math.max(depth, maxLength);

            movements.forEach((move)=>{
              const [ni,nj] = [move[0]+ci, move[1]+cj];
              
              if(ni < n && nj < m && 0 <= ni && 0 <= nj && !visited[ni][nj] && mat[ni][nj]==="L"){
                visited[ni][nj]=1;
                q.push([ni,nj,depth+1]);
              }
            })
          }
        }
        visited = Array.from({length: n}).map(()=>Array.from({length: m}, () => 0));
    }
  }
  return maxLength;
}

console.log(solution(inputs));
