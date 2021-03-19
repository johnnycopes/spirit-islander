<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<main class="page"
	in:fade="{{ duration: 200 }}"
>
	<slot></slot>
</main>

<style lang="scss">
	.page {
		margin: 0 auto;
		padding-top: 48px;
		padding-bottom: 64px;
		max-width: 1024px;
		min-height: calc(100% - var(--header-height) - var(--footer-height));
	}

	:global(.page-content) {
		display: flex;
		flex-direction: column;
	}
	:global(.page-buttons) {
		display: flex;
		justify-content: center;

		:global(.button) {
			width: 192px;

			&:not(:last-of-type) {
				margin-right: 8px;
			}
		}
	}
</style>