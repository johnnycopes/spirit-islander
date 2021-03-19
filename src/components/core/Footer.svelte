<script lang="ts">
	import Link from "@components/shared/Link.svelte";
</script>

<footer>
	<p>
		Made by <Link href="https://www.johnnycopes.com/">johnnycopes</Link>.
		Fork or suggest changes on <Link href="https://github.com/johnnycopes/spirit-islander">GitHub</Link>.
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
		justify-content: center;
		align-items: center;
		height: var(--footer-height);
		margin-bottom: 36px;
		background: var(--gray-50);
		color: var(--gray-600);
		font-size: 16px;
		box-shadow: inset 0 2px 2px hsla(0, 0%, 0%, 0.1);

		p:not(:last-of-type) {
			margin-bottom: 8px;
		}
	}
</style>