import { SPIRITS } from "@data/spirits";
import type { ISpirit, IAspect, SpiritName, AspectName } from "@models/game/spirits";
import { selectRandom } from "./utility/select-random";

export function selectSpirits(
    possibleNames: (SpiritName | AspectName)[],
    quantity: number
) : (SpiritName | AspectName)[] {
    // Get distinct spirit names
    const possibleSpiritNames = possibleNames.filter(n => SPIRITS.find(s => s.name == n) !== undefined);
    // Select 1 random spirit for each player
    const spiritNames = selectRandom(possibleSpiritNames, quantity);

    return spiritNames.map(spiritName => {
        // The spirit with no aspect is always a possibility
        var possibleNamesForSpirit = [ spiritName ];
        // Get all aspects for this spirit.
        var spiritAspects = SPIRITS.find(s => s.name == spiritName)?.aspects?.map(a => a.name);
        // Now get the avaialble aspects for this spirit based on the filtered list selected by the user.
        var possibleAspects = spiritAspects?.filter(a => possibleNames.filter(n => n === a).length > 0);
        possibleAspects?.forEach(a => possibleNamesForSpirit.push(a));
        // Now select at random from the spirit name or one of it's available aspects.
        return selectRandom(possibleNamesForSpirit)[0]
    });
}


export function getSpirits(
	names: (SpiritName | AspectName)[],
): ISpirit[] {
    
	const filteredSpirits: ISpirit[] = [];
	for (let name of names) {
		let foundSpirit = SPIRITS.find(spirit => spirit.name === name);
        let foundAspect: IAspect | undefined;
        if(foundSpirit === undefined) {            
            foundSpirit = SPIRITS.find(spirit => spirit.aspects?.filter(a => a.name === name).length ?? 0 > 0);
            foundAspect = foundSpirit?.aspects?.find(aspect => aspect.name === name);
        }

        if (foundSpirit) {
            if(foundSpirit.aspects) {
                // Spirit has aspects so we need to create a new spirit 
                // entry without any aspects to return and then add
                // the single selected aspect if needed.
                let spiritResult: ISpirit = {
                    name: foundSpirit.name,
                    expansion: foundSpirit.expansion,
                }
                if (foundAspect) {
                    spiritResult.aspects = [ foundAspect ]
                }
                filteredSpirits.push(spiritResult);
            } else {        
                // No aspects so just add the original spirit data.
                filteredSpirits.push(foundSpirit);
            }
        }
	}
	return filteredSpirits;
}