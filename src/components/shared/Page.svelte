<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	onMount(() => {
		window.scroll(0, 0);
	})
</script>

<main class="page"
	in:fade="{{ duration: 200 }}"
>
	<slot></slot>
</main>

<style lang="scss">
	.page {
		margin: 0 auto;
		padding-top: 24px;
		padding-bottom: 48px;
		width: calc(100% - 16px);
		max-width: 1024px;
		min-height: calc(100% - var(--header-height) - var(--footer-height));
		user-select: none;

		@media screen and (min-width: 768px) {
			padding-top: 48px;
			padding-bottom: 64px;
		}

		:global(.card-group) {
			margin-bottom: 36px;

			@media screen and (min-width: 768px) {
				margin-bottom: 48px;
			}
		}
	}

	:global(.page-content) {
		display: flex;
		flex-direction: column;
	}
	:global(.page-buttons) {
		display: flex;
		justify-content: center;

		:global(.button) {

			&:not(:last-of-type) {
				margin-right: 8px;
			}
		}
	}
</style>