import type { IDifficultyOption } from "@models/game/difficulty";
import type { IGameConfig } from "@models/game/game-config";
import { ADVERSARIES, AdversaryName, AdversaryLevelId, IAdversaryLevel } from "@models/game/adversaries";
import { MAPS, MapName } from "@models/game/maps";
import { SCENARIOS, ScenarioName } from "@models/game/scenarios";
import { getPossibleCombos } from "./get-possible-combos";

export function getValidCombos(
	gameConfig: IGameConfig,
	mapsModel: MapName[],
	adversariesModel: (AdversaryName | AdversaryLevelId)[],
	scenariosModel: ScenarioName[]
): IDifficultyOption[][] {
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

	return getPossibleCombos(
		[maps, adversaries, scenarios],
		options => options.reduce((difficulty, option) =>
			difficulty + (typeof option.difficulty === "function" ? option.difficulty(gameConfig) : option.difficulty),
		0) === gameConfig.difficulty
	);
}
