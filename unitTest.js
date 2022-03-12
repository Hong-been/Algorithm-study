export class UnitTest {
	test(solution, input, expected) {
		const returned = solution(...input);
		console.log(...input, expected);
		console.log(returned);

		if (typeof expected === Number) return expected === returned;

		if (Array.isArray(expected)) {
			if (expected.length !== returned.length) return false;
			for (let i = 0; i < expected.length; i++) {
				if (expected[i] !== returned[i]) return false;
			}
			return true;
		}
	}

	/*solution fn, argus */
	testSolution(solution, argus) {
		let passCount = 0;
		for (let argu of argus) {
			if (!this.test(solution, argu.input, argu.expected)) {
				console.log("Test Failed");
				continue;
			}
			passCount++;
			console.log("Test Passed");
		}

		console.log(passCount, "/", argus.length);
	}
}
