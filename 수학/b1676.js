"use strict";
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const n = Number(fs.readFileSync(filePath).toString().trim());
let ans = 0;
let target = n;
const primes = [];
prime(target);

while (target) {
	if (target % 5 !== 0) {
    target--;
    continue;
  }
	const tmp = fiveInfactors(target);
	ans += tmp;
	target--;
}
console.log(ans);

function fiveInfactors(n) {
	let ans = 0;
	for (let j = 2; j <= n; j++) {
		if (primes[j] === 0) continue;

		let p = primes[j];
		if (n % p !== 0) continue;
		if (p%5 === 0) {
      ans++;
      j=1;
    }
    n /= p;
	}
	return ans;
}

function prime(n) {
	for (let i = 2; i <= n; i++) {
		primes[i] = i;
	}
	for (let i = 2; i <= n; i++) {
		if (primes[i] === 0) continue;
		for (let j = i * 2; j <= n; j += i) {
			primes[j] = 0;
		}
	}
}
