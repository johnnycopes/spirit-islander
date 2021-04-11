<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "@components/shared/Button.svelte";
	import Card from "@components/shared/Card.svelte";
	import CardGroup from "@components/shared/CardGroup.svelte";
	import CheckboxesGroup from "@components/shared/CheckboxesGroup.svelte";
	import DifficultyEmblem from "@components/shared/DifficultyEmblem.svelte";
	import ExpansionEmblem from "@components/shared/ExpansionEmblem.svelte";
	import Page from "@components/shared/Page.svelte";
	import SelectOne from "@components/shared/SelectOne.svelte";
	import SelectRange from "@components/shared/SelectRange.svelte";
	import { ADVERSARIES } from "@data/adversaries";
	import { BOARDS } from "@data/boards";
	import { EXPANSIONS } from "@data/expansions";
	import { MAPS } from "@data/maps";
	import { SCENARIOS } from "@data/scenarios";
	import { SPIRITS } from "@data/spirits";
	import { createArray } from "@functions/utility/create-array";
	import { getDifficulty } from "@functions/get-difficulty";
	import { getOptionsByExpansion } from "@functions/get-options";
	import { getValidCombos } from "@functions/get-valid-combos";
	import { pluralize } from "@functions/utility/pluralize";
	import type { AdversaryName, AdversaryLevelId } from "@models/game/adversaries";
	import type { BalancedBoardName } from "@models/game/board";
	import type { Difficulty } from "@models/game/difficulty";
	import type { ExpansionName } from "@models/game/expansions";
	import type { ICombo } from "@models/combo.interface";
	import type { IConfig } from "@models/config.interface";
	import type { MapName } from "@models/game/maps";
	import type { Players } from "@models/game/players";
	import type { ScenarioName } from "@models/game/scenarios";
	import type { SpiritName } from "@models/game/spirits";
	import {
		createAdversariesModel,
		createBoardsModel,
		createMapsModel,
		createScenariosModel,
		createSpiritsModel,
		updateModel,
	} from "@functions/create-model";

	export let expansions: ExpansionName[];
	export let players: Players;
	export let difficulty: Difficulty;
	export let difficultyRange: Difficulty[] = [2, 5];
	export let spiritNames: SpiritName[];
	export let mapNames: MapName[];
	export let boardNames: BalancedBoardName[]
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
	$: { config = {
		expansions, players, difficulty, mapNames, boardNames, spiritNames, scenarioNames, adversaryNamesAndIds
	}};
	$: { validCombos = getValidCombos(config) };
	$: jaggedEarthSelected = expansions.includes("Jagged Earth");
	$: playersError = !jaggedEarthSelected && players > 4;
	$: spiritsError = players > spiritNames.length;
	$: mapsError = !mapNames.length;
	$: boardsError = players > boardNames.length;
	$: scenariosError = !scenarioNames.length;
	$: adversariesError = !adversaryNamesAndIds.length;
	$: difficultyError = !validCombos.length;
	$: formDisabled =
		playersError || spiritsError || mapsError || boardsError || scenariosError || adversariesError || difficultyError;

	function onSubmit(): void {
		dispatcher("generate", { config, validCombos });
	}

	function updateModels(target: "Expansions" | ExpansionName): void {
		spiritNames = updateModel(createSpiritsModel, spiritNames, expansions, target);
		mapNames = updateModel(createMapsModel, mapNames, expansions, target);
		boardNames = updateModel(createBoardsModel, boardNames, expansions, target);
		scenarioNames = updateModel(createScenariosModel, scenarioNames, expansions, target);
		adversaryNamesAndIds = updateModel(createAdversariesModel, adversaryNamesAndIds, expansions, target);
	}
</script>

<Page>
	<form class="page-content config"
		class:jagged-earth={jaggedEarthSelected}
	>
		<CardGroup name="You"
			description="What are you playing with?"
		>
			<Card name="expansions">
				<CheckboxesGroup title="Expansions"
					items={EXPANSIONS}
					bind:model={expansions}
					on:target={e => updateModels(e.detail)}
					let:item={expansion}
				>
					{expansion}
				</CheckboxesGroup>
			</Card>

			<Card name="players"
				error={playersError}
				errorMessage="Cannot generate a setup with more than 4 players unless playing with the Jagged Earth expansion"
			>
				<SelectOne label="Players"
					options={createArray(6)}
					bind:value={players}
					let:id={id}
				/>
			</Card>
	
			<Card name="difficulty"
				error={difficultyError}
				errorMessage="Combination of selected maps, adversaries, and scenarios cannot generate a setup with level {difficulty} difficulty"
			>
				<SelectRange label="Difficulty"
					options={createArray(11, 0)}
					bind:values={difficultyRange}
				/>
			</Card>
		</CardGroup>
	
		<CardGroup name="The Game"
			description="What are you open to playing with?"
		>
			<Card name="spirits"
				error={spiritsError}
				errorMessage={`At least ${players} ${pluralize(players, "spirit")} must be selected`}
			>
				<CheckboxesGroup title="Spirits"
					items={getOptionsByExpansion(SPIRITS, expansions)}
					getId={(spirit) => spirit.name}
					bind:model={spiritNames}
					let:item={spirit}
				>
					{spirit.name} <ExpansionEmblem value={spirit.expansion} />
				</CheckboxesGroup>
			</Card>

			<Card name="maps"
				error={mapsError}
				errorMessage="At least 1 option must be selected"
			>
				<CheckboxesGroup title="Maps"
					items={getOptionsByExpansion(MAPS, expansions)}
					getId={(map) => map.name}
					bind:model={mapNames}
					let:item={map}
				>
					{map.name} <DifficultyEmblem value={getDifficulty(map.difficulty, expansions)} />
				</CheckboxesGroup>
			</Card>
	
			<Card name="boards"
				error={boardsError}
				errorMessage="At least {players} {pluralize(players, "board")} must be selected (must match or exceed player count)"
			>
				<CheckboxesGroup title="Boards"
					items={getOptionsByExpansion(BOARDS, expansions)}
					getId={(board) => board.name}
					bind:model={boardNames}
					let:item={board}
				>
					{board.name} <ExpansionEmblem value={board.expansion} />
				</CheckboxesGroup>
			</Card>

			<Card name="scenarios"
				error={scenariosError}
				errorMessage="At least 1 option must be selected"
			>
				<CheckboxesGroup title="Scenarios"
					items={getOptionsByExpansion(SCENARIOS, expansions)}
					getId={(scenario) => scenario.name}
					bind:model={scenarioNames}
					let:item={scenario}
				>
					{scenario.name}
					<DifficultyEmblem value={scenario.difficulty} />
					<ExpansionEmblem value={scenario.expansion} />
				</CheckboxesGroup>
			</Card>
	
			<Card name="adversaries"
				error={adversariesError}
				errorMessage="At least 1 option must be selected"
			>
				<CheckboxesGroup title="Adversaries"
					items={getOptionsByExpansion(ADVERSARIES, expansions)}
					getId={(entity => entity.id || entity.name)}
					getChildren={(entity) => entity.levels}
					bind:model={adversaryNamesAndIds}
					let:item={entity}
				>
					{entity.name}
					{#if entity.id}
						<DifficultyEmblem value={getDifficulty(entity.difficulty, expansions)} />
					{:else}
						<ExpansionEmblem value={entity.expansion} />
					{/if}
				</CheckboxesGroup>
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
				"expansions expansions expansions expansions expansions expansions"
				"players players difficulty difficulty difficulty difficulty";

			@media screen and (min-width: 768px) {
				grid-template-areas:
					"expansions expansions expansions players difficulty difficulty";
			}
		}

		:global(.card-group.the-game) {
			grid-template-areas:
				"spirits spirits spirits spirits"
				"maps maps maps maps"
				"boards boards boards boards"
				"scenarios scenarios scenarios scenarios"
				"adversaries adversaries adversaries adversaries";

			@media screen and (min-width: 768px) {
				grid-template-areas:
					"spirits spirits spirits spirits spirits spirits"
					"maps maps maps scenarios scenarios scenarios"
					"boards boards boards scenarios scenarios scenarios"
					"adversaries adversaries adversaries adversaries adversaries adversaries";
			}
		}

		:global(.players),
		:global(.difficulty) {
			position: relative;

			:global(.card-error) {
				position: absolute;
				top: calc(100% - 14px);
				z-index: 100;
			}
		}

		:global(.expansions) :global(.checkboxes-level-1),
		:global(.boards) :global(.checkboxes-level-1),
		:global(.adversaries) :global(.checkboxes-level-1) {
			display: flex;
			flex-wrap: wrap;
		}


		:global(.spirits) :global(.checkboxes-level-1),
		:global(.adversaries) :global(.checkboxes-level-1) {
			@media screen and (min-width: 768px) {
				display: flex;
				flex-wrap: wrap;
			}
		}

		:global(.expansions) :global(.checkbox-item-level-1),
		:global(.spirits) :global(.checkbox-item-level-1) {
			flex: 0 0 50%;
		}

		:global(.boards) :global(.checkbox-item-level-1) {
			flex: 0 0 25%;
		}

		:global(.adversaries) :global(.checkbox-item-level-1) {
			padding-right: 8px;
			flex: 0 0 50%;

			@media screen and (min-width: 768px) {
				flex: 0 0 25%;
			}
		}
	}

	.config.jagged-earth {
		:global(.boards) :global(.checkbox-item-level-1) {
			flex: 0 0 33.33%;
		}
	}
</style>