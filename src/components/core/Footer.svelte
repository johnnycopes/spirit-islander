<script lang="ts">
	import Link from "@components/shared/Link.svelte";
</script>

<footer>
	<p>
		Made by <Link href="https://www.johnnycopes.com/">johnnycopes</Link>.
		Fork or suggest edits on <Link href="https://github.com/johnnycopes/spirit-islander">GitHub</Link>.
	</p>
	<p>
		Spirit Island was created by R. Eric Reuss and is published by
		<Link href="https://store.greaterthangames.com/spirit-island.html">Greater Than Games</Link>.
	</p>
</footer>

<style lang="scss">
	footer {
		display: flex;
		flex-direction: column;
		text-align: center;
		padding: 16px;
		margin-bottom: 36px;
		background: var(--gray-50);
		color: var(--gray-600);
		font-size: 16px;

		p:not(:last-of-type) {
			margin-bottom: 8px;
		}
	}
</style>