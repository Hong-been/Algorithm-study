const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * path를 계속 들고다닐경우, 최악의 경우 메모리 사용량
경로 길이 (L): 최악의 경우, 경로 길이는 약 100,000일 수 있습니다.
큐의 크기 (M): BFS 과정에서 동시에 큐에 저장될 수 있는 요소의 수는 약 100,000개일 수 있습니다.
총 메모리 사용량:
각 숫자는 JavaScript에서 약 8바이트를 차지한다고 가정할 때,
하나의 경로(curP)는 L * 8 = 800,000 바이트 (약 800 KB)를 소비합니다.
큐에 M개의 경로가 있을 경우, 전체 메모리 사용량은 M * L * 8 = 100,000 * 100,000 * 8 = 80,000,000,000 바이트 (약 80 GB)가 되어, 이는 명백히 512 MB를 초과합니다.
 */
function solution(inputs) {
    const [n, k] = inputs[0].split(" ").map(Number);
    if(n===k) return [0, n]
    
    const q = [[n,0]];
    const visitedFrom = Array.from({length: 100001}, () => -1);
    visitedFrom[n]=null; // 부모가 없는 최상위 노드

    while(q.length>0) {
      const [curN, curT] = q.shift();
      const nextN = [curN*2, curN+1, curN-1];

      for(let next of nextN){
        if (next<0 || next>100000) continue;
        if(next === k) {
          const path = [];
          visitedFrom[next] = curN;
          let parent = next;
          while(parent!==null){
            path.push(parent);
            parent = visitedFrom[parent];
          }
          return [curT+1, path.reverse().join(' ')]
        }
        if(visitedFrom[next] !== -1) continue;
        visitedFrom[next] = curN; // 부모노드 저장
        // console.log(curN, next)
        q.push([next, curT+1])
    }
  }
}

console.log(solution(inputs).join('\n'));
