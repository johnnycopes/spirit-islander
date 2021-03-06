import type { AdversaryName, AdversaryLevelId } from "@models/game/adversaries";
import { ADVERSARIES } from "@data/adversaries";

const adversaryLevelIdDict = ADVERSARIES.reduce((accum, adversary) => {
	adversary.levels.forEach(level => accum[level.id] = adversary.name);
	return accum;
}, { none: "No Adversary" } as Record<AdversaryLevelId, AdversaryName>);

export function getAdversaryById(id: AdversaryLevelId): AdversaryName {
	return adversaryLevelIdDict[id];
}