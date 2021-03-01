import type { Difficulty } from "@models/game/difficulty";

export function tallyDifficulty<TName, TItem>(
	model: TName[],
	items: TItem[],
	getName: (item: TItem) => TName,
	getDifficulty: (item: TItem) => Difficulty
): Difficulty {
	return model.reduce((accum, current) => {
		const foundItem = items.find(item => getName(item) === current);
		if (foundItem) {
			return Math.max(accum, getDifficulty(foundItem)) as Difficulty;
		}
		return accum;
	}, 0 as Difficulty);
}