/*

tree or trie



tutorial --> dictionary


root: {
  c: {
    a: {
      t: {
        '*': true;
        s: {
          '*': true;
        }
      }
    }
  },
  d: {
    o: {
      g: {
        s: {
          '*' : true;
        }
        '*': true;
      }
    }
  }
}
*/

const wordDict = [
	"samsung_earbuds",
	"santa",
	"samsung_tablet",
	"santa_suit",
	"samsung_ssd",
	"salad",
	"safe",
	"samsung_watch",
];

// cats ==> c a t s
/*
  
   root: { <---root
     c: { 
       a: {
         t: {
           s: { 
            '*' = true;
           }
         }
       }
     }
   }
  */

const traversing = (root, curWord) => {
	let curNode = root; // 이유 설명!!

	for (let c = 0; c < curWord.length; c++) {
		const curChar = curWord[c];

		if (!curNode[curChar]) {
			curNode[curChar] = {}; // 없으면 만들어 주고
		}
		curNode = curNode[curChar]; // 다음 노드로 옮겨줌!!
	}
	curNode["*"] = true;
};

const buildTrie = (arr) => {
	const dictionaryContainer = {};

	for (let i = 0; i < arr.length; i++) {
		let curWord = arr[i];
		traversing(dictionaryContainer, curWord);
	}

	console.log(JSON.stringify(dictionaryContainer));
};

buildTrie(wordDict);
