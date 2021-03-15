import type { ExpansionName, IExpansionOption } from "@models/game/expansions";

/**
 * Get options from base game and specified expansions
 * @param options
 * Array of options that may be from an expansion
 * @param expansions
 * Array of desired expansion names
 * @returns
 * Array of options from base game and specified expansions
 */
export function getOptions<T extends IExpansionOption>(
	options: T[],
	expansions: ExpansionName[]
): T[] {
	return options.filter(item => {
		if (item.expansion) {
			return expansions.includes(item.expansion);
		} else {
			return true;
		}
	});
}