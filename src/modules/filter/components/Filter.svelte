<script lang="ts">
	import { filterElement, filterActive } from '../stores/filter.store';
</script>

<div class:filter={true} class:--hidden={!$filterActive}>
	<canvas bind:this={$filterElement} />
</div>

<style lang="scss">
	.filter {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		canvas {
			display: block;
			width: 100%;
			height: 100%;
		}

		&.--hidden {
			display: none;
		}
	}
</style>
