import type { Difficulty } from "@models/game/difficulty";
import { ADVERSARIES, AdversaryName, AdversaryLevelId } from "@models/game/adversaries";
import { MAPS, MapName } from "@models/game/maps";
import { SCENARIOS, ScenarioName } from "@models/game/scenarios";
import { cleanArray } from "@functions/clean-array";

export function getDifficultyError(
	target: Difficulty,
	maps: MapName[],
	adversaries: (AdversaryName | AdversaryLevelId)[],
	scenarios: ScenarioName[]
): boolean {
	if (target === 0) {
		return false;
	}

	const mapsDifficulties = MAPS
		.filter(map => maps.includes(map.name))
		.map(map => map.difficulty);

	const scenariosDifficulties = SCENARIOS
		.filter(scenario => scenarios.includes(scenario.name) && scenario.difficulty > 0)
		.map(scenario => scenario.difficulty);

	let adversariesDifficulties: Difficulty[] = [];
	ADVERSARIES.forEach(adversary => {
		const adversaryDifficulties = adversary.levels
			.filter(level => adversaries.includes(level.id))
			.map(level => level.difficulty);
		adversariesDifficulties.push(...adversaryDifficulties);
	});
	adversariesDifficulties = cleanArray(adversariesDifficulties).sort();

	if (mapsDifficulties.includes(target) ||
		scenariosDifficulties.includes(target) ||
		adversariesDifficulties.includes(target)) {
		return false;
	}

	console.log("maps", mapsDifficulties);
	console.log("scenarios", scenariosDifficulties);
	console.log("adversaries", adversariesDifficulties);

	// if (scenariosDifficulties.length) {
	// 	for (let i = 0; i < scenariosDifficulties.length; i++) {
	// 		const scenario = scenariosDifficulties[i];
	// 		for (let j = 0; j < adversariesDifficulties.length; j++) {
	// 			const adversary = adversariesDifficulties[j];
	// 			if ( scenario + adversary === target ||
	// 				scenario + adversary + map === target) {

	// 				}
	// 		}
	// 	}
	// }
	// } else if (adversariesDifficulties.length) {

	// }
	// for (let i = 0; i < scenariosDifficulties.length; i++) {
	// 	const map = mapsDifficulties[i];
	// 	for (let j = 0; j < scenariosDifficulties.length; j++) {
	// 		const adversary = adversariesDifficulties[j];
	// 		for (let k = 0; k < )
	// 		if (map + adversary === target) {
	// 			return false;
	// 		}
	// 	}
	// }

	return true;
}
