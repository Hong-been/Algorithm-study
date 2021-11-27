const wordDict = [
	"samsung_earbuds",
	"santa",
	"samsung_tablet",
	"santa_suit",
	"samsung_ssd",
	"salad",
	"safe",
	"samsung",
	"samsung_watch",
];

// time = O(N * M), M is the longest length of the word
// search time = O(M);
// let targetStr = "samsung";

// for (let i = 0; i < wordDict.length; i++) {
//   if (wordDict[i] === targetStr) return true; // O(M);
// }

const traversing = (root, curWord) => {
	let curNode = root; // 이유 설명!!

	for (let c = 0; c < curWord.length; c++) {
		const curChar = curWord[c];

		if (!curNode[curChar]) {
			curNode[curChar] = {}; // 없으면 만들어 주고
		}
		curNode = curNode[curChar]; // 다음 노드로 옮겨줌!!
	}
	curNode["*"] = curWord;
};

const buildTrie = (arr) => {
	const dictionaryContainer = {};

	for (let i = 0; i < arr.length; i++) {
		let curWord = arr[i];
		traversing(dictionaryContainer, curWord);
	}

	return dictionaryContainer;
};

const SamsungDictionary = buildTrie(wordDict);
// console.log(JSON.stringify(SamsungDictionary));
const input = document.querySelector(".type");

input.addEventListener("keyup", (event) => {
	if (event.target) {
		searchDictionary(SamsungDictionary, event.target.value);
	}
});

function searchDictionary(dictionary, value) {
	console.log(findWords(dictionary, value));
}
/*{


  s: {
    a: {
      m: { <-- curNode
        s: {

        },
        t: {
          
        }
      }
    }
  }


}*/
function findWords(root, curWord) {
	let curNode = root;

	for (let c = 0; c < curWord.length; c++) {
		const curChar = curWord[c];
		if (!curNode[curChar]) return [];
		curNode = curNode[curChar]; // 다음 노드로 옮겨줌!!
	}

	// DFS
	const resultWords = [];
	DFS(curNode, resultWords);
	console.log(resultWords);
}
function DFS(curNode, resultWords) {
	for (let [key, val] of Object.entries(curNode)) {
		if (key === "*") {
			resultWords.push(val);
		}
		if (typeof val === "object") {
			DFS(curNode[key], resultWords);
		}
	}
}
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
