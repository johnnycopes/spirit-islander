import { SPIRITS } from "@data/spirits";
import type { ISpirit, SpiritName } from "@models/game/spirits";

export function getSpiritsByName(spiritNames: SpiritName[]): ISpirit[] {
	const spirits: ISpirit[] = [];
	for (let spiritName of spiritNames) {
		const spirit = SPIRITS.find(spirit => spirit.name === spiritName);
		if (spirit) {
			spirits.push(spirit);
		}
	}
	return spirits;
}