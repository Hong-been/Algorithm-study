let map = {
	a: 1,
	c: 2,
	b: 1,
};

map = Object.keys(map)
	.sort()
	.reduce((acc, key) => {
		acc[key] = map[key];
		return acc;
	}, {});
