/*


binary search




Linear search - O(N)
Binary search - O(logN)


*/

// maxLength
//  0 1 2 3 4 5  6, target = 6

[5, 6, 7, 8, 1, 2, 3, 4]; ///shifted arr

//arr = [5,6,7,7,7,7,7,7,7,[8,8,8,8,8,8,8,8],8,[8,8,8,8],9,9,10,10], target = 8
//O(4*logN);

function binarysearch(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		//(left + right / 2) --> overflow
		let mid = Math.floor(left + (right - left) / 2); // safe guard --> mid pointer

		if (arr[mid] === target) return mid;
		else if (arr[mid] < target) left = mid + 1;
		else right = mid - 1;
	}
	return -1;
}
