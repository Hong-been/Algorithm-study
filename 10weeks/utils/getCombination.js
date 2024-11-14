/**
 * 조합
 * 순서가 중요하지 않음 -> 순서를 무시한다 -> 순서가 다르든 말든 관심없으므로 같은걸로 취급.
 */
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