/*
input number arr
output integer
edge arr empty-return arr

brute
0부터 arr.length까지..
0 1 2 3 4 <- n+1개 어레이를 만들어?
1 1 0 1 1

0인 인덱스가 정답.

hash = Array(n+1).fill(0)

for(arr[0]~끝까지) hash[arr[i]]=1

for(hash[0]~끝까지) hash[i]이 0이면 return i;


time O(N)
space O(N)

optimal
1+2+3+arr.length=10 t O(1)
-> (1+arr.length)*(arr.len /2) = 5*2=10
4+0+3+1=8 
time O(N)
space O(1)

10-8=2..
*/
function findMissingNumber(arr) {
	if (!arr.length) return 0; //? 가능?

	let sum = 0;
	arr.map((n) => (sum += n));

	return (1 + arr.length) * (arr.length / 2) - sum;
}
// const ans = findMissingNumber([4, 0, 3, 1]);
// const ans = findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1]);
const ans = findMissingNumber([0, 1, 3]);
console.log(ans);
