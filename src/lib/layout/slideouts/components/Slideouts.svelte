<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';

	import { slideouts } from '../stores/slideouts.store';
</script>

<div class:slideouts={true}>
	{#each $slideouts as { id, component } (id)}
		<div
			class:slideout={true}
			animate:flip={{ duration: 300 }}
			in:fly={{ duration: 150, y: '2rem' }}
			out:fly={{ duration: 150, y: '2rem' }}
		>
			<svelte:component this={component} />
		</div>
	{/each}
</div>

<style lang="scss">
	.slideouts {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 35rem;
		max-width: 100vw;
		max-width: calc(100vw - 2.4rem);

		.slideout {
			position: relative;
			width: 100%;
			margin: 0 1.2rem;
			z-index: 1002;
		}
	}
</style>
