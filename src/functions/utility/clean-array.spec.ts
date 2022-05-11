import { cleanArray } from "./clean-array";

describe("cleanArray", () => {
  it("does not affect empty arrays", () => {
    expect(cleanArray([])).toStrictEqual([]);
    expect(cleanArray([], [])).toStrictEqual([]);
  });

  it("maintains existing order when no duplicates present", () => {
    expect(cleanArray([1, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(cleanArray([1, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(cleanArray([1, 2, 4], [3, 5, 6])).toStrictEqual([1, 2, 4, 3, 5, 6]);
  });

  it("rids arrays of duplicate values", () => {
    expect(cleanArray([1, 1, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(cleanArray([1, 1, 2, 3], [2, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
