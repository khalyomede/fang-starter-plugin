import { expect } from "chai";
import yourLib from "../lib";
import { run } from "@fang/core";

describe("yourLib", () => {
	it("should export a function", () =>
		expect(yourLib).to.be.instanceOf(Function));

	it("should return an array", async () => {
		const task = yourLib({});
		const result = await task([]);

		expect(result).to.be.instanceOf(Array);
	});

	it("should not produce any errors", () => {
		const exampleTask = {
			inputFilePath: "src/index.ts",
			name: "example task",
			tasks: [yourLib({})],
		};

		expect(async function() {
			await run([exampleTask]);
		}).to.not.throw();
	});
});
