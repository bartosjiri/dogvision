<script lang="ts">
	import CameraRequest from './CameraRequest.svelte';

	import { cameraElement, cameraWidth, cameraHeight } from '../stores/camera.store';
</script>

<div class:camera={true} bind:offsetWidth={$cameraWidth} bind:offsetHeight={$cameraHeight}>
	<CameraRequest />
	<!-- svelte-ignore a11y-media-has-caption -->
	<video bind:this={$cameraElement} autoplay muted />
</div>

<style lang="scss">
	.camera {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: auto;
		max-width: 100vw;
		max-height: 100vh;

		video {
			position: relative;
			width: 100%;
			max-width: 100vw;
			max-height: 100vh;
		}
	}
</style>
