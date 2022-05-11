import { getItemsRecursively } from "./get-items-recursively";

interface TestItem {
	name: string;
	children?: TestItem[];
}

describe("getItemsRecursively", () => {
	let getChildren: (item: TestItem) => TestItem[];

	beforeEach(() => {
		getChildren = item => item?.children ?? [];
	});

	it("returns an array of only the item when it has no children", () => {
		expect(getItemsRecursively<TestItem>({ name: "Item 1" }, getChildren)).toStrictEqual([{ name: "Item 1" }]);
		expect(getItemsRecursively<TestItem>({ name: "Item 2", children: [] }, getChildren)).toStrictEqual([{ name: "Item 2", children: [] }]);
	});

	it("returns an array of all nested items", () => {
		const item: TestItem = {
			name: "Item 1",
			children: [
				{ name: "Item 1A" },
				{ name: "Item 1B" },
				{ name: "Item 1C", children: [
					{ name: "Item 1C.1" }
				]},
			],
		};
		expect(getItemsRecursively(item, getChildren)).toStrictEqual([
			{
				name: "Item 1",
				children: [
					{ name: "Item 1A" },
					{ name: "Item 1B" },
					{ name: "Item 1C", children: [
						{ name: "Item 1C.1" }
					]},
				],
			},
			{ name: "Item 1A" },
			{ name: "Item 1B" },
			{ name: "Item 1C", children: [
				{ name: "Item 1C.1" }
			]},
			{ name: "Item 1C.1" },
		]);
	});
});