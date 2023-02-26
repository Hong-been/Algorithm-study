## 순열
- permutation
- 순서가 중요함. 순서가 다르면 다른 경우
- n_P_r = n! / (n-r)!

Q. 순열은 무조건 sort를 하고 해야한다?

사실 9개 중에 순서상관없이 2개를 뽑기 떄문에 9C2인데,
9P2로도 뽑을수는있다. 중복이긴하지만 모든 경우의 수가 나오기때문에 답은 나옴. 비효율적일 뿐임.
9P2 = 9!/2! = 십팔만얼마...
9C2=9*8/2 = 36

-----------------------------------------------
## 문자열 <-> 아스키코드
- `"A".charCodeAt(0)` = 65
- `"a".charCodeAt(0)` = 97
- `String.fromCharCode(97)` = "a"
- 알파벳 갯수는 26개
- 알파벳 map을 만드는 코드
```js
const createAlphaMap = () => {
	const map = {};

	for (let i = 0; i < 26; i++) {
		map[String.fromCharCode(i + "a".charCodeAt(0))] = 0;
	}
  
	return map;
};
```

-----------------------------------------------
## map vs array , reduce
- map을 쓰다보니 array 인덱스로 훨씬 간단한걸 맵으로 생각함.
- 0부터 시작하는 숫자 인덱스로 충분하다면 당연히 array가 편하다. 유의하기.
- reduce로 합계를 구할 떄에, 예외처리로 `return accurate` 꼭 해주기