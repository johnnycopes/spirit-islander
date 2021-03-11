import type { IDifficultyOption } from "@models/game/difficulty";
import type { ISelection } from "@models/selection.interface";
import { ADVERSARIES, AdversaryName, AdversaryLevelId, IAdversaryLevel } from "@models/game/adversaries";
import { MAPS, MapName, IMap } from "@models/game/maps";
import { SCENARIOS, IScenario, ScenarioName } from "@models/game/scenarios";
import { getDifficulty } from "./get-difficulty";
import { ComboAnalyzer } from "./utility/combo-analyzer";

const comboAnalyzer = new ComboAnalyzer<IDifficultyOption>();

export function getValidCombos(selection: ISelection): [IMap, IAdversaryLevel, IScenario][] {
	const mapsModel = selection.maps;
	const scenariosModel = selection.scenarios;
	const adversariesModel = selection.adversaries;
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
			difficulty + getDifficulty(option.difficulty, selection),
		0) === selection.difficulty
	);
}
