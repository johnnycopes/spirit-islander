import type { ExpansionName, ExpansionOption } from "@models/game/expansions";
import type { Option } from "@models/game/option";

/**
 * Get options that have specified names
 * @param options
 * Array of options
 * @param names 
 * Array of names used to filter returned options
 * @returns 
 * Array of options that have specified names
 */
export function getOptionsByName<TName extends string, TOption extends Option<TName>>(
	options: TOption[],
	names: TName[]
): TOption[] {
	const filteredOptions: TOption[] = [];

	for (const name of names) {
		const foundOption = options.find(option => option.name === name);
		if (foundOption) {
			filteredOptions.push(foundOption);
		}
	}

	return filteredOptions;
}

/**
 * Get options from base game and specified expansions
 * @param options 
 * Array of options that may be from an expansion
 * @param expansions 
 * Array of desired expansion names used to filter returned options
 * @returns 
 * Array of options from base game and specified expansions
 */
export function getOptionsByExpansion<TName extends string, TOption extends ExpansionOption<TName>>(
	options: TOption[],
	expansions: ExpansionName[]
): TOption[] {
	return options.filter(item => {
		if (item.expansion) {
			return expansions.includes(item.expansion);
		} else {
			return true;
		}
	});
}
