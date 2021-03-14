import type { ExpansionName, IExpansionOption } from "@models/game/expansions";

/**
 * Get items from base game and specified expansions
 * @param items
 * Array of items that may be from an expansion
 * @param expansions
 * Array of desired expansion names
 * @returns
 * Array of items from base game and specified expansions
 */
export function getItems<T extends IExpansionOption>(
	items: T[],
	expansions: ExpansionName[]
): T[] {
	return items.filter(item => {
		if (item.expansion) {
			return expansions.includes(item.expansion);
		} else {
			return true;
		}
	});
}