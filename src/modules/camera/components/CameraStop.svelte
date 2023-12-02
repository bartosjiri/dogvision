<script lang="ts">
	import { createTooltip, melt } from '@melt-ui/svelte';
	import { StopCircle } from 'lucide-svelte';

	import { Button, Tooltip } from '$lib/primitives';

	import { cameraActive, stopCamera } from '$modules/camera';

	import { HEADER_BUTTON_TOOLTIP_CONFIG } from '$lib/layout/header';

	const {
		elements: { trigger, content },
		states: { open }
	} = createTooltip(HEADER_BUTTON_TOOLTIP_CONFIG);

	$: if (!$cameraActive) $open = false;
</script>

<div
	use:melt={$trigger}
	on:m-pointerenter={(e) => {
		if (!$cameraActive) e.preventDefault();
	}}
>
	<Button
		on:click={stopCamera}
		icon={StopCircle}
		size="large"
		variant="ghost"
		disabled={!$cameraActive}
	/>
</div>

{#if $open && $cameraActive}
	<div use:melt={$content}>
		<Tooltip>
			<span>Stop camera</span>
		</Tooltip>
	</div>
{/if}
