const a = [3, 1, 2];
a.sort((a, b) => a - b);

const v = [...a];

// n개중에 r개를 뽑을건데, 총 깊이는 depth만큼이다.
// n이랑 r이랑 같을때에는 그냥 끝까지 돌면 되니까 이건 알겠음.
// 근데 왜 중간에서 r까지 하고 멈춘게 어떻게 nPr이 되는지 모르겠음...
const makePermutation = (n, r, depth, ans) => {
	if (r === depth) {
		ans.push([...v]);
		return ans;
	}

	for (let i = depth; i < n; i++) {
		[v[i], v[depth]] = [v[depth], v[i]];
		makePermutation(n, r, depth + 1, ans);
		[v[i], v[depth]] = [v[depth], v[i]];
	}
	return ans;
};

const main = () => {
	const ans = makePermutation(3, 2, 0, []);
	console.log(ans);
};

main();
