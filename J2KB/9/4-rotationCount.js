/*

  0   1  2  3  4
[10, 15, 1, 3, 8]
         l
      m
				 r

오름차순 2개로 이루어짐
[m]<[m+1] : r=m
[m]>[m+1]: l=m+1

l===r이면 반복문 끝, return l=2;

0 1 2 3 4  5  6
4 5 7 9 10 -1 2
            l
        m
			      r

//edge
if([0]<[last]) return 0;
						
[m]<[m+1]인데 [r]<[m]이다? l=m+1
[m]<[m+1]이고 [r]>[m]이다? r=m
[m]>[m+1]이다? l=m+1

return l=5

0 1 2 3
1 3 8 10
l
  m
	    r

time O(logN)
space O(1)
*/
function rotationCount(arr) {
	if (arr[0] < arr[arr.length - 1]) return 0;

	let l = 0,
		r = arr.length - 1;

	while (l < r) {
		let m = Math.floor((l + r) / 2);

		if (arr[m] < arr[m + 1]) {
			if (arr[r] < arr[m]) l = m + 1;
			else r = m;
		} else l = m + 1;
	}

	return l;
}

let ans = rotationCount([10, 15, 1, 3, 8]);
console.log(ans);

ans = rotationCount([4, 5, 7, 9, 10, -1, 2]);
console.log(ans);

ans = rotationCount([1, 3, 8, 10]);
console.log(ans);
