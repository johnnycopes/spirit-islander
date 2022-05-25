/**
 * A class containing a single method used for determining possible combinations of multiple sets of options
 * @param getPossibleCombos Recursively loops through arrays of options to produce all valid combinations
 * @returns An array of every possible valid combination (a combination is an array comprised of one value taken from each array of options)
 */
export class ComboAnalyzer<T> {
	public getPossibleCombos<
		T1 extends T,
		T2 extends T,
		T3 extends T,
		T4 extends T,
		T5 extends T,
		T6 extends T,
		T7 extends T,
		T8 extends T,
		T9 extends T,
		T10 extends T,
	>(
		allOptions: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[], T10[]],
		isValidCombo?: (options: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]) => boolean,
	): [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10][];
	public getPossibleCombos<
		T1 extends T,
		T2 extends T,
		T3 extends T,
		T4 extends T,
		T5 extends T,
		T6 extends T,
		T7 extends T,
		T8 extends T,
		T9 extends T,
	>(
		allOptions: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[]],
		isValidCombo?: (options: [T1, T2, T3, T4, T5, T6, T7, T8, T9]) => boolean,
	): [T1, T2, T3, T4, T5, T6, T7, T8, T9][];
	public getPossibleCombos<
		T1 extends T,
		T2 extends T,
		T3 extends T,
		T4 extends T,
		T5 extends T,
		T6 extends T,
		T7 extends T,
		T8 extends T,
	>(
		allOptions: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[]],
		isValidCombo?: (options: [T1, T2, T3, T4, T5, T6, T7, T8]) => boolean,
	): [T1, T2, T3, T4, T5, T6, T7, T8][];
	public getPossibleCombos<
		T1 extends T,
		T2 extends T,
		T3 extends T,
		T4 extends T,
		T5 extends T,
		T6 extends T,
		T7 extends T,
	>(
		allOptions: [T1[], T2[], T3[], T4[], T5[], T6[], T7[]],
		isValidCombo?: (options: [T1, T2, T3, T4, T5, T6, T7]) => boolean,
	): [T1, T2, T3, T4, T5, T6, T7][];
	public getPossibleCombos<
		T1 extends T,
		T2 extends T,
		T3 extends T,
		T4 extends T,
		T5 extends T,
		T6 extends T,
	>(
		allOptions: [T1[], T2[], T3[], T4[], T5[], T6[]],
		isValidCombo?: (options: [T1, T2, T3, T4, T5, T6]) => boolean,
	): [T1, T2, T3, T4, T5, T6][];
	public getPossibleCombos<
		T1 extends T,
		T2 extends T,
		T3 extends T,
		T4 extends T,
		T5 extends T,
	>(
		allOptions: [T1[], T2[], T3[], T4[], T5[]],
		isValidCombo?: (options: [T1, T2, T3, T4, T5]) => boolean,
	): [T1, T2, T3, T4, T5][];
	public getPossibleCombos<
		T1 extends T,
		T2 extends T,
		T3 extends T,
		T4 extends T,
	>(
		allOptions: [T1[], T2[], T3[], T4[]],
		isValidCombo?: (options: [T1, T2, T3, T4]) => boolean,
	): [T1, T2, T3, T4][];
	public getPossibleCombos<
		T1 extends T,
		T2 extends T,
		T3 extends T,
	>(
		allOptions: [T1[],T2[],T3[]],
		isValidCombo?: (options: [T1, T2, T3]) => boolean,
	): [T1, T2, T3][];
	public getPossibleCombos<T1 extends T, T2 extends T>(
		allOptions: [T1[], T2[]],
		isValidCombo?: (options: [T1, T2]) => boolean,
	): [T1, T2][];
	public getPossibleCombos<T1 extends T>(
		allOptions: [T1[]],
		isValidCombo?: (
		options: [T1]) => boolean,
	): [T1][];
	public getPossibleCombos(
		allOptions: T[][],
		isValidCombo?: (options: T[]) => boolean,
	): T[][];
	public getPossibleCombos(
		allOptions: T[][],
		isValidCombo?: unknown,
	): T[][] {
		return this._getPossibleCombos(allOptions, isValidCombo as (options: T[]) => boolean);
	}

	private _getPossibleCombos(
		allOptionsLibrary: T[][],
		isValidCombo: (options: T[]) => boolean = () => true,
		possibleCombos: T[][] = [],
		allOptionsIndex = 0,
		currentCombo: T[] = [],
	): T[][] {
		// Check if combo is complete
		if (allOptionsIndex === allOptionsLibrary.length) {
			// Check if valid combo
			if (isValidCombo(currentCombo)) {
				// Add combo
				possibleCombos.push([...currentCombo]);
			}
		} else {
			const options = allOptionsLibrary[allOptionsIndex];

			options.forEach(option => {
				currentCombo[allOptionsIndex] = option;
				this._getPossibleCombos(
					allOptionsLibrary,
					isValidCombo,
					possibleCombos,
					allOptionsIndex + 1,
					currentCombo
				);
			});
		}

		return possibleCombos;
	}
}
