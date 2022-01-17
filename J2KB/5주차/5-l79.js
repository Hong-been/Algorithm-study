/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}

< back tracking >
for loop board[0][0]부터 [m][n]까지 본다.
    dfs로 들어간다.
    
dfs (현재 word, board의 row, board의 col): 
    row,col이 범위를 벗어났다면 return false;
    word와 [row][col]글자가 일치하지 않으면 return false;
    
    현재 블럭을 visited 처리한다.
    글자가 끝났다면, return true;
    
    윗 칸으로 dfs(다음글자, row, col)
    아래칸으로 dfs(다음글자, row, col)
    오른칸으로 dfs(다음글자, row, col)
    왼 칸으로 dfs(다음글자, row, col)
    
    상하좌우에서 모두 원하는 글자가 아니라면 못찾은거. 
    현재블럭을 visited처리 취소하고 return false;
    
    하나라도 true로 나오면 찾은거!! return true;
 */

// M=board.length, N=board[0].length, L=word.length

// time: O(MN * min(3^L, MN)) <- visited처리해주고 온 곳은 절대 보지않는다! 그러니까 4가 아니라 3.
// space : call stack사용으로 인한 O(L)

var exist = function (board, word) {
	// if(board.length * board[0].length < word.length) return false; -> 이거 넣어주면 time: O(MN * 3^L) !!

	const m = board.length;
	const n = board[0].length;
	let w = 0;

	const dfs = (w, i, j) => {
		if (i < 0 || j < 0 || i >= m || j >= n || word[w] !== board[i][j])
			return false;

		let cur = board[i][j];
		board[i][j] = 0;

		if (w === word.length - 1) return true;

		//위 아래 오른쪽 왼쪽
		const result =
			dfs(w + 1, i - 1, j) ||
			dfs(w + 1, i + 1, j) ||
			dfs(w + 1, i, j + 1) ||
			dfs(w + 1, i, j - 1);

		board[i][j] = cur;
		return result;
	};

	for (let i = 0; i < m; i++) {
		// O(M)
		for (let j = 0; j < n; j++) {
			// O(N)
			if (dfs(w, i, j)) return true;
		}
	}
	return false;
};

// Runtime: 352 ms, faster than 69.32% of JavaScript online submissions for Word Search.
// Memory Usage: 39.4 MB, less than 67.75% of JavaScript online submissions for Word Search.
