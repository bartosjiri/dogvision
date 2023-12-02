<script lang="ts">
	import { Slideouts } from '$lib/layout/slideouts';
</script>

<header>
	<div class:container={true}>
		<Slideouts />
		<div class:panel={true}>
			<slot />
		</div>
	</div>
</header>

<style lang="scss">
	header {
		position: fixed;
		bottom: 3.6rem;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		z-index: 1000;
		pointer-events: none;

		.container {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		:global(.slideouts) {
			position: relative;
			display: flex;
			flex-direction: column;
			margin-bottom: 1.6rem;
			row-gap: 0.8rem;
			z-index: 1001;
		}

		.panel {
			position: relative;
			display: flex;
			align-items: center;
			padding: 0.8rem;
			background: var(--color-background-01);
			border-radius: 1.2rem;
			box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 1px 1px 0px,
				rgba(0, 0, 0, 0.04) 0px 4px 8px -4px, rgba(0, 0, 0, 0.06) 0px 16px 24px -8px;
			z-index: 1010;
			pointer-events: all;

			:global(.divider) {
				display: flex;
				width: 1px;
				margin: 0 0.8rem;
				height: 3.2rem;
				background: var(--color-accent-02);
			}

			:global(.button) {
				color: var(--color-accent-06);
				border-color: transparent;
				margin: 0 0.2rem;

				&:hover {
					color: var(--color-foreground-01);
				}
			}

			:global(.button.--disabled) {
				color: var(--color-accent-03);
				background: transparent;

				&:hover {
					color: var(--color-accent-03);
				}
			}
		}
	}
</style>
