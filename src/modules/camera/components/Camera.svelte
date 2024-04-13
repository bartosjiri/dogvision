<script lang="ts">
	import CameraRequest from './CameraRequest.svelte';

	import { cameraElement } from '../stores/camera.store';
</script>

<div class:camera={true}>
	<CameraRequest />
	<!-- svelte-ignore a11y-media-has-caption -->
	<video bind:this={$cameraElement} autoplay muted playsinline disablePictureInPicture />
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
			max-width: calc(100vw - 2 * 1.2rem);
			max-height: 100vh;
			max-height: calc(100vh - 2 * 1.2rem);
			border-radius: 1.2rem;
			overflow: hidden;
		}
	}
</style>
