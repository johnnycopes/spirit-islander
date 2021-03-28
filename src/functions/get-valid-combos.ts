import type { IDifficultyOption } from "@models/game/difficulty";
import type { IConfig } from "@models/config.interface";
import type { IAdversaryLevel } from "@models/game/adversaries";
import type { IMap } from "@models/game/maps";
import type { IScenario } from "@models/game/scenarios";
import { ADVERSARIES } from "@data/adversaries";
import { MAPS } from "@data/maps";
import { SCENARIOS } from "@data/scenarios";
import { getDifficulty } from "./get-difficulty";
import { ComboAnalyzer } from "./utility/combo-analyzer";

const comboAnalyzer = new ComboAnalyzer<IDifficultyOption>();

export function getValidCombos(config: IConfig): [IMap, IAdversaryLevel, IScenario][] {
	const { mapNames, scenarioNames, adversaryNamesAndIds } = config;
	const maps = MAPS.filter(map => mapNames.includes(map.name));
	const scenarios = SCENARIOS.filter(scenario => scenarioNames.includes(scenario.name));
	const adversaries: IAdversaryLevel[] = [];

	if (adversaryNamesAndIds.includes("No Adversary")) {
		adversaries.push({ id: "none", name: "N/A", difficulty: 0 });
	}
	ADVERSARIES.forEach(adversary => {
		const adversaryLevels = adversary.levels
			.filter(level => adversaryNamesAndIds.includes(level.id))
		adversaries.push(...adversaryLevels);
	});

	return comboAnalyzer.getPossibleCombos(
		[maps, adversaries, scenarios],
		options => options.reduce((difficulty, option) =>
			difficulty + getDifficulty(option.difficulty, config.expansions),
		0) === config.difficulty
	);
}
