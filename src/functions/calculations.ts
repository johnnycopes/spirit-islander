import type { Difficulty } from "@models/game/difficulty";
import { ADVERSARIES, AdversaryName } from "@models/game/adversaries";
import { MAPS, MapName } from "@models/game/maps";
import { SCENARIOS, ScenarioName } from "@models/game/scenarios";

export function tallyMapDifficulty(model: MapName[] = []): Difficulty {
	return tallyDifficulty(
		model,
		MAPS,
		(map) => map.name,
		(map) => map.difficulty,
	);
}

export function tallyScenarioDifficulty(model: ScenarioName[] = []): Difficulty {
	return tallyDifficulty(
		model,
		SCENARIOS,
		(scenario) => scenario.name,
		(scenario) => scenario.difficulty,
	);
}

export function tallyAdversaryDifficulty(model: AdversaryName[] = []): Difficulty {
	return tallyDifficulty(
		model,
		ADVERSARIES,
		(adversary) => adversary.name,
		(adversary) => adversary.levels[adversary.levels.length - 1].difficulty,
	);
}

function tallyDifficulty<TName, TItem>(
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