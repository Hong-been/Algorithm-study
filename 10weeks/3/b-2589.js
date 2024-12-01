const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * L 육지
 * W 바다
 * 지도 크기 n*m 최대 50*50=2500. 최악의 경우 모든 칸이 육지라고 하면
 * 각 칸에 대해서 모두 BFS를 적용 --> bfs를 2500번 호출한다.
 * 각 BFS는 2500개의 노드와 2500*4의 간선으로 이루어져있다. O(2500 + 2500*4) = 12500(만 이천)
 * 
 * 즉, 시간복잡도는 O(2500 * (2500 + 2500*4)) = 31250000 (3천만..)
 * visited, queue 공간복잡도 O(n*m)
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
