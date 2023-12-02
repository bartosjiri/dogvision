<script lang="ts">
	import { createTooltip, melt } from '@melt-ui/svelte';

	import { Button, Logo, Tooltip } from '$lib/primitives';
	import { About } from '..';

	import { HEADER_BUTTON_TOOLTIP_CONFIG } from '$lib/layout/header';
	import { ABOUT_SLIDEOUT_ID } from '..';

	import { slideouts, addSlideout, removeSlideout } from '$lib/layout/slideouts';

	const {
		elements: { trigger, content },
		states: { open }
	} = createTooltip(HEADER_BUTTON_TOOLTIP_CONFIG);

	const handleClick = () => {
		$slideouts.find((s) => s.id === ABOUT_SLIDEOUT_ID)
			? removeSlideout(ABOUT_SLIDEOUT_ID)
			: addSlideout({ id: ABOUT_SLIDEOUT_ID, component: About });
	};
</script>

<div use:melt={$trigger}>
	<Button on:click={handleClick} class="about-toggle" icon={Logo} size="large" variant="ghost">
		DogVision
	</Button>
</div>

{#if $open}
	<div use:melt={$content}>
		<Tooltip>
			<span>About</span>
		</Tooltip>
	</div>
{/if}

<style lang="scss">
	:global(.about-toggle) {
		padding-left: 0.4rem !important;

		:global(svg) {
			height: 3.6rem !important;
		}

		:global(span) {
			font-weight: 600 !important;
		}
	}
</style>
