<script lang="ts">
	import { X } from 'lucide-svelte';

	import { Button, Logo } from '$lib/primitives';

	import { removeSlideout } from '$lib/layout/slideouts';

	import { ABOUT_SLIDEOUT_ID } from '$modules/about';
</script>

<div class:about={true}>
	<div class:content={true}>
		<div class:brand={true}>
			<Logo />
			<span>DogVision</span>
		</div>
		<div class:description={true}>
			An&nbsp;app for&nbsp;visualizing<br /> a&nbsp;dog's color&nbsp;perception
		</div>
	</div>
	<div class:footnotes={true}>
		<a href="https://bartosjiri.com" target="_blank">A project by bartosjiri_</a>
		<a href="https://github.com/bartosjiri/dogvision" target="_blank">
			Open-sourced code, contribute on GitHub
		</a>
		<a href="https://dog-vision.andraspeter.com/" target="_blank">
			Color model inspired by András Péter
		</a>
	</div>
	<div class:actions={true}>
		<Button
			icon={X}
			size="small"
			variant="ghost"
			kind="icon-only"
			on:click={() => removeSlideout(ABOUT_SLIDEOUT_ID)}
		/>
	</div>
</div>

<style lang="scss">
	.about {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1.6rem;
		background: var(--color-background-01);
		border-radius: 1.2rem;
		box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 1px 1px 0px,
			rgba(0, 0, 0, 0.04) 0px 4px 8px -4px, rgba(0, 0, 0, 0.06) 0px 16px 24px -8px;
		z-index: 1002;
		pointer-events: all;

		.content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			margin: 6.4rem 0;

			.brand {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 1.6rem;

				:global(.logo) {
					margin-bottom: 0.8rem;
				}

				span {
					font-weight: 600;
				}
			}
		}

		.footnotes {
			display: flex;
			flex-direction: column;
			align-items: center;
			row-gap: 0.2rem;
			text-align: center;

			a {
				color: var(--color-accent-04);
				font-size: 1.4rem;
				transition-property: color;
				transition-duration: var(--transition-duration-02);
				transition-timing-function: var(--transition-function-01);

				&:hover {
					color: var(--color-foreground-01);
				}
			}
		}

		.actions {
			position: absolute;
			top: 0.8rem;
			right: 0.8rem;
		}
	}
</style>
