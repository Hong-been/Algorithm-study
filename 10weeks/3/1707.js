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
 * 1초뒤
 * n: 
 */
function solution(inputs) {
    const [n, k] = inputs[0].split(" ").map(Number);

    if(n === k) return 0;

    const qn = [[n,0]];
    const qk = [[k,0]];
    // 50만*50만 = 250000000000 천억 ㅋㅋㅋㅋㅋ
    const shortestTime = Array.from({length: 500001}, () => 
        Array.from({length:500001}, () => 0));

    // 
    while(qn.length > 0) {
        const [curN, curT] = qn.shift();
        const nextN = [curN*2, curN+1, curN-1];

        for(let i=0; i<nextN.length; i++){
            if(nextN[i] > 500000) continue;

            shortestTime[curT+1][nextN[i]] = curT+1;
            qn.push([nextN[i], curT+1]);
        }
    }

    while(qk.length >0){
        const [curK, curT] = qk.shift();
        const nextK = [curK+(curT+1), curK-((curT+1))];

        for(let i=0; i<nextK.length; i++){
            if(nextK[i] > 500000) continue;

            if(shortestTime[curT+1][nextK[i]]){
                return curT+1;
            }
            qk.push([nextK[i], curT+1]);
        }
    }

    return -1;
}

console.log(solution(inputs));
