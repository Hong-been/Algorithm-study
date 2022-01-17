// time: O(N^3)
// space: O(N)
//const string="abaxyzzyxf";
const string = "acacacb";
//ab 0,1
// 0 1
function longestPalindromicSubstring(string) {
	let maxStr = "";
	let isPalindromic = false;
	// edge case
	if (!string) return;
	if (string.length === 1 && string.length === 2) return string;

	for (let i = 0; i < string.length; i++) {
		for (let j = i; j < string.length; j++) {
			isPalindromic = true;
			// palindromic 여부 확인
			for (let p = 0; p < (j - i + 1) / 2; p++) {
				if (string[i + p] !== string[j - p]) isPalindromic = false;
			}
			// longest palindromic 여부 확인
			if (isPalindromic && j - i + 1 > maxStr.length) {
				maxStr = string.substr(i, j - i + 1);
			}
		}
	}
	return maxStr;
}

console.log(longestPalindromicSubstring(string));
