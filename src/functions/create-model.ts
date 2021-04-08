import { ADVERSARIES } from "@data/adversaries";
import { BOARDS } from "@data/boards";
import { MAPS } from "@data/maps";
import { SCENARIOS } from "@data/scenarios";
import { SPIRITS } from "@data/spirits";
import type { AdversaryLevelId, AdversaryName } from "@models/game/adversaries";
import type { BalancedBoardName } from "@models/game/board";
import type { ExpansionName, IExpansionOption } from "@models/game/expansions";
import type { MapName } from "@models/game/maps";
import type { ScenarioName } from "@models/game/scenarios";
import type { SpiritName, AspectName } from "@models/game/spirits";
import { getOptionsByExpansion } from "./get-options";

export function createSpiritsModel(expansions: ExpansionName[] = []): (SpiritName | AspectName)[] {
	return getOptionsByExpansion(SPIRITS, expansions).reduce((spiritsOrAspects, spirit) => {
		spiritsOrAspects.push(spirit.name);
		spirit.aspects?.forEach(aspect => {
			spiritsOrAspects.push(aspect.name);
		});
		return spiritsOrAspects;
	}, [] as (SpiritName | AspectName)[])
}

export function createMapsModel(expansions: ExpansionName[] = []): MapName[] {
	return createModel(MAPS, expansions);
}

export function createBoardsModel(expansions: ExpansionName[] = []): BalancedBoardName[] {
	return createModel(BOARDS, expansions);
}

export function createScenariosModel(expansions: ExpansionName[] = []): ScenarioName[] {
	return createModel(SCENARIOS, expansions);
}

export function createAdversariesModel(expansions: ExpansionName[] = []): (AdversaryName | AdversaryLevelId)[] {
	return getOptionsByExpansion(ADVERSARIES, expansions).reduce((adversaries, adversary) => {
		adversaries.push(adversary.name);
		adversary.levels.forEach(level => {
			adversaries.push(level.id);
		});
		return adversaries;
	}, [] as (AdversaryName | AdversaryLevelId)[])
}

export function createUpdatedModel<T>(
	createModel: (expansions?: ExpansionName[]) => T[],
	existingModel: T[],
	expansions: ExpansionName[],
): T[] {
	const baseItems = createModel();
	const expansionItems = createModel(expansions)
		.filter(item => !baseItems.includes(item));
	return [
		...existingModel.filter(item => baseItems.includes(item)),
		...expansionItems
	];
}

interface IGenericExpansionOption<TName extends string> extends IExpansionOption {
	name: TName;
}

function createModel<TName extends string>(
	options: IGenericExpansionOption<TName>[],
	expansions: ExpansionName[]
): TName[] {
	return getOptionsByExpansion(options, expansions).map(option => option.name);
}
