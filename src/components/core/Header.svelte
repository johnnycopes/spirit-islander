<script lang="ts">
	import Link from "@components/shared/Link.svelte";
</script>

<header class="header">
	<div class="container">
		<h1 class="name">
			<span class="icon">
				🏝️
			</span>Spirit Islander
		</h1>
		<p class="description">A setup generator for the board game
			<Link href="https://www.boardgamegeek.com/boardgame/162886/spirit-island">
				Spirit Island
			</Link>
		</p>
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		background: var(--gray-200);
		padding: 16px 0;
		box-shadow: 0px 1px 2px hsla(0, 0%, 0%, .2);

		@media screen and (min-width: 768px) {
			padding: 0;
			height: var(--header-height);
		}
	}
	
	.container {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin: 0 auto;
		width: calc(100% - 16px);
		max-width: 1024px;
		
		@media screen and (min-width: 768px) {
			margin: 0 auto;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}

	.icon {
		display: inline-block;
		margin-right: 8px;
		position: relative;
		bottom: 3px;
		font-size: 18px;
		
		@media screen and (min-width: 768px) {
			font-size: 24px;
		}
	}

	.description {
		position: relative;
		top: 2px;
		margin-left: 4px;
		font-size: 12px;

		@media screen and (min-width: 768px) {
			font-size: unset;
			margin-left: 0;
		}
	}
</style>