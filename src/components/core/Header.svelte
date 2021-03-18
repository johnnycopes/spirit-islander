<script lang="ts">
	import Link from "@components/shared/Link.svelte";
</script>

<header class="header">
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
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 16px;
		margin-bottom: 36px;
		background: var(--gray-200);
	}

	.name {
		font-size: 30px;
		line-height: 1;
	}

	.icon {
    display: inline-block;
    margin-right: 8px;
    position: relative;
		font-size: 21px;
    bottom: 3px;
	}

	.description {
		text-align: right;
	}
</style>