/*
가로 8, 세로 12
기울기 12/8=1.5 반올림->2

96-2*8


function solution(w,h){
    const slope = h / w;
    let result = 0;

    for(let i = 1; i <= w; i++){
        result += Math.ceil(slope * i);
    }

    return ((h * w) - result) * 2;
}

6
5
4
3
2
1
  1 2 3 

  slope=2
  2*1=2,res=2
  2*2=4,res=6
  2*3=6,res=12

(18-12)*2=12

*/

function solution(w, h) {
	if (w === 1 || h === 1) return 0;

	const gcd = GCD(w, h);

	return w * h - (h + w - gcd);
}
function GCD(a, b) {
	while (b) {
		let r = a % b;
		a = b;
		b = r;
	}
	return a;
}
