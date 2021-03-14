import { ADVERSARIES } from "@data/adversaries";
import { MAPS } from "@data/maps";
import { SCENARIOS } from "@data/scenarios";
import { SPIRITS } from "@data/spirits";
import type { AdversaryLevelId, AdversaryName } from "@models/game/adversaries";
import type { IExpansionOption } from "@models/game/expansions";
import type { MapName } from "@models/game/maps";
import type { ScenarioName } from "@models/game/scenarios";
import type { SpiritName } from "@models/game/spirits";
import { filterExpansions } from "./filter-expansions";

export function createSpiritsModel(): SpiritName[] {
	return createModel(SPIRITS);
}

export function createMapsModel(): MapName[] {
	return createModel(MAPS);
}

export function createScenariosModel(): ScenarioName[] {
	return createModel(SCENARIOS);
}

export function createAdversariesModel(): (AdversaryName | AdversaryLevelId)[] {
	return filterExpansions(ADVERSARIES, []).reduce((adversaries, adversary) => {
		adversaries.push(adversary.name);
		adversary.levels.forEach(level => {
			adversaries.push(level.id);
		});
		return adversaries;
	}, [] as (AdversaryName | AdversaryLevelId)[])
}

interface INameOption<T> {
	name: T;
}

interface IOption<TName> extends INameOption<TName>, IExpansionOption { }

function createModel<TName>(options: IOption<TName>[]): TName[] {
	return filterExpansions(options, []).map(option => option.name);
}
