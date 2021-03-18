<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "@shared/Button.svelte";
	import Card from "@shared/Card.svelte";
	import CheckboxesField from "@shared/CheckboxesField.svelte";
	import DifficultyEmblem from "@shared/DifficultyEmblem.svelte";
	import ExpansionEmblem from "@shared/ExpansionEmblem.svelte";
	import CardGroup from "@shared/CardGroup.svelte";
	import Page from "@shared/Page.svelte";
	import SelectField from "@shared/SelectField.svelte";
	import type { IConfig } from "@models/config.interface";
	import type { ICombo } from "@models/combo.interface";
	import type { Players } from "@models/game/players";
	import type { Difficulty } from "@models/game/difficulty";
	import type { MapName } from "@models/game/maps";
	import type { ExpansionName } from "@models/game/expansions";
	import type { SpiritName } from "@models/game/spirits";
	import type { AdversaryName, AdversaryLevelId } from "@models/game/adversaries";
	import type { ScenarioName } from "@models/game/scenarios";
	import { SPIRITS } from "@data/spirits";
	import { EXPANSIONS } from "@data/expansions";
	import { MAPS } from "@data/maps";
	import { ADVERSARIES } from "@data/adversaries";
	import { SCENARIOS } from "@data/scenarios";
	import { createArray } from "@functions/utility/create-array";
	import { getOptions } from "@functions/get-options";
	import { getDifficulty } from "@functions/get-difficulty";
	import { getValidCombos } from "@functions/get-valid-combos";
	import { pluralize } from "@functions/utility/pluralize";
	import {
		createAdversariesModel,
		createMapsModel,
		createScenariosModel,
		createSpiritsModel,
		createUpdatedModel,
	} from "@functions/create-model";

	export let players: Players;
	export let difficulty: Difficulty;
	export let expansions: ExpansionName[];
	export let spiritNames: SpiritName[];
	export let mapNames: MapName[];
	export let scenarioNames: ScenarioName[];
	export let adversaryNamesAndIds: (AdversaryName | AdversaryLevelId)[];
	const dispatcher = createEventDispatcher<{
		generate: {
			config: IConfig,
			validCombos: ICombo[],
		}
	}>();

	let config: IConfig;
	let validCombos: ICombo[];
	$: { config = { players, expansions, difficulty, mapNames, spiritNames, scenarioNames, adversaryNamesAndIds }};
	$: { validCombos = getValidCombos(config) };
	$: spiritsError = players > spiritNames.length;
	$: mapsError = !mapNames.length;
	$: scenariosError = !scenarioNames.length;
	$: adversariesError = !adversaryNamesAndIds.length;
	$: difficultyError = !validCombos.length;
	$: formDisabled = spiritsError || mapsError || scenariosError || adversariesError || difficultyError;

	// When expansions are selected, update models to include items from selected expansions
	$: {
		updateModels(expansions);
	}

	function onSubmit(): void {
		dispatcher("generate", { config, validCombos });
	}

	function updateModels(expansions: ExpansionName[]): void {
		spiritNames = createUpdatedModel(createSpiritsModel, spiritNames, expansions);
		mapNames = createUpdatedModel(createMapsModel, mapNames, expansions);
		scenarioNames = createUpdatedModel(createScenariosModel, scenarioNames, expansions);
		adversaryNamesAndIds = createUpdatedModel(createAdversariesModel, adversaryNamesAndIds, expansions);
	}
</script>

<Page>
	<form class="config page-content">
		<CardGroup name="You"
			description="What are you playing with?"
		>
			<Card name="players">
				<SelectField label="Players"
					options={createArray(4)}
					bind:value={players}
				/>
			</Card>
	
			<Card name="difficulty"
				error={difficultyError}
				errorMessage="Combination of selected maps, adversaries, and scenarios cannot make a game with level {difficulty} difficulty"
			>
				<SelectField label="Difficulty"
					options={createArray(11, 0)}
					bind:value={difficulty}
				/>
			</Card>
			
			<Card name="expansions">
				<CheckboxesField title="Expansions"
					items={EXPANSIONS}
					let:item={expansion}
					bind:model={expansions}
				>
					{expansion}
				</CheckboxesField>
			</Card>
		</CardGroup>
	
		<CardGroup name="The Game"
			description="What are you open to playing with?"
		>
			<Card name="spirits"
				error={spiritsError}
				errorMessage={`At least ${players} ${pluralize(players, "spirit")} must be selected`}
			>
				<CheckboxesField title="Spirits"
					items={getOptions(SPIRITS, expansions)}
					getId={(spirit) => spirit.name}
					bind:model={spiritNames}
					let:item={spirit}
				>
					{spirit.name} <ExpansionEmblem value={spirit.expansion} />
				</CheckboxesField>
			</Card>
	
			<Card name="maps"
				error={mapsError}
				errorMessage="At least 1 option must be selected"
			>
				<CheckboxesField title="Maps"
					items={getOptions(MAPS, expansions)}
					getId={(map) => map.name}
					let:item={map}
					bind:model={mapNames}
				>
					{map.name} <DifficultyEmblem value={getDifficulty(map.difficulty, expansions)} />
				</CheckboxesField>
			</Card>
	
			<Card name="adversaries"
				error={adversariesError}
				errorMessage="At least 1 option must be selected"
			>
				<CheckboxesField title="Adversaries"
					items={getOptions(ADVERSARIES, expansions)}
					getId={(entity => entity.name || entity.id)}
					getChildren={(entity) => entity.levels}
					bind:model={adversaryNamesAndIds}
					let:item={entity}
				>
					{#if entity.name}
						{entity.name} <ExpansionEmblem value={entity.expansion} />
					{:else}
						Level {entity.level} <DifficultyEmblem value={getDifficulty(entity.difficulty, expansions)} />
					{/if}
				</CheckboxesField>
			</Card>
		
			<Card name="scenarios"
				error={scenariosError}
				errorMessage="At least 1 option must be selected"
			>
				<CheckboxesField title="Scenarios"
					items={getOptions(SCENARIOS, expansions)}
					getId={(scenario) => scenario.name}
					let:item={scenario}
					bind:model={scenarioNames}
				>
					{scenario.name}
					<DifficultyEmblem value={scenario.difficulty} />
					<ExpansionEmblem value={scenario.expansion} />
				</CheckboxesField>
			</Card>
		</CardGroup>
	</form>

	<div class="page-buttons">
		<Button on:clicked={onSubmit}
			disabled={formDisabled}
		>
			Generate
		</Button>
	</div>
</Page>

<style lang="scss">
	.config {

		:global(.card-group.you) {
			grid-template-areas:
				"players difficulty expansions expansions";
		}

		:global(.card-group.the-game) {
			grid-template-areas:
				"spirits spirits spirits spirits"
				"maps maps scenarios scenarios"
				"adversaries adversaries adversaries adversaries"
		}

		:global(.button) {
			margin: 0 auto;
			width: 256px;
		}

		:global(.difficulty) {
			position: relative;

			:global(.card-error) {
				position: absolute;
				top: calc(100% - 14px);
			}
		}

		:global(.expansions) :global(.checkboxes-level-1),
		:global(.spirits) :global(.checkboxes-level-1),
		:global(.adversaries) :global(.checkboxes-level-1) {
			display: flex;
			flex-wrap: wrap;
		}

		:global(.expansions) :global(.checkbox-item-level-1),
		:global(.spirits) :global(.checkbox-item-level-1) {
			flex: 1 0 50%;
		}

		:global(.adversaries) :global(.checkbox-item-level-1) {
			flex: 1 0 auto;
		}
	}
</style>