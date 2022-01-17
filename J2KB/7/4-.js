// Lagrange's Four Square theorem,
// that every natural number can be represented as the sum of four integer squares.
var numSquares = function (n) {
	for (
		let a = 0;
		a <= Math.sqrt(n);
		a++ // a=2
	)
		for (let b = a; b <= Math.sqrt(n); b++) {
			//b=2
			const C = n - a * a - b * b; //c= 12-8=4
			if (Math.sqrt(C) % 1 === 0)
				//sqrt(c)가 자연수라면=c가 제곱수라면
				return !!a + !!b + !!C; //t + t + t = 3
		}
	return 4;
};
