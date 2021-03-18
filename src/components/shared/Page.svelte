<slot></slot>

<style lang="scss">
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