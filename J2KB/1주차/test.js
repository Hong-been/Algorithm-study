"use strict";
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const n = Number(fs.readFileSync(filePath).toString().trim());

unitTesting((input) => solution(input), 1, "1+(2*3)/(2-1)");

function solution(input) {
	for (let i = 0; i < input.length - 1; i++) {
		for (let j = i + 1; j < input.length; j++) {
			if (input[i] === 0 && input[j] !== 0) {
				[input[i], input[j]] = [input[j], input[i]];
				break;
			}
		}
	}

	return input;
}

function unitTesting(func, expected, input) {
	const result = func(input);
	if (JSON.stringify(result) === JSON.stringify(expected))
		console.log(
			`PASSED, the output of the function is ${result} === ${expected}`
		);
	else
		console.log(
			`FAILED, the output of the function is ${result} !== ${expected}`
		);
}

/**
 * 
 * 
var sol = function(characters, document) {
	
  // time complexity = O(N + M);
  // space complexity = O(N);
  
  const map = new Map();
  
  const charArr = characters.split(''); // ['b', 'a', ] O(N)
  
  // time complexity = O(N)
  for(let c = 0; c < charArr.length; c++) {
    const char = charArr[c];
  	if(map.has(char)) map.set(char, map.get(char) + 1); //O(1)
    else map.set(char, 1); // O(1)
  }
  
  // time complexity = O(M)
  for(let c = 0; c < document.length; c++) {
    const char = document[c];
    if(!map.has(char)) return false; /// guard clause
    
    map.set(char, map.get(char) - 1); ///O(1)
    if(map.get(char) < 0) return false; // guard clause
  }
  return true;
  
}

 */
