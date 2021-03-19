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
		justify-content: space-between;
		height: var(--edge-height);
		background: var(--gray-200);
		border-bottom: 1px solid var(--gray-300);
	}
	
	.container {
		width: 1024px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.name {
		font-size: 30px;
	}

	.icon {
		display: inline-block;
		margin-right: 8px;
		position: relative;
		font-size: 24px;
		bottom: 3px;
	}

	.description {
		position: relative;
		top: 2px;
	}
</style>