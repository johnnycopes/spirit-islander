<script lang="ts">
	export let href: string;
</script>

<a class="link"
	href={href}
	target="_blank"
	rel="noopener noreferrer"
>
	<slot></slot>
</a>

<style lang="scss">
	a,
	a:hover,
	a:focus, 
	a:active,
	a:visited {
		color: var(--white);
		border-bottom: 1px solid var(--white);
		text-decoration: none;
	}
</style>