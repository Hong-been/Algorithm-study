const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * N(0 ≤ N ≤ 500000)
 * K(0 ≤ K ≤ 500000)
 * 
 * 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
 *           n
 *                                          k
 * 
 * n: n*2/n-1/n+1 중 하나
 * k: 
 * n=5, k=17 이라고하면
 * 
 * 포기...^^ 홀짝 머라는건지
 */
function solution(inputs) {
    const [n, k] = inputs[0].split(" ").map(Number);

    if(n === k) return 0;

    const qn = [[n,0]];
    const visited = Array.from({length: 500001}, () => 0);
    visited[n] = 1;

    while(qn.length > 0) {
        const [curN, curT] = qn.shift();
        const nextN = [curN*2, curN+1, curN-1];

        for(let i=0; i<nextN.length; i++){
            if(nextN[i] < 0 ||nextN[i] > 500000) continue;
            const nextT = curT+1;
            const brotherPosition = k + ((nextT+1) * (nextT))/2;
            if(brotherPosition > 500000) return -1;

            // console.log(nextN[i], brotherPosition)
            if(nextN[i] === brotherPosition) return nextT;

            if(visited[nextN[i]]) continue;
            visited[nextN[i]]=1;
            qn.push([nextN[i], nextT]);
        }
    }

    return -1;
}

console.log(solution(inputs));
