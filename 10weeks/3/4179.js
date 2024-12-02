const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 시간복잡도: O(R*C)
 * 1. fireQueue BFS로 순회: 최대 1000*1000라고할때 전부다 불이면?
 *  O(V+E) = 백만 + 4백만 = 5백만
 * 2. 지훈Queue BFS 순회: 
 *  O(V+E) = 백만 + 4백만 = 5백만
 * 3. 총합 1억정도
 * 
 * 공간복잡도: O(r*c)
 * 지훈이는 한명, fireQueue는 전체다일수있음. 즉 r,c에 비례 O(r*c)
 * visited O(r*c)
 * firstTime O(r*c)
 */
const movements = [
  [0,1],
  [0,-1],
  [1,0],
  [-1,0]
]
function solution(inputs) {
    const [r,c] = inputs[0].split(" ").map(Number);
    const mat = Array.from({length: r}).map(() => Array.from({length: c}));
    let jihun=[];
    let fireQueue=[];
    const fireTime = Array.from({length: r}).map(() => Array.from({length: c}, () => Infinity));
    let visited = Array.from({length: r}).map(() => Array.from({length: c}, () => 0));

    for(let i=0; i<r; i++){
      for(let j=0; j<c; j++){
        mat[i][j]=inputs[i+1][j];
        
        if(mat[i][j]==="J") {
          jihun = [i,j];
          visited[i][j]=1;
        }
        else if(mat[i][j]==="F"){
          fireQueue.push([i,j, 0]);
          fireTime[i][j]=0;
        }
      }
    }
    
    // fireQueue를 BFS로 순회하면서 각 칸에 최소 도달시간을 갱신
    while(fireQueue.length>0){
      const [fi, fj, depth] = fireQueue.shift();
      movements.forEach((moveFire)=>{
        const nF = [fi+moveFire[0], fj+moveFire[1]];

        // 범위에 있으면서 벽이 아니고, 아직 도달하지 않은 곳이라면 도달시간을 갱신
        if(
          0 <= nF[0] && nF[0] < r && 0<= nF[1] && nF[1] < c && 
          mat[nF[0]][nF[1]] !== "#" && fireTime[nF[0]][nF[1]] === Infinity
        ){
          fireTime[nF[0]][nF[1]]=depth+1;
          fireQueue.push([nF[0], nF[1], depth+1]);
        }
      })
    }
    // console.table(fireTime)

    let escapeTime=Infinity;
    const q=[];
    q.push([[jihun[0],jihun[1]], 0]);

    while(q.length>0){
      const [curJ, depth] = q.shift();
      // console.log(curJ, depth)
      if(
        curJ[0] === 0 || curJ[0] === r-1 || 
        curJ[1] === 0 || curJ[1] === c-1
      ) {
        escapeTime = Math.min(escapeTime, depth+1);
        continue;
      }
      

      movements.forEach((move)=> {
        const nJ = [curJ[0]+move[0], curJ[1]+move[1]];
        if(
          0 <= nJ[0] && nJ[0] < r && 0<= nJ[1] && nJ[1] < c && 
          !visited[nJ[0]][nJ[1]] && mat[nJ[0]][nJ[1]] === "." && 
          fireTime[nJ[0]][nJ[1]] > depth+1 // 2초에 불이 이미 옴. 근데 depth는 2다?
        ) {
          visited[nJ[0]][nJ[1]] = 1;
          q.push([nJ, depth+1]);
        }
      })
    }

    return escapeTime === Infinity ? "IMPOSSIBLE" : escapeTime;
}

console.log(solution(inputs));
