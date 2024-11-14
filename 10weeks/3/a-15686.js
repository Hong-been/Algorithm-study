const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 2 <= n <= 50. 집은 최대 2n개
 * 순열 치킨집수_C_m (1<= m <=13)
 * m <= 치킨집 <= 13
 * 
 * 무식하게풀기: 치킨집 뽑고, 모든 집과 거리비교해서 최소값 찾기. 시간복잡도가 되면 가능한 방법이다.
 * 
 * 최대는 n 50, m 13일때
 * 집은 100개
 * 치킨집은 13개가 최대.
 * 
 * 그럼 최대일때 시간복잡도를 계산해보자.(k는 m의 범위내에 있는 임의의 수)
 * (최대 치킨집)_C_k * 100(집의 최대수) * k
 *  --> K=6일때 조합이 가장 크게 나올것이므로 6으로 가정하면
 *  = 13_C_6 * 100 * 6 
 *  = 1716 * 100 * 6
 *  = 102 9600 (백만)
 * 
 * 백만정도면 쌉가능
 */
function solution(inputs) {
    const [n, m] = inputs[0].split(" ").map(Number);
    
    const houses=[];
    const chickens=[];
    
    for(let i=1;i<=n;i++){
        inputs[i].split(" ").forEach((item, index)=>{
            if(item === '1') houses.push([i,index+1]);
            if(item === '2') chickens.push([i,index+1]);
        })
    }
    // chickens에서 m개만큼 뽑은 순열
    const combs = getCombinations(chickens, m);
    let ans=Number.MAX_SAFE_INTEGER;

    for(let t=0; t<combs.length;t++){
        const tempChickens = combs[t];
        
        // 집별로 m개뽑은 치킨집의 치킨거리를 구하면
        let sum=0;
        for(let i=0;i<houses.length;i++){
            let min = Number.MAX_SAFE_INTEGER;
            
            for(let j=0; j<tempChickens.length;j++){
                const length = Math.abs(houses[i][0]-tempChickens[j][0]) + Math.abs(houses[i][1]-tempChickens[j][1]);
                min = Math.min(min, length);
            }
            sum +=min;
        }

        // t번째 치킨집 순열에서는 sum이 최소 치킨거리.
        ans = Math.min(ans, sum);
    }
    return ans;
}

const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    // 1개 선택 시 각 원소를 배열로 묶어 반환합니다.

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        // `fixed` 이후의 요소들만 선택하여 조합을 생성합니다.
        
        const combinations = getCombinations(rest, selectNumber - 1);
        // 나머지 요소들로 (selectNumber - 1) 개의 조합을 재귀적으로 구합니다.

        const attached = combinations.map((el) => [fixed, ...el]);
        // `fixed`를 앞에 붙여 조합을 만듭니다.

        results.push(...attached);
        // 결과 배열에 조합을 추가합니다.
    });

    return results; // 모든 조합이 담긴 results를 반환합니다.
}

console.log(solution(inputs));
