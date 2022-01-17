/**
 * @param {string} path
 * @return {string}
 
 /foo/../test/../test/../foo//bar/./baz
 
 [foo .. test .. test .. foo '' bar . baz]
 
 [foo bar baz]
 
 /로 시작 -> 나중에 정답맨앞에 /붙임
 ./로 시작 -> no
..이면 st.pop(empty가 아니라면)
"" . 이면 continue

/../
[..]
[/]

"/home//foo/"
[home '' foo]
 
N = path.length
 time O(3N)
 space O(2N)
 */
var simplifyPath = function (path) {
	const splitted = path.split("/"); // time O(N), space O(N)
	const ans = []; // space O(N)

	// time O(N)
	splitted.forEach((c) => {
		if (c === "." || c === "") return;
		if (c === "..") ans.pop();
		else ans.push(c);
	});

	// time O(N)
	if (path[0] === "/") return "/" + ans.join("/");
	return ans.join("/");
};

// console.log(simplifyPath("./foo/../test/../test/../foo//bar/./baz/"));
console.log(simplifyPath("/a//b////c/d//././/.."));
