import type { Difficulty } from "@models/game/difficulty";
import { ADVERSARIES, AdversaryLevelId } from "@models/game/adversaries";
import { MAPS, MapName } from "@models/game/maps";
import { SCENARIOS, ScenarioName } from "@models/game/scenarios";
import { cleanArray } from "@functions/clean-array";

export function getDifficultyError(
	target: Difficulty,
	maps: MapName[],
	adversaries: AdversaryLevelId[],
	scenarios: ScenarioName[]
): boolean {
	if (target === 0) {
		return false;
	}

	const mapsDifficulties = MAPS
		.filter(map => maps.includes(map.name))
		.map(map => map.difficulty);

	const scenariosDifficulties = SCENARIOS
		.filter(scenario => scenarios.includes(scenario.name))
		.map(scenario => scenario.difficulty);

	let adversariesDifficulties: Difficulty[] = [];
	ADVERSARIES.forEach(adversary => {
		const adversaryDifficulties = adversary.levels
			.filter(level => adversaries.includes(level.id))
			.map(level => level.difficulty);
		adversariesDifficulties.push(...adversaryDifficulties);
	});
	adversariesDifficulties = cleanArray(adversariesDifficulties).sort();

	if (
		mapsDifficulties.includes(target) ||
		scenariosDifficulties.includes(target) ||
		adversariesDifficulties.includes(target)
	) {
		return false;
	}

	return true;
}
