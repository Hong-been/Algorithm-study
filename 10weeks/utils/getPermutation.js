/**
 * 순열
 * 순서가 중요함 -> 순서를 무시할 수 없음 -> 순서가 다르면 다른걸로 취급함.
 */
function getPermutations (arr, selectNumber) {
  const results=[];
  if(selectNumber === 1) return arr.map((el)=>[el]); // 1개선택하는 경우는 각 한개씩만 담아서 주면 됨.

  arr.forEach((fixed, index,origin)=>{
      const rest = [...origin.slice(0,index), ...origin.slice(index+1)]; // index빼고 나머지를 뽑기

      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map((el) => [fixed, ...el]); // 돌아온 순열에 떼놓은 fixed 불이기
      
      results.push(...attached)
  })
  return results;
}