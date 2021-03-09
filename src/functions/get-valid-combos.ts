import type { IDifficultyOption } from "@models/game/difficulty";
import type { IGameConfig } from "@models/game/game-config";
import { ADVERSARIES, AdversaryName, AdversaryLevelId, IAdversaryLevel } from "@models/game/adversaries";
import { MAPS, MapName, IMap } from "@models/game/maps";
import { SCENARIOS, IScenario, ScenarioName } from "@models/game/scenarios";
import { getDifficulty } from "./get-difficulty";
import { ComboAnalyzer } from "./combo-analyzer";

const comboAnalyzer = new ComboAnalyzer<IDifficultyOption>();

export function getValidCombos(
	gameConfig: IGameConfig,
	mapsModel: MapName[],
	adversariesModel: (AdversaryName | AdversaryLevelId)[],
	scenariosModel: ScenarioName[]
): [IMap, IAdversaryLevel, IScenario][] {
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

	return comboAnalyzer.getPossibleCombos<IMap, IAdversaryLevel, IScenario>(
		[maps, adversaries, scenarios],
		options => options.reduce((difficulty, option) =>
			difficulty + getDifficulty(option.difficulty, gameConfig),
		0) === gameConfig.difficulty
	);
}
