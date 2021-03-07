import type { ExpansionName, IExpansionOption } from "@models/game/expansions";

export function filterExpansions<T extends IExpansionOption>(
	options: T[],
	expansions: ExpansionName[]
): T[] {
	return options.filter(option => {
		if (option.expansion) {
			return expansions.includes(option.expansion);
		} else {
			return option;
		}
	});
}