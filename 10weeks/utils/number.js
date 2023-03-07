const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;

console.log(Number.MAX_SAFE_INTEGER);
// Expected output: 9,007,199,254,740,991
// 9천조..

console.log(x);
// Expected output: 9007199254740992

console.log(x === y);
// Expected output: true

/**
 20억 이상의 큰 수를 다루기 위해서 BigInt로 감싸주어 형변환이 필요하다.

 에러 유의사항
 1. 빅인트는 빅인트끼리만 연산가능함.(나누기 2 이런거 안됨)
 2. console.log하면 가장 끝에 n이 붙은 형태가 그대로 나온다.
  - BigInt(num).toString() 해주어야 n빼고 문자열로 나옴.
 */
