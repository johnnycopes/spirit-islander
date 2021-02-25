<script lang="ts">
	import Selection from "@features/Selection.svelte";
	import Results from "@features/Results.svelte";
	import type { ISelection } from "@models/selection";

	let selection: ISelection | undefined;
</script>

<main class="container">
	<div class="title">
		<h1>Spirit Islander</h1>
		<p>A setup generator for the board game Spirit Island</p>
	</div>
	{#if !selection}
		<Selection on:selection={(e) => selection = e.detail} />
	{:else}
		<Results {...selection} />
	{/if}
</main>

<style>
	.container {
		margin: 32px auto;
		max-width: 768px;
	}

	.title {
		text-align: center;
		margin-bottom: 48px;
	}
</style>