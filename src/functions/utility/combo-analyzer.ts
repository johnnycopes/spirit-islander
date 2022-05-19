/**
 * A class containing a single method used for determining possible combinations of multiple sets of options
 * @param getPossibleCombos Recursively loops through arrays of options to produce all valid combinations
 * @returns An array of every possible valid combination (a combination is an array comprised of one value taken from each array of options)
 */
export class ComboAnalyzer<TOption> {
	public getPossibleCombos<
		TOption1 extends TOption,
		TOption2 extends TOption,
		TOption3 extends TOption,
		TOption4 extends TOption,
		TOption5 extends TOption,
		TOption6 extends TOption,
		TOption7 extends TOption,
		TOption8 extends TOption,
		TOption9 extends TOption,
		TOption10 extends TOption,
		>(
			allOptions: [
				TOption1[],
				TOption2[],
				TOption3[],
				TOption4[],
				TOption5[],
				TOption6[],
				TOption7[],
				TOption8[],
				TOption9[],
				TOption10[],
			],
			isValidCombo?: (
				options: [
					TOption1,
					TOption2,
					TOption3,
					TOption4,
					TOption5,
					TOption6,
					TOption7,
					TOption8,
					TOption9,
					TOption10,
				],
			) => boolean,
	): [
		TOption1,
		TOption2,
		TOption3,
		TOption4,
		TOption5,
		TOption6,
		TOption7,
		TOption8,
		TOption9,
		TOption10,
	][];
	public getPossibleCombos<
		TOption1 extends TOption,
		TOption2 extends TOption,
		TOption3 extends TOption,
		TOption4 extends TOption,
		TOption5 extends TOption,
		TOption6 extends TOption,
		TOption7 extends TOption,
		TOption8 extends TOption,
		TOption9 extends TOption,
		>(
			allOptions: [
				TOption1[],
				TOption2[],
				TOption3[],
				TOption4[],
				TOption5[],
				TOption6[],
				TOption7[],
				TOption8[],
				TOption9[],
			],
			isValidCombo?: (
				options: [
					TOption1,
					TOption2,
					TOption3,
					TOption4,
					TOption5,
					TOption6,
					TOption7,
					TOption8,
					TOption9,
				],
			) => boolean,
	): [
		TOption1,
		TOption2,
		TOption3,
		TOption4,
		TOption5,
		TOption6,
		TOption7,
		TOption8,
		TOption9,
	][];
	public getPossibleCombos<
		TOption1 extends TOption,
		TOption2 extends TOption,
		TOption3 extends TOption,
		TOption4 extends TOption,
		TOption5 extends TOption,
		TOption6 extends TOption,
		TOption7 extends TOption,
		TOption8 extends TOption,
		>(
			allOptions: [
				TOption1[],
				TOption2[],
				TOption3[],
				TOption4[],
				TOption5[],
				TOption6[],
				TOption7[],
				TOption8[],
			],
			isValidCombo?: (
				options: [
					TOption1,
					TOption2,
					TOption3,
					TOption4,
					TOption5,
					TOption6,
					TOption7,
					TOption8,
				],
			) => boolean,
	): [
		TOption1,
		TOption2,
		TOption3,
		TOption4,
		TOption5,
		TOption6,
		TOption7,
		TOption8,
	][];
	public getPossibleCombos<
		TOption1 extends TOption,
		TOption2 extends TOption,
		TOption3 extends TOption,
		TOption4 extends TOption,
		TOption5 extends TOption,
		TOption6 extends TOption,
		TOption7 extends TOption,
		>(
			allOptions: [
				TOption1[],
				TOption2[],
				TOption3[],
				TOption4[],
				TOption5[],
				TOption6[],
				TOption7[],
			],
			isValidCombo?: (
				options: [
					TOption1,
					TOption2,
					TOption3,
					TOption4,
					TOption5,
					TOption6,
					TOption7,
				],
			) => boolean,
	): [
		TOption1,
		TOption2,
		TOption3,
		TOption4,
		TOption5,
		TOption6,
		TOption7,
	][];
	public getPossibleCombos<
		TOption1 extends TOption,
		TOption2 extends TOption,
		TOption3 extends TOption,
		TOption4 extends TOption,
		TOption5 extends TOption,
		TOption6 extends TOption,
		>(
			allOptions: [
				TOption1[],
				TOption2[],
				TOption3[],
				TOption4[],
				TOption5[],
				TOption6[],
			],
			isValidCombo?: (
				options: [
					TOption1,
					TOption2,
					TOption3,
					TOption4,
					TOption5,
					TOption6,
				],
			) => boolean,
	): [
		TOption1,
		TOption2,
		TOption3,
		TOption4,
		TOption5,
		TOption6,
	][];
	public getPossibleCombos<
		TOption1 extends TOption,
		TOption2 extends TOption,
		TOption3 extends TOption,
		TOption4 extends TOption,
		TOption5 extends TOption,
		>(
			allOptions: [
				TOption1[],
				TOption2[],
				TOption3[],
				TOption4[],
				TOption5[],
			],
			isValidCombo?: (
				options: [
					TOption1,
					TOption2,
					TOption3,
					TOption4,
					TOption5,
				],
			) => boolean,
	): [
		TOption1,
		TOption2,
		TOption3,
		TOption4,
		TOption5,
	][];
	public getPossibleCombos<
		TOption1 extends TOption,
		TOption2 extends TOption,
		TOption3 extends TOption,
		TOption4 extends TOption,
		>(
			allOptions: [
				TOption1[],
				TOption2[],
				TOption3[],
				TOption4[],
			],
			isValidCombo?: (
				options: [
					TOption1,
					TOption2,
					TOption3,
					TOption4,
				],
			) => boolean,
	): [
		TOption1,
		TOption2,
		TOption3,
		TOption4,
	][];
	public getPossibleCombos<
		TOption1 extends TOption,
		TOption2 extends TOption,
		TOption3 extends TOption,
		>(
			allOptions: [
				TOption1[],
				TOption2[],
				TOption3[],
			],
			isValidCombo?: (
				options: [
					TOption1,
					TOption2,
					TOption3,
				],
			) => boolean,
	): [
		TOption1,
		TOption2,
		TOption3,
	][];
	public getPossibleCombos<
		TOption1 extends TOption,
		TOption2 extends TOption,
		>(
			allOptions: [
				TOption1[],
				TOption2[],
			],
			isValidCombo?: (
				options: [
					TOption1,
					TOption2,
				],
			) => boolean,
	): [
		TOption1,
		TOption2,
	][];
	public getPossibleCombos<
		TOption1 extends TOption,
		>(
			allOptions: [
				TOption1[],
			],
			isValidCombo?: (
				options: [
					TOption1,
				],
			) => boolean,
	): [
		TOption1,
	][];
	public getPossibleCombos(
		allOptions: TOption[][],
		isValidCombo?: (options: TOption[]) => boolean,
	): TOption[][];
	public getPossibleCombos(
		allOptions: TOption[][],
		isValidCombo?: unknown,
	): TOption[][] {
		// Return possible combos
		return this._getPossibleCombos(allOptions, isValidCombo as (options: TOption[]) => boolean);
	}

	private _getPossibleCombos(
		allOptionsLibrary: TOption[][],
		isValidCombo: (options: TOption[]) => boolean = () => true,
		possibleCombos: TOption[][] = [],
		allOptionsIndex = 0,
		currentCombo: TOption[] = [],
	): TOption[][] {
		// Check if combo is complete
		if (allOptionsIndex === allOptionsLibrary.length) {
			// Check if valid combo
			if (isValidCombo(currentCombo)) {
				// Add combo
				possibleCombos.push([...currentCombo]);
			}
		} else {
			// Get options
			const options = allOptionsLibrary[allOptionsIndex];
			// Run through options
			options.forEach(option => {
				// Set option in current combo
				currentCombo[allOptionsIndex] = option;
				// Add possible combos for next index
				this._getPossibleCombos(
					allOptionsLibrary,
					isValidCombo,
					possibleCombos,
					allOptionsIndex + 1,
					currentCombo
				);
			});
		}
		// Return possible combos
		return possibleCombos;
	}
}
