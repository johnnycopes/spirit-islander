import type { IDifficultyOption } from "@models/game/difficulty";

/**
 * Recursively loops through arrays of options to produce all valid combinations
 * @param allOptionsLibrary Options to include (e.g. maps, scenarios, adversaries)
 * @param isValidCombo Callback function that determines if a given combination is valid. Invalid combinations will be excluded from the final output of possible combinations.
 * @param possibleCombos Internally used parameter when function calls itself to manage the array of the possible combinations
 * @param allOptionsIndex Internally used parameter when function calls itself to manage which array of options is being iterated through
 * @param currentCombo Internally used parameter when function calls itself to manage the array of the current possible combination
 * @returns An array of every possible valid combination (a combination is an array comprised of one value taken from each array of options)
 */
export function getPossibleCombos(
	allOptionsLibrary: IDifficultyOption[][],
	isValidCombo: (options: IDifficultyOption[]) => boolean = () => true,
	possibleCombos: IDifficultyOption[][] = [],
	allOptionsIndex: number = 0,
	currentCombo: IDifficultyOption[] = []
): IDifficultyOption[][] {
	if (allOptionsIndex === allOptionsLibrary.length) {
		if (isValidCombo(currentCombo)) {
			possibleCombos.push([...currentCombo]);
		}
	} else {
		const options = allOptionsLibrary[allOptionsIndex];
		options.forEach(option => {
			currentCombo[allOptionsIndex] = option;
			getPossibleCombos(allOptionsLibrary, isValidCombo, possibleCombos, allOptionsIndex + 1, currentCombo);
		});
	}
	return possibleCombos;
}
