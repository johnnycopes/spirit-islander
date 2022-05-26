import type { DifficultyOption } from "@models/game/difficulty";
import type { Config } from "@models/config.interface";
import type { AdversaryLevel, AdversaryLevelName } from "@models/game/adversaries";
import type { Map, MapName } from "@models/game/maps";
import type { Scenario, ScenarioName } from "@models/game/scenarios";
import { ADVERSARIES } from "@data/adversaries";
import { MAPS } from "@data/maps";
import { SCENARIOS } from "@data/scenarios";
import { getDifficulty } from "./get-difficulty";
import { ComboAnalyzer } from "./utility/combo-analyzer";

const comboAnalyzer = new ComboAnalyzer<DifficultyOption<MapName | AdversaryLevelName | ScenarioName>>();

export function getValidCombos(config: Config): [Map, AdversaryLevel, Scenario][] {
	const { mapNames, scenarioNames, adversaryNamesAndIds } = config;
	const maps = MAPS.filter(map => mapNames.includes(map.name));
	const scenarios = SCENARIOS.filter(scenario => scenarioNames.includes(scenario.name));
	const adversaries: AdversaryLevel[] = [];

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
		options => {
			const [min, max] = config.difficultyRange;
			const difficulty = options.reduce((accum, option) =>
				accum + getDifficulty(option.difficulty, config.expansions),
			0);
			return difficulty >= min && difficulty <= max;
		}
	);
}
