/**
 * @param {string} s
 * @return {number}
 
 {
    b : true
 }
 
0 1 2 3 4 5 6 7
a - - b - - - a
                i
                j

0 1 2 3 4 5 6 7
a - - b - b - c
i
                j
                
 while(j를 s의 끝까지 하나씩 증가시킨다):
    이미 등록된 j를 발견하면, maxLength업데이트하고 i= (j랑 같은 값 인덱스 + 1), map={ j:true }로 초기화, j++
    등록안되어있으면, 등록한다, j++
    
i가 마지막 요소랑 중복이라면, i는 맨뒤에 있을 것! 그게 아니라면, 
if(i < s의 마지막 요소){
       maxLength 업데이트.
    } 
    
return max;
 
 */
// N : s.length
// time O(N), space O(N)
var lengthOfLongestSubstring = function (s) {
	let i = 0,
		j = 0;
	let max = 0;
	let map = new Map();

	while (j < s.length) {
		if (map.has(s[j])) {
			max = max < j - i ? j - i : max;
			while (s[i] !== s[j]) {
				map.delete(s[i]);
				i++;
			}
			i++;
		} else map.set(s[j], true);

		j++;
	}
	if (i < s.length) {
		max = max < j - i ? j - i : max;
	}
	return max;
};
// Runtime: 92 ms, faster than 94.94% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 43.5 MB, less than 73.04% of JavaScript online submissions for Longest Substring Without Repeating Characters.

/* 
수빈이코드. 
map대신 set사용, right포인팅대신 set.size로 윈도우의 크기를 측정한다.

var lengthOfLongestSubstring = function(s) {
  let result = 0;
  let set = new Set();
  let left = 0;
  for (let i=0; i<s.length; i++){
      while(set.has(s[i])){
          set.delete(s[left]);
          left++;
      }
      set.add(s[i]);
      if (set.size > result){
          result = set.size;
      }
      //console.log(set)
  }
  return result;
};
*/
