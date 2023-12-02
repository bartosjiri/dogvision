<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div class:tooltip={true} transition:fade={{ duration: 100 }}>
	<slot />
</div>

<style lang="scss">
	.tooltip {
		position: relative;
		color: var(--color-background-01);
		background: var(--color-accent-07);
		font-size: 1.4rem;
		font-weight: 500;
		padding: 0.4rem 0.8rem;
		border-radius: 0.4rem;
		z-index: 1200;
		pointer-events: none;
	}
</style>
