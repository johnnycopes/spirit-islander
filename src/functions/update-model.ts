import type { ExpansionName } from "@models/game/expansions";

export function updateModel<TName>(
	createModel: (expansions?: ExpansionName[]) => TName[],
	existingModel: TName[],
	expansions: ExpansionName[],
	target: "Expansions" | ExpansionName
): TName[] {
	// console.log(expansions);
	if (target === "Expansions") {
		return recreateModel(createModel, existingModel, expansions);
	}
	if (expansions.includes(target)) {
		return augmentModel(createModel, existingModel, target);
	} else {
		return purgeModel(createModel, existingModel, target);
	}
}

function recreateModel<TName>(
	createModel: (expansions?: ExpansionName[]) => TName[],
	existingModel: TName[],
	expansions: ExpansionName[]
): TName[] {
	const expansionItemNames = getExpansionItemNames(createModel, expansions);
	const allowedItemNames = createModel(expansions);
	return [
		...existingModel.filter(name => allowedItemNames.includes(name)),
		...expansionItemNames
	];
}

function augmentModel<TName>(
	createModel: (expansions?: ExpansionName[]) => TName[],
	existingModel: TName[],
	expansionToAdd: ExpansionName,
): TName[] {
	const expansionItemNames = getExpansionItemNames(createModel, [expansionToAdd]);
	return [
		...existingModel,
		...expansionItemNames,
	];
}

function purgeModel<TName>(
	createModel: (expansions?: ExpansionName[]) => TName[],
	existingModel: TName[],
	expansionToRemove: ExpansionName
): TName[] {
	const expansionItemNames = getExpansionItemNames(createModel, [expansionToRemove]);
	return existingModel.filter(name => !expansionItemNames.includes(name));
}

function getExpansionItemNames<TName>(
	createModel: (expansions?: ExpansionName[]) => TName[],
	expansions: ExpansionName[]
): TName[] {
	const baseItemNames = createModel();
	return createModel(expansions).filter(name => !baseItemNames.includes(name));
}