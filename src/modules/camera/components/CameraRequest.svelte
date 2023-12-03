<script lang="ts">
	import { Video } from 'lucide-svelte';

	import { Button, Logo } from '$lib/primitives';

	import { startCamera } from '../helpers/startCamera';

	import { cameraLoading, cameraActive } from '../stores/camera.store';
	import { visorActive } from '$lib/primitives/logo';
</script>

{#if !$cameraActive}
	<div class:camera-request={true}>
		<div class:intro={true}>
			<Logo />
			<p>An&nbsp;app for&nbsp;visualizing<br /> a&nbsp;dog's color&nbsp;perception</p>
		</div>
		<Button
			on:click={() => startCamera({})}
			on:mouseover={() => ($visorActive = true)}
			on:mouseleave={() => {
				if (!$cameraLoading) $visorActive = false;
			}}
			icon={Video}
			size="large"
			loading={$cameraLoading}
		>
			Launch camera
		</Button>
		<div class:privacy-notice={true}>
			<span>
				The video will be processed<br />privately on your device
			</span>
		</div>
	</div>
{/if}

<style lang="scss">
	.camera-request {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 2;

		.intro {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin-bottom: 2.4rem;

			:global(.logo) {
				margin-bottom: 1.2rem;
				--height: 9.4rem;
			}

			p {
				text-align: center;
				font-weight: 500;
			}
		}

		.privacy-notice {
			display: flex;
			align-items: center;
			flex-direction: column;
			color: var(--color-accent-04);
			margin-top: 1.2rem;

			span {
				font-size: 1.4rem;
				text-align: center;
			}
		}
	}
</style>
