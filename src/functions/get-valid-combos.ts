import type { IDifficultyOption } from "@models/game/difficulty";
import type { IConfig } from "@models/config.interface";
import { ADVERSARIES, IAdversaryLevel } from "@models/game/adversaries";
import { MAPS, IMap } from "@models/game/maps";
import { SCENARIOS, IScenario } from "@models/game/scenarios";
import { getDifficulty } from "./get-difficulty";
import { ComboAnalyzer } from "./utility/combo-analyzer";

const comboAnalyzer = new ComboAnalyzer<IDifficultyOption>();

export function getValidCombos(config: IConfig): [IMap, IAdversaryLevel, IScenario][] {
	const mapsModel = config.maps;
	const scenariosModel = config.scenarios;
	const adversariesModel = config.adversaries;
	const maps = MAPS.filter(map => mapsModel.includes(map.name));
	const scenarios = SCENARIOS.filter(scenario => scenariosModel.includes(scenario.name));
	const adversaries: IAdversaryLevel[] = [];

	if (adversariesModel.includes("No Adversary")) {
		adversaries.push({ id: "none", level: 0, difficulty: 0 });
	}
	ADVERSARIES.forEach(adversary => {
		const adversaryDifficulties = adversary.levels
			.filter(level => adversariesModel.includes(level.id))
		adversaries.push(...adversaryDifficulties);
	});

	return comboAnalyzer.getPossibleCombos(
		[maps, adversaries, scenarios],
		options => options.reduce((difficulty, option) =>
			difficulty + getDifficulty(option.difficulty, config),
		0) === config.difficulty
	);
}
